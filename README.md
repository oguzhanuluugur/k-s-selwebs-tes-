# Selwebs B2B Yazılım Ajansı Web Sitesi

Bu proje, B2B yazılım ajansları için lead generation odaklı, SEO-first ve premium UI/UX hedefleriyle hazırlanmış bir Next.js (App Router) web sitesi şablonudur.

## Özellikler
- SEO otomasyonu (Metadata, OpenGraph, Twitter Cards, canonical URL)
- Schema.org yapılandırılmış veriler (Organization, Service, FAQ, BlogPosting, Breadcrumb)
- Sitemap ve robots.txt otomatik üretimi
- Lead capture formu + doğrulama (reCAPTCHA alanı hazır)
- CRM/CMS entegrasyonlarına hazır API uç noktası
- TailwindCSS ile modern ve erişilebilir UI
- Mobile-first, responsive tasarım

## Kurulum
```bash
npm install
```

## Geliştirme
```bash
npm run dev
```

## Production
```bash
npm run build
npm run start
```

## Yapı
- `app/`: Next.js App Router sayfaları, API endpointleri, sitemap/robots
- `components/`: Modüler UI bileşenleri
- `lib/`: SEO yardımcıları ve statik içerik verileri

## Notlar
- `app/api/lead` endpointi CRM webhook entegrasyonuna hazırdır.
- reCAPTCHA için `LeadForm` içinde token alanı bulunmaktadır.
