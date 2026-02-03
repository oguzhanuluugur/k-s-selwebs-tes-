import { caseStudies } from '@/lib/data';

export const CaseStudyList = () => (
  <div className="grid gap-6 lg:grid-cols-3">
    {caseStudies.map((study) => (
      <article key={study.title} className="card">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{study.sector}</p>
        <h3 className="mt-3 text-lg font-semibold text-ink-900">{study.title}</h3>
        <p className="mt-2 text-sm text-ink-700">{study.result}</p>
      </article>
    ))}
  </div>
);
