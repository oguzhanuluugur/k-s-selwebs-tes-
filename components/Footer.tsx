import Link from 'next/link';

const footerLinks = [
  { name: 'KVKK', href: '/kvkk' },
  { name: 'Çerez Politikası', href: '/cerez-politikasi' },
  { name: 'İletişim', href: '/iletisim' }
];

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold">Selwebs</h3>
        <p className="mt-3 text-sm text-ink-700">
          Kurumsal dijital ürünler için strateji, tasarım ve mühendisliği bir araya getiriyoruz.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-ink-900">Hızlı Erişim</h4>
        <ul className="mt-3 space-y-2 text-sm text-ink-700">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-hover">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-ink-900">İletişim</h4>
        <p className="mt-3 text-sm text-ink-700">İstanbul, Türkiye</p>
        <p className="text-sm text-ink-700">hello@selwebs.com</p>
        <p className="text-sm text-ink-700">+90 (212) 000 00 00</p>
      </div>
    </div>
    <div className="border-t border-slate-200 py-4 text-center text-xs text-ink-500">
      © 2024 Selwebs. Tüm hakları saklıdır.
    </div>
  </footer>
);
