export type SurveyOption = {
  label: string;
  count: number;
};

export type SurveyThemeId =
  | "perfil"
  | "organizacion"
  | "aprendizaje"
  | "autogestion";

const THEME_IDS: readonly SurveyThemeId[] = [
  "perfil",
  "organizacion",
  "aprendizaje",
  "autogestion",
];

const THEME_ID_SET = new Set<string>(THEME_IDS);

export type SurveyQuestion = {
  id: string;
  category: string;
  themeId: SurveyThemeId;
  question: string;
  totalResponses: number;
  options: SurveyOption[];
};

export type SurveyTheme = {
  id: SurveyThemeId;
  letter: string;
  shortTitle: string;
  title: string;
  description: string;
  questionIds: string[];
};

export type SurveyMetric = {
  id: string;
  label: string;
  value: string;
  note: string;
  accent?: boolean;
};

export type SurveyFinding = {
  id: string;
  questionId: string;
  optionIndex: number;
  statement: string;
};

export type SurveyInsight = {
  id: string;
  title: string;
  body: string;
  caveat: string;
  evidence: { questionId: string; optionIndex: number }[];
};

export const SURVEY_DATA: SurveyQuestion[] = [
  {
    id: "q1",
    category: "Datos Generales del Participante",
    themeId: "perfil",
    question: "¿En qué rango de edad te ubicas?",
    totalResponses: 10,
    options: [
      { label: "17 - 19 años", count: 10 },
      { label: "20 - 30 años", count: 0 },
      { label: "30+ años", count: 0 },
    ],
  },
  {
    id: "q2",
    category: "Datos Generales del Participante",
    themeId: "perfil",
    question: "¿Qué carrera cursas?",
    totalResponses: 10,
    options: [
      { label: "Ing. Informática", count: 10 },
      { label: "Ing. Producción", count: 0 },
      { label: "Ing. Telemática", count: 0 },
      { label: "Análisis de Sistemas", count: 0 },
    ],
  },
  {
    id: "q3",
    category: "Hábitos del Estudiante",
    themeId: "organizacion",
    question:
      "¿Cómo administras tu tiempo cuando tienes múltiples entregas o exámenes en una misma semana?",
    totalResponses: 10,
    options: [
      {
        label:
          "Organizo un plan de estudio previo, priorizo tareas y cumplo con los tiempos establecidos.",
        count: 10,
      },
      {
        label:
          "Estudio o trabajo a última hora bajo presión, durmiendo poco o nada.",
        count: 0,
      },
      {
        label:
          "Me abrumo por la cantidad de trabajo y termino postergando el estudio.",
        count: 0,
      },
    ],
  },
  {
    id: "q4",
    category: "Hábitos del Estudiante",
    themeId: "organizacion",
    question:
      "¿Qué haces cuando notas que estás distraído o perdiendo el tiempo mientras deberías estar estudiando o trabajando?",
    totalResponses: 10,
    options: [
      {
        label: "Aplico técnicas de concentración y retomo la tarea.",
        count: 4,
      },
      {
        label:
          "Reconozco la distracción, pero me cuesta volver a concentrarme y sigo perdiendo tiempo.",
        count: 6,
      },
      {
        label:
          "Dejo de estudiar por completo y me dedico a otra actividad relajante o de ocio.",
        count: 0,
      },
    ],
  },
  {
    id: "q5",
    category: "Hábitos del Estudiante",
    themeId: "organizacion",
    question:
      "¿Con qué frecuencia evalúas o revisas tu propio progreso académico para ajustar tus hábitos?",
    totalResponses: 10,
    options: [
      {
        label:
          "Constantemente reflexiono sobre mis resultados e introduzco mejoras en mis rutinas.",
        count: 6,
      },
      {
        label:
          "Solo lo hago cuando obtengo una nota muy baja o atravieso un problema.",
        count: 4,
      },
      {
        label:
          "Rara vez reflexiono sobre mis hábitos; mantengo siempre la misma rutina.",
        count: 0,
      },
    ],
  },
  {
    id: "q6",
    category: "Cómo el estudiante se relaciona con sus compañeros",
    themeId: "aprendizaje",
    question: "¿Al momento de estudiar qué compañía prefieres tener?",
    totalResponses: 10,
    options: [
      {
        label: "Estudio solo, me concentro en silencio y soledad.",
        count: 6,
      },
      {
        label:
          "Tengo mi grupo de estudio, nos enfocamos juntos y siempre estudio con ellos.",
        count: 1,
      },
      {
        label: "No me va mal solo ni en grupo, alterno entre ambas.",
        count: 3,
      },
      {
        label:
          "No me concentro cuando estoy solo así que sólo uso la IA o no estudio.",
        count: 0,
      },
    ],
  },
  {
    id: "q7",
    category: "Cómo el estudiante se relaciona con sus compañeros",
    themeId: "aprendizaje",
    question: "¿Escuchas atentamente los errores durante el estudio?",
    totalResponses: 10,
    options: [
      {
        label: "Sí, escucho a mis compañeros cuando me corrigen un error.",
        count: 7,
      },
      {
        label:
          "A veces, los escucho pero opino el por qué se equivocan o no me equivoco.",
        count: 2,
      },
      {
        label: "Depende, a veces corrigen cuando están equivocados.",
        count: 1,
      },
      {
        label: "Nop, sé que no me equivoco cuando resuelvo algo.",
        count: 0,
      },
    ],
  },
  {
    id: "q8",
    category: "Autogestión y Autocuidado",
    themeId: "autogestion",
    question:
      "¿Descansas lo suficiente para tener un buen rendimiento académico?",
    totalResponses: 10,
    options: [
      { label: "Creo que descanso lo suficiente (6-9 horas).", count: 4 },
      { label: "Descanso pocas horas (4-6 horas).", count: 4 },
      {
        label:
          "No descanso, me ocupo del trabajo, del estudio o simplemente me gusta estar despierto.",
        count: 1,
      },
      {
        label: "Me cuesta descansar la mente (30min-2 horas).",
        count: 1,
      },
    ],
  },
];

