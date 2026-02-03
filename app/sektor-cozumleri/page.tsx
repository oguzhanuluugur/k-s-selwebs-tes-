import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';
import { sectors } from '@/lib/data';

export const metadata = createMetadata({
  title: 'Sektör Çözümleri',
  description: 'Finans, sağlık, lojistik ve perakende için sektöre özel B2B yazılım çözümleri.',
  path: '/sektor-cozumleri'
});

export default function SectorSolutionsPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Sektör Çözümleri"
          title="Sektörünüzün dinamiklerine özel dijital ürün stratejisi"
          description="Regülasyonlar, kullanıcı davranışları ve operasyonel ihtiyaçları birlikte analiz ediyoruz."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => (
            <article key={sector.title} className="card">
              <h3 className="text-lg font-semibold text-ink-900">{sector.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{sector.description}</p>
            </article>
          ))}
        </div>
      </Container>
      <Script
        id="sector-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Sektör Çözümleri', item: 'https://www.selwebs.com/sektor-cozumleri' }
            ])
          )
        }}
      />
    </section>
  );
}
