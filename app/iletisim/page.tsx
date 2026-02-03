import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { LeadForm } from '@/components/LeadForm';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'İletişim',
  description: 'Projeleriniz için Selwebs ile iletişime geçin ve uzman ekibimizle tanışın.',
  path: '/iletisim'
});

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container className="section-grid items-start">
        <div className="lg:col-span-6 space-y-6">
          <SectionHeading
            eyebrow="İletişim"
            title="Dijital dönüşümünüzü birlikte planlayalım"
            description="24 saat içinde dönüş garantisi. Hedeflerinizi paylaşın, size özel yol haritasını birlikte oluşturalım."
          />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-ink-900">İletişim Bilgileri</h3>
            <p className="mt-2 text-sm text-ink-700">İstanbul, Türkiye</p>
            <p className="text-sm text-ink-700">+90 (212) 000 00 00</p>
            <p className="text-sm text-ink-700">hello@selwebs.com</p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink-900">Hızlı İletişim Formu</h3>
            <p className="mt-2 text-sm text-ink-700">
              Satış ekibimiz başvurunuzu aldıktan sonra CRM sistemimize aktarır.
            </p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </Container>
      <Script
        id="contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'İletişim', item: 'https://www.selwebs.com/iletisim' }
            ])
          )
        }}
      />
    </section>
  );
}
