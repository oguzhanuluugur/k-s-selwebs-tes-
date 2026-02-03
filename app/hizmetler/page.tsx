import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceGrid } from '@/components/ServiceGrid';
import { createMetadata, jsonLdBreadcrumb, jsonLdService } from '@/lib/seo';
import { services } from '@/lib/data';

export const metadata = createMetadata({
  title: 'Hizmetler',
  description: 'Web geliştirme, mobil uygulama, UI/UX ve özel yazılım hizmetleriyle B2B büyüme odaklı çözümler.',
  path: '/hizmetler'
});

export default function ServicesPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Hizmetler"
          title="B2B büyüme hedefleri için uçtan uca dijital çözümler"
          description="Her hizmet, dönüşüm odaklı strateji ve ölçülebilir performans hedefleriyle tasarlanır."
        />
        <ServiceGrid />
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-lg font-semibold text-ink-900">{service.title} Yol Haritası</h3>
              <p className="mt-2 text-sm text-ink-700">
                Keşiften yayına kadar net KPI’lar, sürdürülebilir teknik mimari ve kullanıcı odaklı geliştirme.
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Script
        id="services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Hizmetler', item: 'https://www.selwebs.com/hizmetler' }
            ])
          )
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            services.map((service) => jsonLdService(service.title, service.description))
          )
        }}
      />
    </section>
  );
}
