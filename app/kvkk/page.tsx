import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'KVKK',
  description: 'Kişisel verilerin korunması ve gizlilik politikamız.',
  path: '/kvkk'
});

export default function KvkkPage() {
  return (
    <section className="py-16">
      <Container className="space-y-6">
        <SectionHeading title="KVKK Aydınlatma Metni" description="Veri güvenliği ve gizlilik politikamız." />
        <p className="text-sm text-ink-700">
          Selwebs olarak kişisel verilerinizi KVKK kapsamında korur ve sadece hizmet sunumu için işleriz.
        </p>
      </Container>
      <Script
        id="kvkk-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'KVKK', item: 'https://www.selwebs.com/kvkk' }
            ])
          )
        }}
      />
    </section>
  );
}
