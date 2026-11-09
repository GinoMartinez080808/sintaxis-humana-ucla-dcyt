"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEAM_MEMBERS, type TeamMember } from "@/lib/content/team";

export function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [controlsVisible, setControlsVisible] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const checkScrollable = () => {
      setControlsVisible(track.scrollWidth > track.clientWidth + 24);
    };

    checkScrollable();
    const resizeObserver = new ResizeObserver(checkScrollable);
    resizeObserver.observe(track);
    window.addEventListener("resize", checkScrollable);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-card-index]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveIndex(
            Number(visible.target.getAttribute("data-card-index") ?? 0),
          );
        }
      },
      { root: track, threshold: [0.25, 0.6, 1] },
    );

    cards.forEach((card) => observer.observe(card));

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

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>(
      `[data-card-index="${index}"]`,
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
  };

  const closeProfile = () => setSelected(null);

  return (
    <section className="section" id="equipo" aria-labelledby="equipo-title">
      <div className="page">
        <SectionHeading
          index="02"
          label="¿Quiénes somos?"
          id="equipo-title"
          title={
            <>
              Tres miradas, un mismo <em>punto de partida</em>.
            </>
          }
          lead="Compartimos programa, institución y una pregunta: qué hábitos sostienen el trabajo de un futuro ingeniero. Cada perfil tiene su propia ficha; publicamos solo la información que cada integrante puede confirmar."
        />

        <div className="team-context reveal">
          <span className="team-context__seal">
            <Image
              src="/images/logo-ucla.png"
              alt=""
              width={634}
              height={768}
              sizes="38px"
            />
          </span>
          <p>
            <strong>
              Universidad Centroccidental Lisandro Alvarado — UCLA, Decanato de
              Ciencias y Tecnología (DCyT).
            </strong>{" "}
            Los tres cursamos Ingeniería en Informática en la misma casa de
            estudios.
          </p>
        </div>

        <div className="team-carousel reveal reveal--late">
          <div
            ref={trackRef}
            className="team-track"
            tabIndex={0}
            role="group"
            aria-label="Perfiles del equipo. Usa las flechas del teclado o los controles para recorrer las tarjetas."
          >
            {TEAM_MEMBERS.map((member, index) => (
              <article
                key={member.id}
                className={`team-card team-card--${member.variant}`}
                aria-labelledby={`team-${member.id}-name`}
                data-card-index={index}
              >
                <span className="team-card__initial" aria-hidden="true">
                  {member.initial}
                </span>

                <div className="team-card__top">
                  <span className="team-card__index" aria-hidden="true">
                    {member.index}
                  </span>
                  <span className={`status status--${member.status}`}>
                    {member.statusLabel}
                  </span>
                </div>

                <div className="team-card__body">
                  <p className="team-card__kicker">{member.kicker}</p>
                  <h3 id={`team-${member.id}-name`}>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__note">{member.note}</p>
                  <ul className="team-card__tags" aria-label="Etiquetas del perfil">
                    {member.tags.map((tag) => (
                      <li className="tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
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
                      Ficha en preparación
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {controlsVisible ? (
            <div className="carousel-controls">
              <div
                className="carousel-dots"
                role="group"
                aria-label="Seleccionar perfil"
              >
                {TEAM_MEMBERS.map((member, index) => (
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
                  onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Perfil siguiente"
                  onClick={() =>
                    scrollToCard(
                      Math.min(TEAM_MEMBERS.length - 1, activeIndex + 1),
                    )
                  }
                  disabled={activeIndex === TEAM_MEMBERS.length - 1}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
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
    </section>
  );
}
