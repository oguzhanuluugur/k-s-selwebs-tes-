import Script from 'next/script';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { CaseStudyList } from '@/components/CaseStudyList';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Vaka Çalışmaları',
  description: 'B2B müşterilerimiz için yarattığımız dönüşüm odaklı başarı hikayeleri.',
  path: '/vaka-calismalari'
});

export default function CaseStudiesPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Vaka Çalışmaları"
          title="Ölçülebilir başarı hikayeleri"
          description="Tüm projelerimizde hedef, dönüşüm ve performans metrikleri ile ilerleriz."
        />
        <CaseStudyList />
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-ink-900">Detaylı rapor ister misiniz?</h3>
          <p className="mt-2 text-sm text-ink-700">
            Sektörünüze özel vaka raporlarını incelemek için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="mt-4 inline-flex text-sm font-semibold text-accent link-hover">
            İletişime geç →
          </Link>
        </div>
      </Container>
      <Script
        id="case-studies-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Vaka Çalışmaları', item: 'https://www.selwebs.com/vaka-calismalari' }
            ])
          )
        }}
      />
    </section>
  );
}
