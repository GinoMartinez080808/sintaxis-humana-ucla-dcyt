import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  SURVEY_DATA,
  SURVEY_THEMES,
  SURVEY_FORM_TITLE,
  SURVEY_FORM_URL,
  SURVEY_FORM_TOTAL_QUESTIONS,
  getPercentage,
  formatPercent,
  getTopOption,
  getSurveyMetrics,
  getConclusionSummary,
  getThemeNote,
  validateSurvey,
  validateSurveyThemes,
} from "../lib/content/survey.ts";

const EXPECTED_COUNTS = {
  q1: [10, 0, 0],
  q2: [10, 0, 0, 0],
  q3: [10, 0, 0],
  q4: [4, 6, 0],
  q5: [6, 4, 0],
  q6: [6, 1, 3, 0],
  q7: [7, 2, 1, 0],
  q8: [4, 4, 1, 1],
};

test("el cuestionario contiene exactamente ocho preguntas", () => {
  assert.equal(SURVEY_DATA.length, 8);
});

test("los conteos coinciden con el conjunto de datos original", () => {
  for (const question of SURVEY_DATA) {
    assert.deepEqual(
      question.options.map((option) => option.count),
      EXPECTED_COUNTS[question.id],
      `${question.id} alteró sus conteos`,
    );
  }
});

test("cada pregunta suma diez respuestas y conserva su denominador", () => {
  for (const question of SURVEY_DATA) {
    assert.equal(question.totalResponses, 10, `${question.id} no declara 10`);
    const sum = question.options.reduce((total, option) => total + option.count, 0);
    assert.equal(sum, question.totalResponses, `${question.id} no suma 10`);
  }
});

test("los porcentajes se calculan sobre el denominador de cada pregunta", () => {
  assert.equal(getPercentage(10, 10), 100);
  assert.equal(getPercentage(6, 10), 60);
  assert.equal(getPercentage(0, 10), 0);
  for (const question of SURVEY_DATA) {
    const sum = question.options.reduce(
      (total, option) => total + getPercentage(option.count, question.totalResponses),
      0,
    );
    assert.ok(Math.abs(sum - 100) < 0.001, `${question.id} no totaliza 100%`);
  }
});

test("el formato de porcentaje usa coma decimal y evita decimales innecesarios", () => {
  assert.equal(formatPercent(60), "60%");
  assert.equal(formatPercent(33.3333), "33,3%");
  assert.equal(formatPercent(16.6666), "16,7%");
});

test("las respuestas con cero se conservan y siguen siendo localizables", () => {
  const q4 = SURVEY_DATA.find((question) => question.id === "q4");
  const zero = q4.options.find((option) => option.count === 0);
  assert.ok(zero, "q4 debe conservar su opción con cero respuestas");
  assert.equal(zero.label.startsWith("Dejo de estudiar"), true);
});

test("las métricas se derivan del conjunto y no de constantes paralelas", () => {
  const metrics = getSurveyMetrics();
  assert.equal(metrics.length, 4);
  assert.equal(metrics.find((metric) => metric.id === "total").value, "10");
  assert.equal(metrics.find((metric) => metric.id === "questions").value, "8");
  assert.equal(metrics.find((metric) => metric.id === "program").value, "100%");
  assert.equal(metrics.find((metric) => metric.id === "age").value, "100%");
  assert.match(
    metrics.find((metric) => metric.id === "program").note,
    /Ing\. Informática · 10 de 10 respuestas/,
  );
  assert.match(
    metrics.find((metric) => metric.id === "age").note,
    /17 - 19 años · 10 de 10 respuestas/,
  );
});

test("la opción más seleccionada se obtiene por conteo", () => {
  const q8 = SURVEY_DATA.find((question) => question.id === "q8");
  assert.equal(getTopOption(q8).count, 4);
});

test("los cuatro temas cubren las ocho preguntas sin duplicarlas", () => {
  assert.equal(SURVEY_THEMES.length, 4);
  const themedIds = SURVEY_THEMES.flatMap((theme) => theme.questionIds);
  assert.equal(themedIds.length, SURVEY_DATA.length);
  assert.deepEqual([...themedIds].sort(), SURVEY_DATA.map((question) => question.id).sort());
});

