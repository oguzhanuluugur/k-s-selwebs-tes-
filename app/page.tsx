import Link from 'next/link';
import { Container } from '@/components/Container';
import { PrimaryCTA } from '@/components/PrimaryCTA';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceGrid } from '@/components/ServiceGrid';
import { StatGrid } from '@/components/StatGrid';
import { CaseStudyList } from '@/components/CaseStudyList';
import { ProcessList } from '@/components/ProcessList';
import { FaqList } from '@/components/FaqList';
import { createMetadata, jsonLdFaq, jsonLdBreadcrumb } from '@/lib/seo';
import { faqs } from '@/lib/data';
import Script from 'next/script';

export const metadata = createMetadata({
  title: 'B2B Yazılım Ajansı',
  description: 'Lead generation odaklı, SEO-first ve premium kurumsal web çözümleri sunan B2B yazılım ajansı.',
  path: '/'
});

export default function HomePage() {
  return (
    <div>
      <section className="bg-hero-glow pb-16 pt-16">
        <Container className="section-grid items-center">
          <div className="lg:col-span-7 space-y-6 reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              B2B Yazılım Ajansı
            </p>
            <h1 className="text-4xl font-semibold text-ink-900 sm:text-5xl">
              Kurumsal markalar için yüksek dönüşüm sağlayan dijital ürünler.
            </h1>
            <p className="text-lg text-ink-700">
              Strateji, tasarım ve mühendisliği tek çatı altında sunarak lead üretimini artıran platformlar
              geliştiriyoruz.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryCTA />
              <Link href="/vaka-calismalari" className="text-sm font-semibold text-ink-700 link-hover">
                Vaka çalışmalarını inceleyin
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-ink-600">
              <span>✓ SEO-first mimari</span>
              <span>✓ SSG/SSR optimize</span>
              <span>✓ Güven odaklı UX</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft reveal">
              <h3 className="text-lg font-semibold text-ink-900">Lead dönüşüm panosu</h3>
              <p className="mt-2 text-sm text-ink-700">
                Gerçek zamanlı metriklerle pazarlama ve satış ekipleri aynı hedefte buluşur.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-accent-soft p-4">
                  <p className="text-xs text-ink-600">Aylık lead artışı</p>
                  <p className="text-2xl font-semibold text-ink-900">+%38</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs text-ink-600">Ortalama satış döngüsü</p>
                  <p className="text-2xl font-semibold text-ink-900">-12 gün</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <StatGrid />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Büyümeyi hızlandıran dijital ürün ve yazılım çözümleri"
            description="Kurumsal ekipler için stratejik tasarım ve mühendislik sunuyoruz."
          />
          <ServiceGrid />
          <div className="text-right">
            <Link href="/hizmetler" className="text-sm font-semibold text-accent link-hover">
              Tüm hizmetleri keşfedin →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Güven"
            title="Kurumsal markalar için ölçülebilir sonuçlar"
            description="Referanslarımız, etkisini kanıtladığımız projeler ve başarı metrikleriyle konuşur."
          />
          <CaseStudyList />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Süreç"
            title="Net, şeffaf ve ölçülebilir proje yönetimi"
            description="Her aşamada görünürlük sağlayan süreç yaklaşımımız ile riskleri minimize ederiz."
          />
          <ProcessList />
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container className="section-grid items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Teklif"
              title="Birlikte büyüyelim"
              description="Hedeflerinizi paylaşın, size özel yol haritası ve teklif ile dönüş yapalım."
            />
            <PrimaryCTA />
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink-900">Ön Değerlendirme</h3>
              <p className="mt-2 text-sm text-ink-700">
                30 dakikalık ücretsiz keşif görüşmesi ile yol haritasını birlikte şekillendiriyoruz.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                <li>• Strateji ve hedef analizi</li>
                <li>• UX/UI önerileri</li>
                <li>• Teknik mimari değerlendirmesi</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" />
          <FaqList />
        </Container>
      </section>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Anasayfa', item: 'https://www.selwebs.com/' }]))
        }}
      />
    </div>
  );
}
