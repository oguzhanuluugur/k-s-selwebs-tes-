import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { jsonLdOrganization, site } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: site.name
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
