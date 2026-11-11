"use client";

import Image from "next/image";
import { useState } from "react";
import type { TeamMember } from "@/lib/content/team";

type TeamAvatarProps = {
  member: TeamMember;
  photoSrc?: string;
  size?: "sm" | "md";
  caption?: boolean;
  decorative?: boolean;
};

export function TeamAvatar({
  member,
  photoSrc,
  size = "md",
  caption = false,
  decorative = false,
}: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);
  const resolvedPhoto = photoSrc && !failed ? photoSrc : undefined;

  return (
    <span
      className={`team-avatar team-avatar--${size} team-avatar--${
        resolvedPhoto ? "photo" : "initials"
      }`}
    >
      <span className="team-avatar__frame">
        {resolvedPhoto ? (
          <Image
            className="team-avatar__image"
            src={resolvedPhoto}
            alt={decorative ? "" : `Retrato de ${member.name}`}
            fill
            sizes={size === "sm" ? "44px" : "(max-width: 720px) 88px, 96px"}
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="team-avatar__initials" aria-hidden="true">
            {member.initials}
          </span>
        )}
      </span>
      {caption ? (
        <span className="team-avatar__caption">
          {resolvedPhoto ? "Foto del perfil" : "Foto por cargar"}
        </span>
      ) : null}
    </span>
  );
}
