import { SectionHeading } from "@/components/ui/section-heading";
import {
  PLANNED_CHARTS,
  RESULTS_CRITERIA,
  RESEARCH,
} from "@/lib/content/research";

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
              Lo que todavía <em>no podemos afirmar</em>.
            </>
          }
          lead={`La encuesta tiene una muestra objetivo de ${RESEARCH.targetSample} estudiantes del DCyT. Al cierre de esta versión no se han incorporado respuestas verificadas, así que esta sección muestra la estructura de análisis, no hallazgos.`}
        />

        <div className="empty-banner reveal">
          <span className="empty-banner__number" aria-hidden="true">
            {RESEARCH.verifiedResponses}
          </span>
          <div>
            <h3>Respuestas verificadas</h3>
            <p>
              Ningún dato de esta sección proviene de respuestas completadas. No
              publicamos porcentajes, perfiles ni conclusiones anticipadas.
            </p>
            <span className="empty-banner__meta">
              n = {RESEARCH.verifiedResponses} de {RESEARCH.targetSample} · al
              cierre de esta versión
            </span>
          </div>
        </div>

        <div className="results-grid">
          {PLANNED_CHARTS.map((chart) => (
            <article className="result-card reveal" key={chart.id}>
              <div className="result-card__head">
                <h3>{chart.title}</h3>
                <span className="result-card__meta">
                  n = 0 / {RESEARCH.targetSample}
                </span>
              </div>

              <div
                className="chart-empty"
                role="img"
                aria-label={`${chart.title}: gráfico sin datos verificados`}
              >
                <span className="chart-empty__axis chart-empty__axis--top">
                  {RESEARCH.targetSample}
                </span>
                <span className="chart-empty__axis chart-empty__axis--mid">5</span>
                <span className="chart-empty__axis chart-empty__axis--bottom">
                  0
                </span>
                <span className="chart-empty__label">Sin datos verificados</span>
              </div>

              <p className="result-card__foot">
                <strong>{chart.unit}.</strong> {chart.description}
              </p>
            </article>
          ))}
        </div>

        <div className="results-notes">
          <div className="notes-card reveal">
            <h3>Criterios para publicar resultados</h3>
            <ol>
              {RESULTS_CRITERIA.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ol>
          </div>

          <div className="notes-card reveal">
            <h3>Qué haremos con los datos</h3>
            <ul>
              <li>
                Calcular frecuencias por dimensión y declarar el denominador de
                cada porcentaje.
              </li>
              <li>
                Comparar los hábitos declarados con el uso del teléfono durante
                el estudio.
              </li>
              <li>
                Identificar patrones recurrentes sin extrapolarlos a toda la
                UCLA.
              </li>
              <li>
                Redactar conclusiones limitadas explícitamente por el tamaño de
                la muestra.
              </li>
            </ul>
          </div>
        </div>

        <div className="callout reveal" style={{ marginTop: "1.5rem" }}>
          <span className="callout__mark" aria-hidden="true">
            !
          </span>
          <div>
            <strong>Límite metodológico</strong>
            Una muestra de diez personas no permite generalizaciones
            estadísticas. Los resultados serán descriptivos y se presentarán como
            tales, con su fecha de recolección y su número de respuestas válidas.
          </div>
        </div>
      </div>
    </section>
  );
}
