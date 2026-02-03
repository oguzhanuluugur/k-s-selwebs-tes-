import { faqs } from '@/lib/data';

export const FaqList = () => (
  <div className="grid gap-4">
    {faqs.map((faq) => (
      <details
        key={faq.question}
        className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-soft"
      >
        <summary className="cursor-pointer text-sm font-semibold text-ink-900">
          {faq.question}
        </summary>
        <p className="mt-3 text-sm text-ink-700">{faq.answer}</p>
      </details>
    ))}
  </div>
);
