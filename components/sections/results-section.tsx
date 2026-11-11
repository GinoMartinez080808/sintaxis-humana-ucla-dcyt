import { SectionHeading } from "@/components/ui/section-heading";
import { RESULTS_CRITERIA } from "@/lib/content/research";
import {
  SURVEY_DATA,
  SURVEY_QUESTION_COUNT,
  SURVEY_THEMES,
  SURVEY_TOTAL_RESPONSES,
} from "@/lib/content/survey";

const THEME_TITLES = Object.fromEntries(
  SURVEY_THEMES.map((theme) => [theme.id, theme.shortTitle]),
);

const DESIGN_LIMITS = [
  "Generalizar a toda la UCLA o a otras carreras: la muestra es pequeña y no probabilística.",
  "Atribuir causalidad entre respuestas: cada pregunta se respondió por separado.",
  "Cruzar respuestas por persona: el conjunto de datos es agregado.",
  "Interpretar la opción de descanso como una medición clínica o una franja horaria exacta.",
];

export function ResultsSection() {
  return (
    <section
      className="section"
      id="resultados"
      aria-labelledby="resultados-title"
    >
      <div className="page">
        <SectionHeading
          index="05"
          label="Resultados"
          id="resultados-title"
          title={
            <>
              Lo que estos resultados <em>no pueden afirmar</em>.
            </>
          }
          lead={`La encuesta reúne ${SURVEY_TOTAL_RESPONSES} respuestas en ${SURVEY_QUESTION_COUNT} preguntas. Los datos se presentan por tema en la sección anterior; aquí quedan explícitos los criterios de lectura, el registro de cada pregunta y los límites del estudio.`}
        />

        <div className="sample-banner reveal">
          <span className="sample-banner__number" aria-hidden="true">
            {SURVEY_TOTAL_RESPONSES}
          </span>
          <div>
            <h3>Respuestas registradas</h3>
            <p>
              Cada una de las {SURVEY_QUESTION_COUNT} preguntas registra{" "}
              {SURVEY_TOTAL_RESPONSES} respuestas. Cada porcentaje se calcula
              sobre su propio denominador; no hay respuestas agregadas entre
              preguntas.
            </p>
            <span className="sample-banner__meta">
              n = {SURVEY_TOTAL_RESPONSES} · {SURVEY_QUESTION_COUNT} preguntas ·
              muestra completa
            </span>
          </div>
        </div>

        <div className="results-notes">
          <div className="notes-card reveal">
            <h3>Criterios de publicación</h3>
            <ol>
              {RESULTS_CRITERIA.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ol>
          </div>

          <div className="notes-card reveal">
            <h3>Límites de este diseño</h3>
            <ul>
              {DESIGN_LIMITS.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="compare-wrap reveal">
          <table className="compare">
            <caption className="sr-only">
              Registro de las ocho preguntas aplicadas, su tema y su número de
              respuestas
            </caption>
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Pregunta</th>
                <th scope="col">Tema</th>
                <th scope="col">Respuestas</th>
              </tr>
            </thead>
            <tbody>
              {SURVEY_DATA.map((question) => (
                <tr key={question.id}>
                  <td data-label="Código">
                    P{question.id.slice(1).padStart(2, "0")}
                  </td>
                  <td data-label="Pregunta">{question.question}</td>
                  <td data-label="Tema">{THEME_TITLES[question.themeId]}</td>
                  <td data-label="Respuestas">
                    {question.totalResponses} de {SURVEY_TOTAL_RESPONSES}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="compare__note">
            Cada pregunta registra {SURVEY_TOTAL_RESPONSES} respuestas. Los
            porcentajes se calculan sobre ese denominador; no se agregan
            respuestas entre preguntas.
          </p>
        </div>

        <div className="callout reveal">
          <span className="callout__mark" aria-hidden="true">
            !
          </span>
          <div>
            <strong>Lectura descriptiva</strong>
            Con {SURVEY_TOTAL_RESPONSES} respuestas no se estiman proporciones
            poblacionales ni se prueban hipótesis. Los resultados describen al
            grupo consultado y se presentan siempre con su denominador.
          </div>
        </div>

        <div className="results-actions reveal">
          <a className="button button--ghost" href="#investigacion">
            Volver a la lectura por temas
            <span className="button__arrow" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
