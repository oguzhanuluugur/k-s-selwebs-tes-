import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ProcessList } from '@/components/ProcessList';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Süreç',
  description: 'Keşiften yayın ve optimizasyona kadar şeffaf proje yönetimi süreçleri.',
  path: '/surec'
});

export default function ProcessPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Süreç"
          title="Her adımda görünürlük sağlayan çalışma modeli"
          description="Kurumsal ekipler için riskleri azaltan, planlı ve ölçülebilir teslimat sistemi."
        />
        <ProcessList />
      </Container>
      <Script
        id="process-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Süreç', item: 'https://www.selwebs.com/surec' }
            ])
          )
        }}
      />
    </section>
  );
}
