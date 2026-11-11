import { SurveyAccessPanel } from "@/components/media/survey-access-panel";
import { ResearchAnnexes } from "@/components/sections/research-annexes";
import { QuestionChart } from "@/components/survey/question-chart";
import { SurveyMetrics } from "@/components/survey/survey-metrics";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH } from "@/lib/content/research";
import {
  SURVEY_CONCLUSION,
  SURVEY_INSIGHTS,
  SURVEY_QUESTION_COUNT,
  SURVEY_THEMES,
  SURVEY_TOTAL_RESPONSES,
  formatPercent,
  getConclusionSummary,
  getFindingById,
  getPercentage,
  getQuestion,
  getThemeNote,
  type SurveyTheme,
  type SurveyThemeId,
} from "@/lib/content/survey";

const THEMES = Object.fromEntries(
  SURVEY_THEMES.map((theme) => [theme.id, theme]),
) as Record<SurveyThemeId, SurveyTheme>;

function questionCode(questionId: string): string {
  return `P${questionId.slice(1).padStart(2, "0")}`;
}

function evidenceData(questionId: string, optionIndex: number) {
  const question = getQuestion(questionId);
  const option = question.options[optionIndex];

  if (!option) {
    throw new Error(
      `La evidencia de ${questionId} apunta a una opción inexistente.`,
    );
  }

  return {
    code: questionCode(questionId),
    question: question.question,
    optionLabel: option.label,
    count: option.count,
    total: question.totalResponses,
    percentage: formatPercent(
      getPercentage(option.count, question.totalResponses),
    ),
  };
}

function ThemeRail({ theme }: { theme: SurveyTheme }) {
  return (
    <header className="survey-theme__rail">
      <span className="survey-theme__letter" aria-hidden="true">
        {theme.letter}
      </span>
      <p className="survey-theme__kicker">Tema {theme.letter}</p>
      <h3 id={`tema-${theme.id}`}>{theme.title}</h3>
      <p className="survey-theme__description">{theme.description}</p>
      <ul
        className="survey-theme__questions"
        aria-label={`Preguntas del tema ${theme.letter}`}
      >
        {theme.questionIds.map((questionId) => (
          <li key={questionId}>{questionCode(questionId)}</li>
        ))}
      </ul>
    </header>
  );
}

