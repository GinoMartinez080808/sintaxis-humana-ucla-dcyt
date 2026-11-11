import {
  SURVEY_QUESTION_COUNT,
  SURVEY_TOTAL_RESPONSES,
} from "@/lib/content/survey";

export function SurveyAccessPanel() {
  return (
    <aside
      className="fieldwork-access reveal reveal--late"
      aria-labelledby="fieldwork-access-title"
    >
      <p className="fieldwork-access__kicker">Acceso a la encuesta</p>
      <h3 id="fieldwork-access-title">Instrumento cerrado</h3>

      <p className="fieldwork-access__count">
        <strong>{SURVEY_TOTAL_RESPONSES}</strong>
        <span>respuestas agregadas</span>
      </p>

      <dl className="fieldwork-access__facts">
        <div>
          <dt>Preguntas</dt>
          <dd>{SURVEY_QUESTION_COUNT}</dd>
        </div>
        <div>
          <dt>Estado</dt>
          <dd>Datos publicados</dd>
        </div>
        <div>
          <dt>Acceso</dt>
          <dd>Sin QR publicado</dd>
        </div>
      </dl>

      <p className="fieldwork-access__note">
        El cuestionario ya se aplicó a la muestra. No publicamos un código QR
        ni un enlace porque el repositorio no contiene una URL verificable y el
        instrumento está cerrado.
      </p>
    </aside>
  );
}
