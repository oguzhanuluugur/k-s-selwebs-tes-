import Link from 'next/link';
import { navigation } from '@/lib/data';

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-lg font-semibold text-ink-900">
        Selwebs
        <span className="ml-2 text-xs font-medium text-accent">B2B Studio</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="link-hover">
            {item.name}
          </Link>
        ))}
      </nav>
      <Link
        href="/teklif-al"
        className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-light"
      >
        Teklif Al
      </Link>
    </div>
  </header>
);
