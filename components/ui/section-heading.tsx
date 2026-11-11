import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  lead?: string;
  id?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  lead,
  id,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
        <span className="section-heading__label">{label}</span>
      </div>
      <h2 id={id}>{title}</h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </header>
  );
}
