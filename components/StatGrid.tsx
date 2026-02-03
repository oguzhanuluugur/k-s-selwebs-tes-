import { stats } from '@/lib/data';

export const StatGrid = () => (
  <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label} className="space-y-2">
        <p className="text-2xl font-semibold text-ink-900">{stat.value}</p>
        <p className="text-sm text-ink-600">{stat.label}</p>
      </div>
    ))}
  </div>
);
