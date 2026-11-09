import { QrSurveyCard } from "@/components/media/qr-survey-card";
import { ResearchAnnexes } from "@/components/sections/research-annexes";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH } from "@/lib/content/research";

const STATS = [
  { value: "10", label: "Muestra objetivo · estudiantes DCyT" },
  { value: "01", label: "Instrumento en diseño" },
  { value: "03", label: "Etapas metodológicas" },
  { value: "0", label: "Respuestas verificadas al cierre", accent: true },
];

export function ResearchSection() {
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
              Del aula al dato: una <em>encuesta en el DCyT</em>.
            </>
          }
          lead="La investigación nace de una inquietud concreta: los hábitos de estudio se discuten mucho, pero rara vez se describen con datos del propio contexto. Diseñamos una encuesta breve para estudiantes de Ingeniería en Informática."
        />

        <div className="research-intro">
          <div className="prose reveal">
            <p>
              <strong>Tema.</strong> {RESEARCH.topic}
            </p>
            <p>
              <strong>Población objetivo.</strong> {RESEARCH.population} La
              muestra planificada es de diez personas, seleccionadas dentro del
              contexto académico inmediato.
            </p>
            <p>
              <strong>Propósito.</strong> {RESEARCH.purpose}
            </p>
            <p>
              <strong>Contribución esperada.</strong> {RESEARCH.contribution}
            </p>
            <p>
              No buscamos generalizar a toda la universidad. Buscamos producir
              evidencia descriptiva, anónima y verificable que permita conversar
              con mayor precisión sobre lo que hacemos cuando estudiamos.
            </p>
          </div>

          <div className="research-stats reveal reveal--late">
            {STATS.map((stat) => (
              <div
                className={`research-stat${stat.accent ? " research-stat--accent" : ""}`}
                key={stat.label}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <QrSurveyCard />

        <ResearchAnnexes />
      </div>
    </section>
  );
}
