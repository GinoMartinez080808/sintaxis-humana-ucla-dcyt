import { SectionHeading } from "@/components/ui/section-heading";
import {
  CLEAR_LAWS,
  COMPARISON,
  LITERATURE,
  type LiteraturePanel,
} from "@/lib/content/literature";

function HabitLoop() {
  return (
    <div aria-label="Bucle del hábito: señal, rutina y recompensa">
      <ol className="habit-loop">
        <li className="habit-loop__node">
          <span className="habit-loop__step">01</span>
          <strong>Señal</strong>
        </li>
        <li className="habit-loop__arrow" aria-hidden="true">
          →
        </li>
        <li className="habit-loop__node">
          <span className="habit-loop__step">02</span>
          <strong>Rutina</strong>
        </li>
        <li className="habit-loop__arrow" aria-hidden="true">
          →
        </li>
        <li className="habit-loop__node">
          <span className="habit-loop__step">03</span>
          <strong>Recompensa</strong>
        </li>
      </ol>
      <p className="craving-note" style={{ marginTop: "0.55rem" }}>
        <strong>Craving · anticipación.</strong> No es un cuarto paso del bucle:
        es la fuerza que sostiene la repetición al anticipar la recompensa.
      </p>
    </div>
  );
}

function ClearLaws() {
  return (
    <ul className="laws" aria-label="Las cuatro leyes del cambio de comportamiento">
      {CLEAR_LAWS.map((law) => (
        <li className="law" key={law.number}>
          <span className="law__num">{law.number}</span>
          <span className="law__title">{law.title}</span>
          <span className="law__concept">{law.concept}</span>
          <p>{law.description}</p>
        </li>
      ))}
    </ul>
  );
}

function LiteratureCard({ panel }: { panel: LiteraturePanel }) {
  return (
    <article className={`lit-panel lit-panel--${panel.variant} reveal`}>
      <div className="lit-panel__head">
        <span className="lit-panel__letter" aria-hidden="true">
          {panel.letter}
        </span>
        <p className="lit-panel__author">
          {panel.author}
          <br />
          {panel.work}
        </p>
      </div>

      <p className="lit-panel__kicker">{panel.kicker}</p>
      <h3>{panel.title}</h3>

      <div className="lit-panel__body">
        {panel.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 34)}>{paragraph}</p>
        ))}
      </div>

      {panel.id === "duhigg" ? <HabitLoop /> : null}
      {panel.id === "clear" ? <ClearLaws /> : null}

      <ul className="concept-list" aria-label={`Conceptos de ${panel.author}`}>
        {panel.concepts.map((concept) => (
          <li className="concept" key={concept}>
            {concept}
          </li>
        ))}
      </ul>

      <p className="key-idea">{panel.keyIdea}</p>

      <div className="application">
        <span className="application__label">Aplicación académica</span>
        <p>{panel.application}</p>
      </div>
    </article>
  );
}

export function HabitsSection() {
  return (
    <section className="section" id="habitos" aria-labelledby="habitos-title">
      <div className="page">
        <SectionHeading
          index="03"
          label="Nuestros hábitos"
          id="habitos-title"
          title={
            <>
              El hábito como <em>infraestructura personal</em>.
            </>
          }
          lead="Antes de investigar los hábitos de otros, revisamos lo que tres autores proponen sobre la conducta humana. No los presentamos como recetas equivalentes: cada uno ilumina una parte distinta del problema."
        />

        <div className="media-layout reveal">
          <div className="media-frame">
            <div className="media-frame__grid" aria-hidden="true" />
            <span className="media-frame__corner media-frame__corner--tl" aria-hidden="true">
              Reel · 01
            </span>
            <span className="media-frame__corner media-frame__corner--br" aria-hidden="true">
              16:9
            </span>
            <div className="media-frame__content">
              <span className="media-frame__glyph" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
                  <path d="M15.5 10.6 21.5 7.2v9.6l-6-3.4" />
                </svg>
              </span>
              <p className="media-frame__state">En preparación</p>
              <p className="media-frame__title">Reel sobre nuestros hábitos</p>
              <p className="media-frame__note">
                El video se publicará cuando el equipo cierre su edición. La
                proporción 16:9 y el espacio accesible ya están reservados: no
                mostramos un reproductor vacío ni un enlace inventado.
              </p>
            </div>
          </div>

          <div className="media-aside">
            <div>
              <h3>Por qué el video no está aquí todavía</h3>
              <p>
                Un portafolio también comunica lo que aún no existe. Preferimos
                declarar el estado real del material antes que simular un
                contenido terminado.
              </p>
            </div>
            <div>
              <h3>Mientras tanto</h3>
              <p>
                Las tres fichas de lectura que aparecen a continuación ya están
                disponibles y sostienen la parte teórica del portafolio.
              </p>
            </div>
            <div className="media-aside__meta">
              <div className="media-aside__row">
                <span>Formato</span>
                <strong>16:9</strong>
              </div>
              <div className="media-aside__row">
                <span>Estado</span>
                <strong>En edición</strong>
              </div>
              <div className="media-aside__row">
                <span>Publicación</span>
                <strong>Pendiente</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="literature-grid">
          {LITERATURE.map((panel) => (
            <LiteratureCard key={panel.id} panel={panel} />
          ))}
        </div>

        <div className="compare-wrap reveal">
          <table className="compare">
            <caption className="sr-only">
              Comparación del enfoque central y la aplicación académica de Covey,
              Duhigg y Clear
            </caption>
            <thead>
              <tr>
                <th scope="col">Referente</th>
                <th scope="col">Enfoque central</th>
                <th scope="col">Aplicación académica</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.author}>
                  <td data-label="Referente">{row.author}</td>
                  <td data-label="Enfoque central">{row.focus}</td>
                  <td data-label="Aplicación académica">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="compare__note">
            Covey aporta la decisión; Duhigg, el mecanismo; Clear, el método. No
            son la misma teoría: se complementan. La proactividad sin un sistema
            de hábitos se queda en intención; un sistema sin responsabilidad
            personal se ejecuta sin dirección.
          </p>
        </div>

        <div className="reflection reveal">
          <h3>¿Qué hábitos estamos construyendo como futuros ingenieros?</h3>
          <p>
            La pregunta no busca una respuesta motivacional. Busca una
            consecuencia práctica: qué decisiones repetimos hoy y qué tipo de
            profesionales seremos cuando esas decisiones se vuelvan automáticas.
          </p>
          <p>
            Covey nos devuelve la responsabilidad de elegir; Duhigg nos muestra
            que elegir una vez no basta; Clear nos recuerda que el entorno y la
            identidad sostienen la repetición. Para un ingeniero, el hábito no es
            un adorno personal: es la infraestructura que hace posible el trabajo
            profundo, la revisión de errores y la entrega constante.
          </p>
          <p>
            El código exige consistencia para compilar; la carrera también. La
            diferencia es que, en la vida académica, el compilador somos
            nosotros.
          </p>
          <p className="reflection__signature">Equipo · UCLA - DCyT</p>
        </div>
      </div>
    </section>
  );
}
