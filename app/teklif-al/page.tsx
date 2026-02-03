import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { LeadForm } from '@/components/LeadForm';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Teklif Al',
  description: 'Projeleriniz için hızlı teklif alın. B2B dönüşüm odaklı dijital çözümler sunuyoruz.',
  path: '/teklif-al'
});

export default function OfferPage() {
  return (
    <section className="py-16">
      <Container className="section-grid items-start">
        <div className="lg:col-span-5 space-y-6">
          <SectionHeading
            eyebrow="Teklif Al"
            title="Dijital ürününüz için teklif alın"
            description="Proje hedeflerinizi, teknik ihtiyaçlarınızı ve zaman planınızı paylaşın."
          />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-ink-900">Teslimat yaklaşımımız</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li>• 48 saat içinde ön analiz ve kapsam</li>
              <li>• CRM entegrasyonuna hazır takip sistemi</li>
              <li>• SLA ve bakım opsiyonları</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink-900">Teklif Formu</h3>
            <p className="mt-2 text-sm text-ink-700">
              Talepleriniz satış ekibimiz tarafından önceliklendirilir ve CRM sistemine aktarılır.
            </p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </Container>
      <Script
        id="offer-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Teklif Al', item: 'https://www.selwebs.com/teklif-al' }
            ])
          )
        }}
      />
    </section>
  );
}
