import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { StatGrid } from '@/components/StatGrid';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Hakkımızda',
  description: 'B2B büyüme hedeflerine odaklanan strateji, tasarım ve yazılım ekibi.',
  path: '/hakkimizda'
});

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Stratejik ortaklık yaklaşımıyla çalışan ürün ekibi"
          description="Selwebs, kurumsal dijital ürünlerde büyümeyi hızlandırmak için tasarım ve mühendisliği birleştirir."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-ink-900">Misyonumuz</h3>
            <p className="mt-2 text-sm text-ink-700">
              B2B şirketlerin dijital yatırımlarını ölçülebilir büyüme çıktısına dönüştürmek.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-ink-900">Vizyonumuz</h3>
            <p className="mt-2 text-sm text-ink-700">
              Avrupa ve MENA bölgesinde en güvenilir dijital ürün ortağı olmak.
            </p>
          </div>
        </div>
        <StatGrid />
      </Container>
      <Script
        id="about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Hakkımızda', item: 'https://www.selwebs.com/hakkimizda' }
            ])
          )
        }}
      />
    </section>
  );
}
