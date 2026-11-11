import { getSurveyMetrics } from "@/lib/content/survey";

export function SurveyMetrics() {
  const metrics = getSurveyMetrics();

  return (
    <>
      <h3 className="sr-only">Resumen de la encuesta</h3>
      <dl className="survey-metrics reveal" aria-label="Resumen de la encuesta">
        {metrics.map((metric) => (
          <div
            className={`survey-metric${metric.accent ? " survey-metric--accent" : ""}`}
            key={metric.id}
          >
            <dt>{metric.label}</dt>
            <dd>
              <strong>{metric.value}</strong>
              <span>{metric.note}</span>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
