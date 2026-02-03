import Link from 'next/link';

type PrimaryCTAProps = {
  label?: string;
  href?: string;
};

export const PrimaryCTA = ({ label = 'Teklif Al', href = '/teklif-al' }: PrimaryCTAProps) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-light"
  >
    {label}
  </Link>
);
