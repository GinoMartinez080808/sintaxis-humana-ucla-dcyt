import Image from "next/image";

type QrSurveyCardProps = {
  surveyUrl?: string;
  qrImageSrc?: string;
};

export function QrSurveyCard({ surveyUrl, qrImageSrc }: QrSurveyCardProps) {
  return (
    <div className="qr-layout reveal">
      <div className="qr-frame">
        <span className="qr-frame__tick" aria-hidden="true" />
        <span className="qr-frame__tick" aria-hidden="true" />
        <span className="qr-frame__tick" aria-hidden="true" />
        <span className="qr-frame__tick" aria-hidden="true" />

        {qrImageSrc ? (
          <Image
            src={qrImageSrc}
            alt="Código QR para acceder a la encuesta de campo del DCyT"
            width={640}
            height={640}
            sizes="(max-width: 720px) 260px, 320px"
          />
        ) : (
          <div className="qr-frame__inner">
            <span className="qr-frame__mark" aria-hidden="true">
              QR
            </span>
            <span className="qr-frame__label">Encuesta de campo · DCyT</span>
            <span className="qr-frame__status">Pendiente de enlace</span>
          </div>
        )}
      </div>

      <div className="qr-copy">
        <h3>La encuesta se activará cuando el instrumento esté validado.</h3>
        <p>
          El cuestionario está dirigido a estudiantes del Decanato de Ciencias y
          Tecnología. La muestra objetivo es de diez personas y el diseño prevé
          una participación anónima.
        </p>

        <ol className="qr-copy__steps">
          <li>
            <span aria-hidden="true">01</span>
            Abre el enlace o escanea el código desde tu teléfono.
          </li>
          <li>
            <span aria-hidden="true">02</span>
            Responde según tu experiencia real; no hay respuestas correctas.
          </li>
          <li>
            <span aria-hidden="true">03</span>
            El equipo verifica y agrega los datos antes de publicarlos.
          </li>
        </ol>

        {surveyUrl ? (
          <a
            className="button button--primary"
            href={surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir encuesta
            <span className="button__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ) : null}

        <p className="qr-note">
          El código QR se generará y validará a partir de la URL definitiva. No
          publicamos un QR que conduzca a una dirección inventada.
        </p>
      </div>
    </div>
  );
}
