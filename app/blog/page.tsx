import Link from 'next/link';
import Script from 'next/script';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts } from '@/lib/data';
import { createMetadata, jsonLdBreadcrumb } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Blog',
  description: 'B2B dijital ürün, SEO ve dönüşüm optimizasyonu üzerine içgörüler.',
  path: '/blog'
});

export default function BlogPage() {
  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Blog"
          title="B2B büyüme odaklı içerikler"
          description="Strateji, UX ve teknoloji ekipleri için veriye dayalı makaleler."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card">
              <p className="text-xs text-ink-500">{post.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{post.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-accent link-hover">
                Devamını okuyun →
              </Link>
            </article>
          ))}
        </div>
      </Container>
      <Script
        id="blog-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Blog', item: 'https://www.selwebs.com/blog' }
            ])
          )
        }}
      />
    </section>
  );
}