export const SURVEY_THEMES: SurveyTheme[] = [
  {
    id: "perfil",
    letter: "A",
    shortTitle: "Perfil",
    title: "Perfil del estudiante",
    description:
      "Antes de analizar hábitos, describimos quiénes respondieron. Las dos preguntas de perfil sitúan la muestra en un contexto académico concreto.",
    questionIds: ["q1", "q2"],
  },
  {
    id: "organizacion",
    letter: "B",
    shortTitle: "Organización",
    title: "Organización, concentración y mejora personal",
    description:
      "Tres preguntas observan la relación entre planificación, concentración y revisión del propio desempeño. Se presentan juntas porque describen un mismo proceso; cada una se respondió por separado.",
    questionIds: ["q3", "q4", "q5"],
  },
  {
    id: "aprendizaje",
    letter: "C",
    shortTitle: "Aprendizaje",
    title: "Aprendizaje individual y colaborativo",
    description:
      "Dos preguntas sobre el entorno de estudio y la apertura a la corrección. Se leen como dimensiones paralelas del aprendizaje colaborativo, no como una relación causa-efecto.",
    questionIds: ["q6", "q7"],
  },
  {
    id: "autogestion",
    letter: "D",
    shortTitle: "Autocuidado",
    title: "Autogestión y autocuidado",
    description:
      "Una pregunta sobre descanso y rendimiento académico. Sus cuatro opciones no forman una escala de horas: la última describe dificultad para descansar la mente.",
    questionIds: ["q8"],
  },
];

const SURVEY_FINDINGS: SurveyFinding[] = [
  {
    id: "planning",
    questionId: "q3",
    optionIndex: 0,
    statement: "declaran un plan de estudio previo y priorización",
  },
  {
    id: "focus",
    questionId: "q4",
    optionIndex: 1,
    statement: "reconocen que les cuesta retomar la concentración",
  },
  {
    id: "self-review",
    questionId: "q5",
    optionIndex: 0,
    statement: "evalúan su progreso constantemente",
  },
  {
    id: "solo",
    questionId: "q6",
    optionIndex: 0,
    statement: "prefieren estudiar en soledad",
  },
  {
    id: "feedback",
    questionId: "q7",
    optionIndex: 0,
    statement: "escuchan las correcciones de sus compañeros",
  },
  {
    id: "rest",
    questionId: "q8",
    optionIndex: 0,
    statement: "reportan descansar entre 6 y 9 horas",
  },
];