export function ResearchSection() {
  const planning = getFindingById("planning");
  const focus = getFindingById("focus");
  const selfReview = getFindingById("self-review");
  const rest = getFindingById("rest");
  const conclusionSummary = getConclusionSummary();

  return (
    <section
      className="section"
      id="investigacion"
      aria-labelledby="investigacion-title"
    >
      <div className="page">
        <SectionHeading
          index="04"
          label="Investigación de campo"
          id="investigacion-title"
          title={
            <>
              Hábitos, concentración y{" "}
              <em>autogestión académica</em>.
            </>
          }
          lead={`Exploramos cómo los estudiantes organizan su tiempo, enfrentan las distracciones, comparten el aprendizaje y gestionan su descanso. Presentamos los resultados de ${SURVEY_QUESTION_COUNT} preguntas de un cuestionario aplicado a ${SURVEY_TOTAL_RESPONSES} estudiantes de Ingeniería en Informática del DCyT.`}
        />

        <div className="fieldwork-brief reveal">
          <div className="fieldwork-brief__main">
            <p className="eyebrow">Ficha de la investigación</p>
            <p className="fieldwork-brief__lead">{RESEARCH.purpose}</p>

            <dl className="fieldwork-facts">
              <div>
                <dt>Tema</dt>
                <dd>{RESEARCH.topic}</dd>
              </div>
              <div>
                <dt>Población</dt>
                <dd>{RESEARCH.population}</dd>
              </div>
              <div>
                <dt>Instrumento</dt>
                <dd>
                  {SURVEY_QUESTION_COUNT} preguntas analizadas de selección
                  única, agrupadas en cuatro temas.
                </dd>
              </div>
              <div>
                <dt>Muestra</dt>
                <dd>
                  {SURVEY_TOTAL_RESPONSES} respuestas registradas. No es una
                  muestra probabilística.
                </dd>
              </div>
            </dl>

            <p className="fieldwork-brief__note">{RESEARCH.contribution}</p>
          </div>

          <SurveyAccessPanel />
        </div>

        <SurveyMetrics />
        <p className="survey-metrics__note">
          Cada porcentaje se calcula sobre las {SURVEY_TOTAL_RESPONSES}{" "}
          respuestas de su propia pregunta. Las respuestas no se suman entre
          preguntas.
        </p>

        <div className="survey-dossier">
          <article
            className="survey-theme survey-theme--perfil reveal"
            aria-labelledby="tema-perfil"
          >
            <ThemeRail theme={THEMES.perfil} />
            <div className="survey-theme__body">
              <div className="survey-grid survey-grid--2">
                <QuestionChart
                  question={getQuestion("q1")}
                  code={questionCode("q1")}
                  context="Datos generales"
                />
                <QuestionChart
                  question={getQuestion("q2")}
                  code={questionCode("q2")}
                  context="Datos generales"
                />
              </div>
              <p className="survey-theme__reading">
                <strong>Lectura del tema.</strong> {getThemeNote("perfil")}
              </p>
            </div>
          </article>

          <article
            className="survey-theme survey-theme--organizacion reveal"
            aria-labelledby="tema-organizacion"
          >
            <ThemeRail theme={THEMES.organizacion} />
            <div className="survey-theme__body">
              <ul
                className="survey-findings"
                aria-label="Indicadores del tema B"
              >
                {[planning, focus, selfReview].map((finding) => (
                  <li className="survey-finding" key={finding.id}>
                    <strong>
                      {finding.count}
                      <span> de {finding.total}</span>
                    </strong>
                    <p>{finding.statement}</p>
                    <span className="survey-finding__source">
                      {questionCode(finding.questionId)}
                    </span>
                  </li>
                ))}
              </ul>

              <QuestionChart
                question={getQuestion("q3")}
                code={questionCode("q3")}
                context="Hábitos del estudiante"
              />

              <div className="survey-grid survey-grid--2">
                <QuestionChart
                  question={getQuestion("q4")}
                  code={questionCode("q4")}
                  context="Hábitos del estudiante"
                />
                <QuestionChart
                  question={getQuestion("q5")}
                  code={questionCode("q5")}
                  context="Hábitos del estudiante"
                />
              </div>

              <div className="survey-quote">
                <p>
                  “Planificar es parte del hábito; mantener la concentración
                  sigue siendo un reto.”
                </p>
                <span>
                  Lectura descriptiva del equipo · las preguntas se respondieron
                  por separado
                </span>
              </div>

              <p className="survey-theme__reading">
                <strong>Lectura del tema.</strong>{" "}
                {getThemeNote("organizacion")}
              </p>
            </div>
          </article>

          <article
            className="survey-theme survey-theme--aprendizaje reveal"
            aria-labelledby="tema-aprendizaje"
          >
            <ThemeRail theme={THEMES.aprendizaje} />
            <div className="survey-theme__body">
              <div className="survey-grid survey-grid--2">
                <QuestionChart
                  question={getQuestion("q6")}
                  code={questionCode("q6")}
                  context="Relación con compañeros"
                />
                <QuestionChart
                  question={getQuestion("q7")}
                  code={questionCode("q7")}
                  context="Relación con compañeros"
                />
              </div>
              <p className="survey-theme__reading">
                <strong>Lectura del tema.</strong>{" "}
                {getThemeNote("aprendizaje")}
              </p>
            </div>
          </article>

          <article
            className="survey-theme survey-theme--autogestion reveal"
            aria-labelledby="tema-autogestion"
          >
            <ThemeRail theme={THEMES.autogestion} />
            <div className="survey-theme__body">
              <div className="survey-theme__split">
                <QuestionChart
                  question={getQuestion("q8")}
                  code={questionCode("q8")}
                  context="Autogestión y autocuidado"
                />

                <aside className="survey-reflection">
                  <p className="survey-reflection__kicker">
                    Cuidado de interpretación
                  </p>
                  <h4>La última opción no mide horas de sueño</h4>
                  <p>
                    “Me cuesta descansar la mente (30min-2 horas)” describe una
                    dificultad, no una duración. Por eso no la sumamos como si
                    fuera otra franja horaria.
                  </p>
                </aside>
              </div>
              <p className="survey-theme__reading">
                <strong>Lectura del tema.</strong>{" "}
                {getThemeNote("autogestion")}
              </p>
            </div>
          </article>
        </div>

        <section
          className="survey-synthesis"
          aria-labelledby="lectura-transversal"
        >
          <header className="survey-synthesis__head">
            <p className="annex-subtitle">Lectura transversal</p>
            <h3 id="lectura-transversal">Cómo se conectan los temas</h3>
            <p>
              Estas observaciones comparan distribuciones de preguntas
              distintas. No son correlaciones: el cuestionario no permite saber
              qué respondió cada persona en cada pregunta.
            </p>
          </header>

          <div className="survey-insights">
            {SURVEY_INSIGHTS.map((insight) => (
              <article className="survey-insight reveal" key={insight.id}>
                <h4>{insight.title}</h4>
                <p>{insight.body}</p>
                <ul
                  className="survey-insight__evidence"
                  aria-label="Datos que sostienen la observación"
                >
                  {insight.evidence.map(({ questionId, optionIndex }) => {
                    const evidence = evidenceData(questionId, optionIndex);

                    return (
                      <li key={questionId}>
                        <span aria-hidden="true">{evidence.code}</span>
                        <span className="sr-only">
                          {evidence.question}: {evidence.optionLabel}.{" "}
                        </span>
                        <strong>
                          {evidence.count} de {evidence.total}
                        </strong>
                        <span aria-hidden="true">{evidence.percentage}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="survey-insight__caveat">{insight.caveat}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="survey-conclusion reveal"
          aria-labelledby="conclusion-investigacion"
        >
          <div className="survey-conclusion__main">
            <p className="eyebrow">Conclusión</p>
            <h3 id="conclusion-investigacion">{SURVEY_CONCLUSION.title}</h3>
            <p>{conclusionSummary}</p>
            <p className="survey-conclusion__limit">
              <strong>Límite del estudio.</strong> {SURVEY_CONCLUSION.limit}
            </p>
            <a className="button button--paper" href="#resultados">
              Revisar los límites del estudio
              <span className="button__arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>

          <ul
            className="survey-conclusion__findings"
            aria-label="Hallazgos principales"
          >
            {[planning, focus, rest].map((finding) => (
              <li key={finding.id}>
                <strong>
                  {finding.count} de {finding.total}
                </strong>
                <span>{finding.statement}</span>
                <em>{questionCode(finding.questionId)}</em>
              </li>
            ))}
          </ul>
        </section>

        <ResearchAnnexes
          questionCount={SURVEY_QUESTION_COUNT}
          totalResponses={SURVEY_TOTAL_RESPONSES}
        />
      </div>
    </section>
  );
}
