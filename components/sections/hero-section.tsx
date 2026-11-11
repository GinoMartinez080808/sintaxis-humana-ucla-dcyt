import Image from "next/image";
import { SITE } from "@/lib/content/site";
import { TEAM_MEMBERS } from "@/lib/content/team";
import { TEAM_PHOTOS } from "@/lib/content/team-photos";
import { TeamAvatar } from "@/components/ui/team-avatar";

const HERO_STATS = [
  {
    value: String(TEAM_MEMBERS.length).padStart(2, "0"),
    label: "Integrantes",
  },
  { value: "01", label: "Encuesta de campo" },
  { value: "03", label: "Referentes académicos" },
];

const TEAM_NAME_LIST = new Intl.ListFormat("es-VE", {
  style: "long",
  type: "conjunction",
}).format(TEAM_MEMBERS.map((member) => member.name.split(" ")[0]));

export function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="page">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow" data-enter style={{ animationDelay: "40ms" }}>
              Portafolio académico · Ingeniería en Informática
            </p>

            <h1
              id="hero-title"
              className="hero__title"
              data-enter
              style={{ animationDelay: "140ms" }}
            >
              <span>Sintaxis</span>
              <em>Humana</em>
            </h1>

            <div
              className="hero__rule"
              aria-hidden="true"
              data-enter
              style={{ animationDelay: "220ms" }}
            />

            <p
              className="hero__subtitle"
              data-enter
              style={{ animationDelay: "280ms" }}
            >
              Principios, hábitos y tecnología en la UCLA - DCyT
            </p>

            <p
              className="hero__lead"
              data-enter
              style={{ animationDelay: "340ms" }}
            >
              Somos <strong>{TEAM_NAME_LIST}</strong>, estudiantes de
              Ingeniería en Informática en la Universidad Centroccidental
              Lisandro Alvarado. Este portafolio reúne nuestra revisión de la
              literatura sobre hábitos, una encuesta de campo aplicada en el
              Decanato de Ciencias y Tecnología y una lectura honesta de nuestro
              propio proceso de aprendizaje.
            </p>

            <div
              className="hero__team"
              data-enter
              style={{ animationDelay: "390ms" }}
            >
              <ul className="avatar-group" aria-label="Integrantes del equipo">
                {TEAM_MEMBERS.map((member) => (
                  <li className="avatar-group__item" key={member.id}>
                    <TeamAvatar
                      member={member}
                      photoSrc={TEAM_PHOTOS[member.id]}
                      size="sm"
                      decorative
                    />
                    <span className="sr-only">{member.name}</span>
                  </li>
                ))}
              </ul>
              <p className="hero__team-meta">
                <strong>{TEAM_MEMBERS.length} integrantes</strong>
                <span>Estudiantes de Ingeniería Informática · UCLA - DCyT</span>
              </p>
            </div>

            <div
              className="hero__actions"
              data-enter
              style={{ animationDelay: "460ms" }}
            >
              <a className="button button--primary" href="#equipo">
                Recorrer el portafolio
                <span className="button__arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="button button--ghost" href="#investigacion">
                Ver la investigación
              </a>
            </div>

            <ul
              className="hero__stats"
              data-enter
              style={{ animationDelay: "530ms" }}
            >
              {HERO_STATS.map((stat) => (
                <li className="hero__stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__plaque">
            <figure
              className="seal-card"
              data-enter
              style={{ animationDelay: "300ms" }}
            >
              <div className="seal-card__frame">
                <span className="seal-card__tag">Institución</span>
                <div className="seal-card__image-wrap">
                  <Image
                    className="seal-card__image"
                    src="/images/logo-ucla.png"
                    alt="Escudo de la Universidad Centroccidental Lisandro Alvarado, UCLA - DCyT"
                    width={634}
                    height={768}
                    priority
                    sizes="(max-width: 980px) 320px, 372px"
                  />
                </div>
                <figcaption className="seal-card__caption">
                  <strong>Universidad Centroccidental Lisandro Alvarado</strong>
                  <span>Decanato de Ciencias y Tecnología</span>
                  <span>Lenguaje y Comunicación · {SITE.year}</span>
                </figcaption>
              </div>
            </figure>
            <p className="hero__plaque-note">Escudo institucional · uso académico</p>
          </div>
        </div>

        <div className="hero__cue" aria-hidden="true">
          <span className="hero__cue-line" />
          <span>Desliza para explorar</span>
        </div>
      </div>
    </section>
  );
}