export const SURVEY_INSIGHTS: SurveyInsight[] = [
  {
    id: "planning-focus",
    title: "Planificar y concentrarse no son lo mismo",
    body: "El grupo declara un plan de estudio previo, pero una parte reconoce que le cuesta retomar la tarea después de una distracción. La planificación describe una intención organizada; la concentración, una dificultad reportada en otra pregunta.",
    caveat: "Preguntas distintas, sin cruce por persona.",
    evidence: [
      { questionId: "q3", optionIndex: 0 },
      { questionId: "q4", optionIndex: 1 },
    ],
  },
  {
    id: "solo-feedback",
    title: "Estudiar solo no equivale a rechazar la corrección",
    body: "La mayoría prefiere estudiar en soledad y, por separado, la mayoría también afirma escuchar a sus compañeros cuando le corrigen un error. El diseño no permite saber si quienes estudian solos son los mismos que aceptan la corrección.",
    caveat: "Observaciones paralelas, no correlación.",
    evidence: [
      { questionId: "q6", optionIndex: 0 },
      { questionId: "q7", optionIndex: 0 },
    ],
  },
  {
    id: "review-rest",
    title: "Autoevaluación y descanso: dos lecturas paralelas",
    body: "Una parte del grupo revisa su progreso constantemente; otra parte reporta descansar entre 6 y 9 horas. Son preguntas separadas: no puede concluirse que la autoevaluación cause el descanso ni lo contrario.",
    caveat: "Preguntas distintas, sin causalidad.",
    evidence: [
      { questionId: "q5", optionIndex: 0 },
      { questionId: "q8", optionIndex: 0 },
    ],
  },
  {
    id: "productivity-wellbeing",
    title: "Productividad y bienestar en la misma conversación",
    body: "El grupo se describe organizado y reflexivo, pero también reporta dificultades de concentración y un descanso desigual. Leer ambos lados juntos evita reducir los hábitos académicos a una sola métrica de productividad.",
    caveat: "Interpretación del equipo, no un hallazgo medido.",
    evidence: [
      { questionId: "q4", optionIndex: 1 },
      { questionId: "q8", optionIndex: 1 },
    ],
  },
];

export const SURVEY_CONCLUSION = {
  title: "Un grupo organizado, con retos de concentración y descanso.",
  limit:
    "La muestra es pequeña y no probabilística: describe al grupo consultado y no representa a toda la UCLA. Las preguntas se respondieron por separado, así que no permiten establecer relaciones causales ni cruces entre respuestas individuales.",
} as const;

const COUNT_WORDS = [
  "cero",
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "diez",
];

function countWord(count: number): string {
  return COUNT_WORDS[count] ?? String(count);
}

function capitalize(text: string): string {
  return text.length === 0 ? text : text[0].toUpperCase() + text.slice(1);
}

export function getPercentage(count: number, total: number): number {
  if (!Number.isFinite(count) || !Number.isFinite(total) || total <= 0) {
    throw new Error(
      "No se puede calcular un porcentaje con un denominador inválido.",
    );
  }

  return (count / total) * 100;
}

export function formatPercent(value: number): string {
  if (!Number.isFinite(value)) {
    throw new Error("No se puede formatear un porcentaje inválido.");
  }

  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(1).replace(".", ",");

  return `${text}%`;
}

export function getQuestion(id: string): SurveyQuestion {
  const question = SURVEY_DATA.find((item) => item.id === id);

  if (!question) {
    throw new Error(`No existe la pregunta ${id} en el conjunto de datos.`);
  }

  return question;
}

export function getTopOption(question: SurveyQuestion): SurveyOption {
  return question.options.reduce((top, option) =>
    option.count > top.count ? option : top,
  );
}

function getFindingData(finding: SurveyFinding) {
  const question = getQuestion(finding.questionId);
  const option = question.options[finding.optionIndex];

  if (!option) {
    throw new Error(
      `La evidencia ${finding.id} apunta a una opción inexistente.`,
    );
  }

  return {
    ...finding,
    count: option.count,
    total: question.totalResponses,
    optionLabel: option.label,
    question: question.question,
  };
}

export function getFindingById(findingId: string) {
  const finding = SURVEY_FINDINGS.find((item) => item.id === findingId);

  if (!finding) {
    throw new Error(`No existe el indicador ${findingId}.`);
  }

  return getFindingData(finding);
}

