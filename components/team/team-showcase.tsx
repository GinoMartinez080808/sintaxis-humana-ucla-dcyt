"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { VALIDATION_NOTICE, type TeamMember } from "@/lib/content/team";

type TeamShowcaseProps = {
  members: TeamMember[];
  photos: Readonly<Record<string, string>>;
};

export function TeamShowcase({ members, photos }: TeamShowcaseProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const checkScrollable = () => {
      setScrollable(track.scrollWidth > track.clientWidth + 8);
    };

    checkScrollable();
    const resizeObserver = new ResizeObserver(checkScrollable);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-card-index]"),
    );

    const computeActive = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let best: { index: number; distance: number } | null = null;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (rect.right < trackLeft + 60) {
          continue;
        }
        const distance = Math.abs(rect.left - trackLeft);
        if (!best || distance < best.distance) {
          best = {
            index: Number(card.getAttribute("data-card-index") ?? 0),
            distance,
          };
        }
      }

      if (best) {
        setActiveIndex(best.index);
      }
    };

    const observer = new IntersectionObserver(computeActive, {
      root: track,
      threshold: [0, 0.35, 0.6, 0.9],
    });

    cards.forEach((card) => observer.observe(card));
    computeActive();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (selected && !dialog.open) {
      dialog.showModal();
    }

    if (!selected && dialog.open) {
      dialog.close();
    }
  }, [selected]);

  const scrollToCard = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const clamped = Math.min(Math.max(index, 0), members.length - 1);
      const card = track.querySelector<HTMLElement>(
        `[data-card-index="${clamped}"]`,
      );
      if (!card) {
        return;
      }

      const target =
        card.getBoundingClientRect().left -
        track.getBoundingClientRect().left +
        track.scrollLeft -
        4;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      track.scrollTo({
        left: target,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [members.length],
  );

  const onTrackKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToCard(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToCard(activeIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToCard(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToCard(members.length - 1);
    }
  };

  const closeProfile = () => setSelected(null);

  return (
    <>
      <div
        className="team-carousel reveal reveal--late"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Perfiles del equipo"
      >
        <ul
          ref={trackRef}
          className="team-track"
          tabIndex={0}
          onKeyDown={onTrackKeyDown}
          aria-label={`Tarjetas de ${members.length} integrantes. Usa las flechas del teclado o los controles para recorrerlas.`}
        >
          {members.map((member, index) => (
            <li
              className="team-cell"
              key={member.id}
              data-card-index={index}
              aria-label={`${index + 1} de ${members.length}: ${member.name}`}
            >
              <article
                className={`team-card team-card--${member.accent}`}
                aria-labelledby={`team-${member.id}-name`}
              >
                <div className="team-card__head">
                  <div className="team-card__avatar">
                    <TeamAvatar
                      member={member}
                      photoSrc={photos[member.id]}
                      size="md"
                      caption
                    />
                  </div>

                  <div className="team-card__meta">
                    <span className="team-card__index" aria-hidden="true">
                      {member.index}
                    </span>
                    <span className="team-card__badge">{member.badge}</span>
                  </div>
                </div>

                {!member.validated ? (
                  <p className="team-card__notice">
                    <span
                      className="team-card__notice-dot"
                      aria-hidden="true"
                    />
                    {VALIDATION_NOTICE}
                  </p>
                ) : null}

                <div className="team-card__body">
                  <p className="team-card__kicker">{member.kicker}</p>
                  <h3 id={`team-${member.id}-name`}>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>

                  {member.facts ? (
                    <dl className="team-card__facts">
                      {member.facts.map((fact) => (
                        <div className="team-card__fact" key={fact.label}>
                          <dt>{fact.label}</dt>
                          {fact.items.map((item) => (
                            <dd key={item}>{item}</dd>
                          ))}
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="team-card__skills">
                    <p className="team-card__skills-label">Claves del perfil</p>
                    <ul
                      className="team-card__tags"
                      aria-label={`Habilidades y etiquetas de ${member.name}`}
                    >
                      {member.tags.map((tag) => (
                        <li className="tag" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="team-card__footer">
                  {member.profile ? (
                    <button
                      type="button"
                      className="button button--ghost button--block"
                      onClick={() => setSelected(member)}
                    >
                      Abrir perfil completo
                      <span className="button__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </button>
                  ) : (
                    <span className="team-card__pending">
                      Ficha ampliada en preparación
                    </span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="carousel-controls">
          <p className="carousel-status">
            <span className="carousel-status__current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span aria-hidden="true"> / </span>
            {String(members.length).padStart(2, "0")}
            <span className="sr-only">
              {" "}
              — perfil visible: {members[activeIndex]?.name}
            </span>
          </p>

          {scrollable ? (
            <>
              <div
                className="carousel-dots"
                role="group"
                aria-label="Seleccionar perfil"
              >
                {members.map((member, index) => (
                  <button
                    key={member.id}
                    type="button"
                    className="carousel-dot"
                    aria-label={`Ir al perfil ${index + 1}: ${member.name}`}
                    aria-current={activeIndex === index}
                    onClick={() => scrollToCard(index)}
                  />
                ))}
              </div>

              <div className="carousel-arrows">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Perfil anterior"
                  onClick={() => scrollToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Perfil siguiente"
                  onClick={() => scrollToCard(activeIndex + 1)}
                  disabled={activeIndex === members.length - 1}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </>
          ) : null}
        </div>

        <p className="carousel-hint" aria-hidden="true">
          Desliza o usa las flechas para recorrer el equipo
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="profile-dialog"
        aria-labelledby="profile-dialog-title"
        onClose={closeProfile}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeProfile();
          }
        }}
      >
        {selected ? (
          <div className="profile-dialog__panel">
            <header className="profile-dialog__head">
              <p className="eyebrow">Perfil verificado · {selected.index}</p>
              <h3 id="profile-dialog-title">{selected.name}</h3>
              <p>{selected.role}</p>
              <button
                type="button"
                className="profile-dialog__close"
                onClick={closeProfile}
                aria-label="Cerrar perfil"
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div
              className="profile-dialog__body"
              tabIndex={0}
              aria-label="Contenido del perfil"
            >
              {selected.profile?.map((section) => (
                <section key={section.title}>
                  <h4>{section.title}</h4>
                  <p>{section.body}</p>
                  {section.items ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <p className="profile-dialog__foot">
              Contenido basado en información confirmada por el equipo. Sin
              certificaciones, empleos ni resultados inventados.
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
