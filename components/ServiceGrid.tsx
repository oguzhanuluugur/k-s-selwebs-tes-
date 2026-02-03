import { services } from '@/lib/data';

export const ServiceGrid = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {services.map((service) => (
      <div key={service.title} className="card">
        <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
        <p className="mt-3 text-sm text-ink-700">{service.description}</p>
      </div>
    ))}
  </div>
);
