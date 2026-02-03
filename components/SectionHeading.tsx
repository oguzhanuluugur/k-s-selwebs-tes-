import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export const SectionHeading = ({ eyebrow, title, description, children }: SectionHeadingProps) => (
  <div className="space-y-4">
    {eyebrow ? <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span> : null}
    <div className="space-y-3">
      <h2 className="text-3xl font-semibold text-ink-900 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-ink-700 sm:text-lg">{description}</p> : null}
    </div>
    {children}
  </div>
);
