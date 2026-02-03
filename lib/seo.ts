import type { Metadata } from 'next';

const siteConfig = {
  name: 'Selwebs B2B Yazılım Ajansı',
  description:
    'B2B odaklı yazılım çözümleri, kurumsal web geliştirme, özel yazılım ve dijital ürün tasarımı.',
  url: 'https://www.selwebs.com',
  ogImage: '/og-image.png',
  locale: 'tr_TR',
  twitterHandle: '@selwebs'
};

export type PageSEO = {
  title: string;
  description: string;
  path: string;
};

export const createMetadata = ({ title, description, path }: PageSEO): Metadata => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: fullTitle }]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle
    }
  };
};

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  sameAs: ['https://www.linkedin.com/company/selwebs'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-212-000-0000',
    contactType: 'sales',
    areaServed: 'TR',
    availableLanguage: ['Turkish', 'English']
  }
};

export const jsonLdBreadcrumb = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.item
  }))
});

export const jsonLdService = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name
  },
  areaServed: 'TR',
  description
});

export const jsonLdFaq = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const jsonLdArticle = (article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.headline,
  description: article.description,
  url: article.url,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.svg`
    }
  }
});

export const site = siteConfig;
