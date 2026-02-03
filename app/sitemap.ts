import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/hizmetler',
    '/sektor-cozumleri',
    '/vaka-calismalari',
    '/surec',
    '/hakkimizda',
    '/blog',
    '/iletisim',
    '/teklif-al'
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticEntries, ...blogEntries];
}
