import Script from 'next/script';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { createMetadata, jsonLdArticle, jsonLdBreadcrumb } from '@/lib/seo';
import { blogPosts } from '@/lib/data';

export const generateStaticParams = async () => blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const article = jsonLdArticle({
    headline: post.title,
    description: post.excerpt,
    url: `https://www.selwebs.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: 'Selwebs Editör Ekibi'
  });

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</p>
          <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="text-sm text-ink-500">{post.date}</p>
        </div>
        <div className="prose max-w-none text-ink-700">
          <p>
            {post.excerpt} Bu makale, B2B ekiplerinin lead generation, SEO ve ürün stratejisi alanında hızlı
            kazanımlar elde etmesi için hazırlanmıştır.
          </p>
          <h2>Öne çıkan başlıklar</h2>
          <ul>
            <li>Hedef segmentler için içerik stratejisi</li>
            <li>Dönüşüm akışlarında veri odaklı optimizasyon</li>
            <li>Sales ve marketing ekipleriyle hizalama</li>
          </ul>
          <p>
            Daha fazla içgörü için ekibimizle iletişime geçebilir veya danışmanlık talebinde
            bulunabilirsiniz.
          </p>
        </div>
      </Container>

      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <Script
        id="article-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdBreadcrumb([
              { name: 'Anasayfa', item: 'https://www.selwebs.com/' },
              { name: 'Blog', item: 'https://www.selwebs.com/blog' },
              { name: post.title, item: `https://www.selwebs.com/blog/${post.slug}` }
            ])
          )
        }}
      />
    </section>
  );
}