test("la validación rechaza conteos negativos", () => {
  const invalid = structuredClone(SURVEY_DATA);
  invalid[0].options[0].count = -1;
  assert.throws(() => validateSurvey(invalid), /negativo|entero/i);
});

test("la validación rechaza totales inconsistentes", () => {
  const invalid = structuredClone(SURVEY_DATA);
  invalid[0].options[0].count = 9;
  assert.throws(() => validateSurvey(invalid), /suma|total/i);
});

test("la validación rechaza un cuestionario sin opciones", () => {
  const invalid = structuredClone(SURVEY_DATA);
  invalid[0].options = [];
  assert.throws(() => validateSurvey(invalid), /opciones/i);
});

test("la validación rechaza un número incorrecto de preguntas", () => {
  assert.throws(() => validateSurvey(SURVEY_DATA.slice(0, 7)), /ocho preguntas/i);
});

test("la validación rechaza identificadores duplicados", () => {
  const invalid = structuredClone(SURVEY_DATA);
  invalid[1].id = invalid[0].id;
  assert.throws(() => validateSurvey(invalid), /duplicado/i);
});

test("la validación rechaza un tema desconocido", () => {
  const invalid = structuredClone(SURVEY_DATA);
  invalid[0].themeId = "otro";
  assert.throws(() => validateSurvey(invalid), /tema desconocido/i);
});

test("la validación de temas rechaza una pregunta sin asignar", () => {
  const themes = structuredClone(SURVEY_THEMES);
  themes[0].questionIds = ["q1"];
  assert.throws(
    () => validateSurveyThemes(SURVEY_DATA, themes),
    /no está asignada/i,
  );
});

test("la validación de temas rechaza una pregunta asignada dos veces", () => {
  const themes = structuredClone(SURVEY_THEMES);
  themes[1].questionIds.push("q1");
  assert.throws(
    () => validateSurveyThemes(SURVEY_DATA, themes),
    /más de un tema/i,
  );
});

test("getPercentage rechaza denominadores inválidos en lugar de devolver 0", () => {
  assert.throws(() => getPercentage(1, 0), /denominador/i);
  assert.throws(() => getPercentage(1, Number.NaN), /denominador/i);
});

test("formatPercent rechaza valores no finitos", () => {
  assert.throws(() => formatPercent(Number.NaN), /porcentaje/i);
  assert.throws(() => formatPercent(Number.POSITIVE_INFINITY), /porcentaje/i);
});

test("las lecturas de tema derivan sus conteos del conjunto", () => {
  assert.match(getThemeNote("perfil"), /^Diez participantes/);
  assert.match(getThemeNote("organizacion"), /seis reconocen/);
  assert.match(getThemeNote("aprendizaje"), /siete escuchan/);
  assert.match(getThemeNote("aprendizaje"), /grupo fijo fue seleccionada por uno/);
  assert.doesNotMatch(getThemeNote("aprendizaje"), /uno prefieren/i);
  assert.match(getThemeNote("autogestion"), /Cuatro reportan/);
});

test("la conclusión separa los denominadores de Q4, Q6 y Q7", () => {
  const summary = getConclusionSummary();
  assert.match(summary, /seis de diez reconocen dificultad/);
  assert.match(summary, /seis de diez prefieren estudiar en soledad/);
  assert.match(summary, /siete de diez dicen escuchar/);
  assert.doesNotMatch(summary, /una parte reconoce dificultad.*prefiere/i);
});

test("el acceso apunta al cuestionario verificado", () => {
  assert.equal(SURVEY_FORM_TITLE, "Hábitos y Principios");
  assert.equal(SURVEY_FORM_TOTAL_QUESTIONS, 9);
  assert.equal(
    SURVEY_FORM_URL,
    "https://docs.google.com/forms/d/e/1FAIpQLSdzkhDwsCXzJLBydLrIEhDJsDBBXsxM8BjVRkphrTTCzconcA/viewform",
  );
});

test("el QR existe, conserva su resolución y no depende de recursos externos", () => {
  const svg = readFileSync(
    new URL("../public/images/qr-encuesta.svg", import.meta.url),
    "utf8",
  );
  assert.match(svg, /viewBox="0 0 1024 1024"/);
  assert.match(svg, /data:image\/webp;base64,/);
  assert.doesNotMatch(svg, /href="https?:\/\//);
});
