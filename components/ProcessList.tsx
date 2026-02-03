import { processSteps } from '@/lib/data';

export const ProcessList = () => (
  <ol className="grid gap-6 lg:grid-cols-4">
    {processSteps.map((step, index) => (
      <li key={step.title} className="card">
        <div className="text-sm font-semibold text-accent">0{index + 1}</div>
        <h3 className="mt-3 text-lg font-semibold text-ink-900">{step.title}</h3>
        <p className="mt-2 text-sm text-ink-700">{step.description}</p>
      </li>
    ))}
  </ol>
);