export function getThemeNote(themeId: SurveyThemeId): string {
  switch (themeId) {
    case "perfil": {
      const age = getQuestion("q1");
      const program = getQuestion("q2");
      const ageTop = getTopOption(age);
      const programTop = getTopOption(program);

      return capitalize(
        `${countWord(age.totalResponses)} participantes seleccionaron el rango de ${ageTop.label} y la carrera de ${programTop.label}. La homogeneidad describe al grupo consultado; no permite comparar perfiles ni extrapolar a otras carreras.`,
      );
    }

    case "organizacion": {
      const planning = getQuestion("q3");
      const distraction = getQuestion("q4");
      const review = getQuestion("q5");

      return capitalize(
        `${countWord(planning.options[0].count)} de ${countWord(planning.totalResponses)} declaran un plan previo y priorización; ${countWord(distraction.options[1].count)} reconocen que les cuesta retomar la tarea después de una distracción; ${countWord(review.options[0].count)} evalúan su progreso constantemente. La organización declarada no equivale a una medición objetiva de la conducta.`,
      );
    }

    case "aprendizaje": {
      const company = getQuestion("q6");
      const feedback = getQuestion("q7");

      return capitalize(
        `${countWord(company.options[0].count)} prefieren estudiar solos, ${countWord(company.options[2].count)} alternan entre el estudio individual y el grupal y la opción de un grupo fijo fue seleccionada por ${countWord(company.options[1].count)}. Por separado, ${countWord(feedback.options[0].count)} escuchan las correcciones de sus compañeros. El diseño no permite saber si quienes estudian solos son los mismos que aceptan la corrección.`,
      );
    }

    case "autogestion": {
      const rest = getQuestion("q8");

      return capitalize(
        `${countWord(rest.options[0].count)} reportan descansar entre 6 y 9 horas y ${countWord(rest.options[1].count)} entre 4 y 6 horas. La opción de no descansar fue seleccionada por ${countWord(rest.options[2].count)}, y la de dificultad para descansar la mente por ${countWord(rest.options[3].count)}. La opción final no debe interpretarse como una duración exacta de sueño.`,
      );
    }
  }
}

export function getConclusionSummary(): string {
  const planning = getFindingById("planning");
  const selfReview = getFindingById("self-review");
  const focus = getFindingById("focus");
  const solo = getFindingById("solo");
  const feedback = getFindingById("feedback");
  const rest = getQuestion("q8");

  return capitalize(
    `${countWord(planning.count)} de ${countWord(planning.total)} estudiantes declaran un plan de estudio previo y ${countWord(selfReview.count)} de ${countWord(selfReview.total)} evalúan su progreso con frecuencia. Al mismo tiempo, ${countWord(focus.count)} de ${countWord(focus.total)} reconocen dificultad para recuperar la concentración, ${countWord(solo.count)} de ${countWord(solo.total)} prefieren estudiar en soledad y ${countWord(feedback.count)} de ${countWord(feedback.total)} dicen escuchar las correcciones de sus compañeros. En descanso, ${countWord(rest.options[0].count)} reportan entre 6 y 9 horas, ${countWord(rest.options[1].count)} entre 4 y 6 horas, la opción de no descansar fue seleccionada por ${countWord(rest.options[2].count)} y la dificultad para descansar la mente por ${countWord(rest.options[3].count)}.`,
  );
}

function buildSurveyMetrics(): SurveyMetric[] {
  const total = SURVEY_DATA[0].totalResponses;
  const program = getQuestion("q2");
  const programTop = getTopOption(program);
  const age = getQuestion("q1");
  const ageTop = getTopOption(age);

  return [
    {
      id: "total",
      label: "Respuestas totales",
      value: String(total),
      note: `n = ${total} · muestra completa`,
      accent: true,
    },
    {
      id: "questions",
      label: "Preguntas evaluadas",
      value: String(SURVEY_DATA.length),
      note: "cuestionario de campo",
    },
    {
      id: "program",
      label: "Distribución académica",
      value: formatPercent(getPercentage(programTop.count, program.totalResponses)),
      note: `${programTop.label} · ${programTop.count} de ${program.totalResponses} respuestas`,
      accent: true,
    },
    {
      id: "age",
      label: "Rango de edad predominante",
      value: formatPercent(getPercentage(ageTop.count, age.totalResponses)),
      note: `${ageTop.label} · ${ageTop.count} de ${age.totalResponses} respuestas`,
    },
  ];
}

