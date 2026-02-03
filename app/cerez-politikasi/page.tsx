import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Çerez Politikası',
  description: 'Web sitemizde kullanılan çerezlere ilişkin bilgilendirme.',
  path: '/cerez-politikasi'
});

export default function CookiePolicyPage() {
  return (
    <section className="py-16">
      <Container className="space-y-6">
        <SectionHeading title="Çerez Politikası" description="Kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz." />
        <p className="text-sm text-ink-700">
          Analitik ve performans ölçümleri için çerezler kullanılabilir. Tarayıcı ayarlarınızdan çerez
          yönetimi yapabilirsiniz.
        </p>
      </Container>
      <Script
        id="cookies-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Çerez Politikası', item: 'https://www.selwebs.com/cerez-politikasi' }
            ])
          )
        }}
      />
    </section>
  );
}
