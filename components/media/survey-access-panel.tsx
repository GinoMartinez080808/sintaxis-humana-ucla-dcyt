import Image from "next/image";
import {
  SURVEY_FORM_TITLE,
  SURVEY_FORM_TOTAL_QUESTIONS,
  SURVEY_FORM_URL,
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
      <h3 id="fieldwork-access-title">Cuestionario disponible</h3>

      <figure className="survey-qr">
        <div className="survey-qr__frame">
          <Image
            src="/images/qr-encuesta.svg"
            alt={`Código QR que abre el cuestionario ${SURVEY_FORM_TITLE} en Google Forms`}
            width={1024}
            height={1024}
            unoptimized
          />
        </div>
        <figcaption className="survey-qr__caption">
          <strong>{SURVEY_FORM_TITLE}</strong>
          <span>Escanea para responder · Google Forms</span>
        </figcaption>
      </figure>

      <a
        className="button button--primary button--block"
        href={SURVEY_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir cuestionario
        <span className="button__arrow" aria-hidden="true">
          ↗
        </span>
      </a>

      <p className="fieldwork-access__note">
        El formulario continúa abierto. Este informe analiza{" "}
        {SURVEY_QUESTION_COUNT} de sus {SURVEY_FORM_TOTAL_QUESTIONS} preguntas
        con {SURVEY_TOTAL_RESPONSES} respuestas registradas; la pregunta
        adicional sobre tensión académica no forma parte de este conjunto. Las
        respuestas nuevas no se incorporan automáticamente.
      </p>
    </aside>
  );
}