export function getSurveyMetrics(): SurveyMetric[] {
  return buildSurveyMetrics();
}

export function validateSurvey(questions: SurveyQuestion[]): void {
  if (!Array.isArray(questions) || questions.length !== 8) {
    throw new Error("El cuestionario debe contener exactamente ocho preguntas.");
  }

  const ids = new Set<string>();
  const totals = new Set<number>();

  for (const question of questions) {
    if (!question || typeof question !== "object") {
      throw new Error("El cuestionario contiene una pregunta inválida.");
    }

    if (!question.id || typeof question.id !== "string") {
      throw new Error("Cada pregunta debe tener un identificador.");
    }

    if (ids.has(question.id)) {
      throw new Error(`Identificador duplicado en la pregunta ${question.id}.`);
    }

    ids.add(question.id);

    if (!THEME_ID_SET.has(question.themeId)) {
      throw new Error(
        `La pregunta ${question.id} declara un tema desconocido.`,
      );
    }

    if (!Number.isInteger(question.totalResponses) || question.totalResponses <= 0) {
      throw new Error(
        `La pregunta ${question.id} debe declarar un total de respuestas entero y positivo.`,
      );
    }

    totals.add(question.totalResponses);

    if (!Array.isArray(question.options) || question.options.length === 0) {
      throw new Error(`La pregunta ${question.id} no tiene opciones de respuesta.`);
    }

    let sum = 0;

    for (const option of question.options) {
      if (!option || typeof option.label !== "string" || option.label.length === 0) {
        throw new Error(`La pregunta ${question.id} contiene una opción sin etiqueta.`);
      }

      if (!Number.isInteger(option.count) || option.count < 0) {
        throw new Error(
          `La pregunta ${question.id} contiene un conteo negativo o no entero.`,
        );
      }

      if (option.count > question.totalResponses) {
        throw new Error(
          `La pregunta ${question.id} tiene una opción que supera el total declarado.`,
        );
      }

      sum += option.count;
    }

    if (sum !== question.totalResponses) {
      throw new Error(
        `Las opciones de ${question.id} no suma el total declarado (${question.totalResponses}).`,
      );
    }

    const percentageSum = question.options.reduce(
      (total, option) =>
        total + getPercentage(option.count, question.totalResponses),
      0,
    );

    if (Math.abs(percentageSum - 100) > 0.01) {
      throw new Error(
        `Los porcentajes de ${question.id} no totalizan 100%.`,
      );
    }
  }

  if (totals.size !== 1) {
    throw new Error(
      "Todas las preguntas deben compartir el mismo número de respuestas totales.",
    );
  }
}

export function validateSurveyThemes(
  questions: SurveyQuestion[],
  themes: SurveyTheme[],
): void {
  if (!Array.isArray(themes) || themes.length === 0) {
    throw new Error("El cuestionario debe declarar al menos un tema.");
  }

  const assigned = new Map<string, string>();

  for (const theme of themes) {
    if (!theme || typeof theme !== "object" || !THEME_ID_SET.has(theme.id)) {
      throw new Error("Un tema declara un identificador desconocido.");
    }

    if (!Array.isArray(theme.questionIds) || theme.questionIds.length === 0) {
      throw new Error(`El tema ${theme.id} no contiene preguntas.`);
    }

    for (const questionId of theme.questionIds) {
      if (!questions.some((question) => question.id === questionId)) {
        throw new Error(
          `El tema ${theme.id} referencia la pregunta inexistente ${questionId}.`,
        );
      }

      if (assigned.has(questionId)) {
        throw new Error(
          `La pregunta ${questionId} está asignada a más de un tema.`,
        );
      }

      assigned.set(questionId, theme.id);
    }
  }

  for (const question of questions) {
    const themeId = assigned.get(question.id);

    if (!themeId) {
      throw new Error(
        `La pregunta ${question.id} no está asignada a ningún tema.`,
      );
    }

    if (themeId !== question.themeId) {
      throw new Error(
        `La pregunta ${question.id} declara el tema ${question.themeId} pero aparece en ${themeId}.`,
      );
    }
  }
}

validateSurvey(SURVEY_DATA);
validateSurveyThemes(SURVEY_DATA, SURVEY_THEMES);

export const SURVEY_TOTAL_RESPONSES = SURVEY_DATA[0].totalResponses;
export const SURVEY_QUESTION_COUNT = SURVEY_DATA.length;
