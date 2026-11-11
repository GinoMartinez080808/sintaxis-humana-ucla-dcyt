import { SectionHeading } from "@/components/ui/section-heading";
import {
  COMPETENCIES,
  COMPETENCY_LEGEND,
  HABIT_ONE_APPLICATIONS,
  LINKAGES,
  type CompetencyStatus,
} from "@/lib/content/research";

const STATUS_LABELS: Record<CompetencyStatus, string> = {
  "por-desarrollar": "Por desarrollar",
  desarrollo: "En desarrollo",
  aplicado: "Aplicado",
  consolidado: "Consolidado",
};

const NEXT_STEPS = [
  {
    tag: "Video",
    text: "Editar y publicar el reel del equipo, con subtítulos y una descripción accesible.",
  },
  {
    tag: "Encuesta",
    text: "Ampliar la muestra para comparar los patrones descriptivos con otros grupos y carreras.",
  },
  {
    tag: "Perfiles",
    text: "Incorporar las biografías verificadas de Maikol y Zadkiel cuando sus autores las confirmen.",
  },
  {
    tag: "Dominio",
    text: "Definir el dominio final del sitio y la URL canónica para los metadatos.",
  },
];

export function ProgressSection() {
  return (
    <section className="section" id="avance" aria-labelledby="avance-title">
      <div className="page">
        <SectionHeading
          index="06"
          label="Nuestro avance"
          id="avance-title"
          title={
            <>
              De la intención al <em>sistema</em>.
            </>
          }
          lead="Este apartado no mide cuánto sabemos con una nota. Registra qué cambió entre el punto de partida y este punto intermedio, con evidencia y con límites explícitos."
        />

        <div className="progress-blocks">
          <article className="progress-block reveal">
            <span className="progress-block__label">Punto de partida</span>
            <h3>Una entrega más</h3>
            <p>
              Esperábamos una consigna acotada: resumir tres libros y presentar
              un video. El primer hallazgo fue que un portafolio digital exige
              decisiones que un trabajo escrito no exige: arquitectura de
              información, jerarquía visual, accesibilidad y una política clara
              sobre lo que no se puede afirmar.
            </p>
            <p>
              Nuestro conocimiento previo de desarrollo web era desigual. Por eso
              el proyecto se organizó como un sistema de componentes y contenido,
              no como una página improvisada.
            </p>
          </article>

          <article className="progress-block reveal">
            <span className="progress-block__label">Lo que cambió</span>
            <h3>Contenido, interfaz y evidencia</h3>
            <p>
              Aprendimos a separar el contenido de la interfaz: los textos viven
              en módulos tipados; los componentes resuelven presentación y
              comportamiento. También incorporamos animaciones nativas ligadas al
              scroll con degradación progresiva, sin depender de JavaScript para
              mostrar el contenido.
            </p>
            <p>
              La lectura de Covey, Duhigg y Clear modificó nuestra forma de
              plantear el trabajo: el avance dejó de depender de una noche de
              inspiración y pasó a sostenerse en sesiones, revisiones y decisiones
              pequeñas. La encuesta de campo se aplicó a diez estudiantes y sus
              resultados se publicaron por tema, con porcentajes y denominadores
              explícitos.
            </p>
          </article>

          <article className="progress-block reveal">
            <span className="progress-block__label">Lo que falta</span>
            <h3>Lo que no se puede simular</h3>
            <p>
              Falta el material que depende de terceros y de etapas posteriores:
              el video del equipo y los perfiles de Maikol y Zadkiel. También
              falta ampliar la muestra de la encuesta y definir el dominio final.
            </p>
            <p>
              Ninguno de esos vacíos se disimula en esta versión. El siguiente
              paso no es agregar más secciones, sino completar y verificar lo que
              ya está declarado.
            </p>
          </article>
        </div>

        <div className="competencies">
          <div className="competency-toolbar">
            <div>
              <p className="annex-subtitle" style={{ marginBottom: "0.35rem" }}>
                Matriz de competencias
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                Los estados describen evidencia verificable dentro de este
                proyecto, no una calificación personal.
              </p>
            </div>
            <ul className="competency-legend" aria-label="Leyenda de estados">
              {COMPETENCY_LEGEND.map((item) => (
                <li
                  className={`status-chip status-chip--${item.status}`}
                  key={item.status}
                >
                  <span className="status-chip__dot" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="competency-groups">
            {COMPETENCIES.map((group) => (
              <article className="competency-group reveal" key={group.id}>
                <div className="competency-group__head">
                  <span>{group.subtitle}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li className="competency-item" key={item.name}>
                      <div>
                        <p className="competency-item__name">{item.name}</p>
                        {item.note ? (
                          <p className="competency-item__note">{item.note}</p>
                        ) : null}
                      </div>
                      <span
                        className={`status-chip status-chip--${item.status}`}
                      >
                        <span
                          className="status-chip__dot"
                          aria-hidden="true"
                        />
                        {STATUS_LABELS[item.status]}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="habit-one">
          <div className="reveal">
            <p className="habit-one__label">Hábito 1 · Stephen R. Covey</p>
            <h3>
              Ser <em>proactivo</em>.
            </h3>
            <p>
              Ser proactivo no significa controlar todo. Significa reconocer que
              entre el estímulo y la respuesta hay una elección, y que esa
              elección tiene consecuencias. La persona reactiva atribuye el
              resultado a las circunstancias; la proactiva identifica qué parte
              del resultado depende de sus decisiones.
            </p>
            <p>
              Covey propone concentrar la energía en el círculo de influencia. No
              se trata de ignorar lo que preocupa, sino de dejar de invertir
              esfuerzo en aquello que no se puede modificar.
            </p>
            <ul className="habit-one__list">
              {HABIT_ONE_APPLICATIONS.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
            <p>
              Esa transición —del estudiante que espera instrucciones al
              profesional que identifica problemas y propone soluciones— no
              ocurre en un solo curso. Ocurre cada vez que alguien decide
              responder con iniciativa.
            </p>
          </div>

          <figure className="circles-figure reveal reveal--late">
            <svg
              viewBox="0 0 400 400"
              role="img"
              aria-labelledby="circles-title circles-desc"
            >
              <title id="circles-title">
                Círculo de preocupación y círculo de influencia
              </title>
              <desc id="circles-desc">
                Un círculo exterior de preocupación rodea un círculo interior de
                influencia. La proactividad concentra la energía en el círculo
                interior.
              </desc>
              <circle className="circle-concern" cx="200" cy="200" r="182" />
              <circle className="circle-influence" cx="200" cy="200" r="112" />
              <text
                className="circle-label"
                x="200"
                y="50"
                textAnchor="middle"
              >
                Preocupación
              </text>
              <text
                className="circle-sublabel"
                x="200"
                y="68"
                textAnchor="middle"
              >
                Lo que no controlamos
              </text>
              <text
                className="circle-label"
                x="200"
                y="192"
                textAnchor="middle"
              >
                Influencia
              </text>
              <text
                className="circle-sublabel"
                x="200"
                y="210"
                textAnchor="middle"
              >
                Lo que sí podemos modificar
              </text>
            </svg>
            <figcaption>
              Figura 1. Los dos círculos de Covey. La proactividad no ignora el
              círculo de preocupación: decide dónde invertir la energía.
            </figcaption>
          </figure>
        </div>

        <div className="linkages">
          <div className="linkages__head">
            <p className="annex-subtitle">
              Vínculos potenciales con la práctica profesional
            </p>
            <p>
              Estas son conexiones que reconocemos entre el trabajo académico y
              la ingeniería de software. No describen actividades realizadas en
              una empresa ni resultados comerciales.
            </p>
          </div>
          <div className="linkage-grid">
            {LINKAGES.map((linkage, index) => (
              <article className="linkage-card reveal" key={linkage.title}>
                <span className="linkage-card__tag">
                  Vínculo {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{linkage.title}</h3>
                <p>{linkage.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="next-iteration reveal">
          <div>
            <p className="eyebrow">Estado del proyecto</p>
            <h3>Siguiente iteración</h3>
            <p>
              Lo que falta depende de material externo y de etapas que aún no se
              ejecutan. Preferimos dejar el estado visible antes que completarlo
              con supuestos.
            </p>
          </div>
          <ul className="next-list">
            {NEXT_STEPS.map((step) => (
              <li key={step.tag}>
                <span>{step.tag}</span>
                {step.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
