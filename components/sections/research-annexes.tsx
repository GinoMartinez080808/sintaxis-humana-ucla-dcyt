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

type ResearchAnnexesProps = {
  questionCount: number;
  totalResponses: number;
};

export function ResearchAnnexes({
  questionCount,
  totalResponses,
}: ResearchAnnexesProps) {
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
        <p className="annex-subtitle">Anexo B · Instrumento analizado</p>
        <p className="annex-lede">
          Este informe analiza {questionCount} preguntas de selección única del
          cuestionario aplicado, agrupadas en cuatro bloques temáticos. Cada
          pregunta se analiza con su propio denominador de {totalResponses}{" "}
          respuestas. El formulario original incluye además una pregunta sobre
          tensión académica que no forma parte de este conjunto.
        </p>

        <div className="instrument-grid" style={{ marginTop: "1.25rem" }}>
          {INSTRUMENT_BLOCKS.map((block) => (
            <article className="instrument-card" key={block.code}>
              <div className="instrument-card__head">
                <span className="instrument-card__code">{block.code}</span>
                <span className="pill pill--documented">Analizado</span>
              </div>
              <h4>{block.title}</h4>
              <p>{block.description}</p>
              <ul>
                {block.dimensions.map((dimension) => (
                  <li key={dimension}>{dimension}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="callout">
          <span className="callout__mark" aria-hidden="true">
            !
          </span>
          <div>
            <strong>Instrumento analizado</strong>
            Las preguntas de este anexo son las que sustentan los resultados de
            la sección de investigación. La pregunta adicional del formulario no
            se incluye en este informe.
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
              El conjunto analizado registra {totalResponses} respuestas para
              cada una de las {questionCount} preguntas. Los resultados se
              presentan por tema en la sección de investigación de campo, con
              porcentajes y denominadores explícitos.
            </p>
            <p>
              Este anexo conserva los criterios de publicación; el registro
              literal de las preguntas está en la sección de resultados. No se
              anticipan hallazgos que los datos no sostengan ni se cruzan
              respuestas individuales.
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
                Revisar los límites del estudio
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
                Cada respuesta equivale a {100 / totalResponses} puntos
                porcentuales del total de su pregunta. No se suman respuestas
                entre preguntas ni se cruzan por persona.
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
