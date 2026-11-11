import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamShowcase } from "@/components/team/team-showcase";
import { TEAM_MEMBERS } from "@/lib/content/team";
import { TEAM_PHOTOS } from "@/lib/content/team-photos";

export function TeamSection() {
  return (
    <section className="section section--team" id="equipo" aria-labelledby="equipo-title">
      <div className="page">
        <SectionHeading
          index="02"
          label="¿Quiénes somos?"
          id="equipo-title"
          title={
            <>
              Seis miradas, un mismo <em>punto de partida</em>.
            </>
          }
          lead="Compartimos programa, institución y una pregunta: qué hábitos sostienen el trabajo de un futuro ingeniero. Cada perfil tiene su propia ficha; publicamos la información que cada integrante puede confirmar."
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
            Los seis cursamos Ingeniería en Informática en la misma casa de
            estudios.
          </p>
        </div>

        <TeamShowcase members={TEAM_MEMBERS} photos={TEAM_PHOTOS} />
      </div>
    </section>
  );
}
