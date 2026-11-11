"use client";

import { useEffect, useRef, useState } from "react";
import { TeamAvatar } from "@/components/ui/team-avatar";
import type { TeamMember } from "@/lib/content/team";

type TeamShowcaseProps = {
  members: TeamMember[];
  photos: Readonly<Record<string, string>>;
};

export function TeamShowcase({ members, photos }: TeamShowcaseProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<TeamMember | null>(null);

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

  const closeProfile = () => setSelected(null);

  return (
    <>
      <ul
        className="team-grid"
        aria-label={`Equipo de ${members.length} integrantes`}
      >
        {members.map((member) => (
          <li className="team-cell" key={member.id}>
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

              <div className="team-card__body">
                <p className="team-card__kicker">{member.kicker}</p>
                <h3 id={`team-${member.id}-name`}>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>

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
