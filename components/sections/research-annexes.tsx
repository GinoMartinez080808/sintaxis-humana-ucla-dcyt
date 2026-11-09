"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { REFERENCES } from "@/lib/content/literature";
import {
  INSTRUMENT_BLOCKS,
  METHODOLOGY,
  RESULTS_CRITERIA,
} from "@/lib/content/research";

const TABS = [
  {
    id: "a",
    code: "A",
    short: "Paradigmas",
    label: "Documentación y análisis de paradigmas",
  },
  {
    id: "b",
    code: "B",
    short: "Instrumento",
    label: "Instrumento de recolección de datos",
  },
  {
    id: "c",
    code: "C",
    short: "Metodología",
    label: "Metodología del proceso",
  },
  {
    id: "d",
    code: "D",
    short: "Hallazgos",
    label: "Resultados y hallazgos",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function ResearchAnnexes() {
  const [active, setActive] = useState<TabId>("a");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = TABS.findIndex((tab) => tab.id === active);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % TABS.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = TABS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActive(TABS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="annexes">
      <div
        className="tablist"
        role="tablist"
        aria-label="Anexos de la investigación"
        onKeyDown={onKeyDown}
      >
        {TABS.map((tab, index) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`annex-tab-${tab.id}`}
            className="tab"
            aria-label={`Anexo ${tab.code}: ${tab.label}`}
            aria-selected={active === tab.id}
            aria-controls={`annex-panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => setActive(tab.id)}
          >
            <span className="tab__code">{tab.code}</span>
            <span className="tab__label">{tab.short}</span>
          </button>
        ))}
      </div>

      <div
        className="tabpanel"
        role="tabpanel"
        id="annex-panel-a"
        aria-labelledby="annex-tab-a"
        tabIndex={0}
        hidden={active !== "a"}
      >
        <div className="annex-grid">
          <div className="prose">
            <p className="annex-subtitle">Anexo A · Revisión documental</p>
            <p>
              La primera etapa consistió en documentar los paradigmas que
              sostienen la noción de hábito. Revisamos tres obras de divulgación
              académica —Covey (1989), Duhigg (2012) y Clear (2018)— y comparamos
              sus aportes sin tratarlos como equivalentes.
            </p>
            <p>
              Una <strong>reseña académica</strong> no es un resumen. Es un texto
              breve que describe, analiza y evalúa una obra: identifica su tesis,
              reconstruye los argumentos y emite un juicio fundamentado. Ese
              criterio guió nuestra lectura y también la forma en que sintetizamos
              las fuentes en la sección de hábitos.
            </p>
            <p>
              El material educativo consultado sirvió como orientación
              metodológica para comprender el género. No se reproduce su contenido
              ni se utiliza como fuente de datos empíricos.
            </p>
            <p className="annex-subtitle" style={{ marginTop: "1.75rem" }}>
              Fuentes de la revisión
            </p>
            <ul className="source-list">
              {REFERENCES.map((reference) => (
                <li key={reference.title}>
                  <strong>{reference.author}</strong>
                  <em>
                    {reference.title} ({reference.year}). {reference.publisher}.
                  </em>
                  <br />
                  {reference.note}
                </li>
              ))}
            </ul>
          </div>

          <div className="annex-side">
            <div className="annex-side__card">
              <h4>Qué es una reseña</h4>
              <p>
                Un texto de lectura crítica: describe la obra, reconstruye su
                argumento y valora su aporte con criterios explícitos. No
                sustituye la lectura de la fuente.
              </p>
            </div>
            <div className="annex-side__card">
              <h4>Criterio de integridad</h4>
              <p>
                Las citas, páginas y afirmaciones atribuidas a cada autor se
                revisaron contra la obra de referencia. No se inventan fragmentos
                ni se mezclan marcos teóricos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tabpanel"
        role="tabpanel"
        id="annex-panel-b"
        aria-labelledby="annex-tab-b"
        tabIndex={0}
        hidden={active !== "b"}
      >
        <p className="annex-subtitle">Anexo B · Estructura prevista del cuestionario</p>
        <p className="annex-lede">
          El instrumento se organiza en cinco bloques de dimensiones. Las
          preguntas literales se publicarán cuando el equipo cierre su
          validación; por ahora mostramos la estructura y los criterios de
          evaluación previstos.
        </p>

        <div className="instrument-grid" style={{ marginTop: "1.25rem" }}>
          {INSTRUMENT_BLOCKS.map((block) => (
            <article className="instrument-card" key={block.code}>
              <div className="instrument-card__head">
                <span className="instrument-card__code">{block.code}</span>
              </div>
              <h4>{block.title}</h4>
              <p>{block.description}</p>
              <ul>
                {block.dimensions.map((dimension) => (
                  <li key={dimension}>{dimension}</li>
                ))}
              </ul>
              <span className="pending-tag">Pendiente de validación</span>
            </article>
          ))}
        </div>

        <div className="callout">
          <span className="callout__mark" aria-hidden="true">
            !
          </span>
          <div>
            <strong>Estado del instrumento</strong>
            No presentamos preguntas como aplicadas si aún no lo fueron. La
            versión final del cuestionario se adjuntará a este anexo cuando esté
            aprobada por el equipo.
          </div>
        </div>
      </div>

      <div
        className="tabpanel"
        role="tabpanel"
        id="annex-panel-c"
        aria-labelledby="annex-tab-c"
        tabIndex={0}
        hidden={active !== "c"}
      >
        <p className="annex-subtitle">Anexo C · Metodología del proceso</p>
        <ol className="timeline" style={{ marginTop: "0.75rem" }}>
          {METHODOLOGY.map((stage) => (
            <li className="timeline__item" key={stage.number}>
              <span className="timeline__num" aria-hidden="true">
                {stage.number}
              </span>
              <div>
                <div className="timeline__head">
                  <h4>{stage.title}</h4>
                  <span className={`pill pill--${stage.statusTone}`}>
                    {stage.status}
                  </span>
                </div>
                <ul className="timeline__steps">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="tabpanel"
        role="tabpanel"
        id="annex-panel-d"
        aria-labelledby="annex-tab-d"
        tabIndex={0}
        hidden={active !== "d"}
      >
        <div className="annex-grid">
          <div className="prose">
            <p className="annex-subtitle">Anexo D · Resultados y hallazgos</p>
            <p>
              Al cierre de esta versión, la encuesta no cuenta con respuestas
              verificadas. Este anexo reserva el lugar para los resultados y
              explica cómo se publicarán, sin anticipar hallazgos.
            </p>
            <p>
              Cuando existan datos, se presentarán por dimensión, con el número de
              respuestas válidas como denominador y una interpretación breve. Los
              gráficos solo se construirán con datos reales.
            </p>
            <p className="annex-subtitle" style={{ marginTop: "1.75rem" }}>
              Criterios de publicación
            </p>
            <ul className="source-list">
              {RESULTS_CRITERIA.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
            <div className="annex-actions">
              <a className="button button--primary" href="#resultados">
                Ver el estado de resultados
                <span className="button__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="annex-side">
            <div className="annex-side__card">
              <h4>Denominador</h4>
              <p>
                La muestra objetivo es de diez estudiantes. Si se alcanzan diez
                respuestas válidas, cada respuesta representará diez puntos
                porcentuales del total.
              </p>
            </div>
            <div className="annex-side__card">
              <h4>Privacidad</h4>
              <p>
                No se publican nombres, correos ni respuestas individuales
                identificables. La información se presenta agregada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
