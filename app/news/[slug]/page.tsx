import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { news, getNewsBySlug, getRelatedNews } from '@/lib/data/news'
import { Breadcrumbs } from '@/components/shared/page-hero'
import { CategoryTag, NewsCard } from '@/components/shared/news-card'
import { ArticleShare } from '@/components/shared/article-share'
import { Linkify } from '@/components/shared/linkify'
import { CtaLink } from '@/components/ui/cta-link'
import { SectionHeading } from '@/components/ui/section-heading'
import { formatDateJa } from '@/lib/utils'

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) return { title: 'ニュースが見つかりません' }
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: { title: item.title, description: item.excerpt, images: [item.thumbnail] },
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) notFound()

  const related = getRelatedNews(slug, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    image: item.thumbnail,
    articleSection: item.category,
    publisher: { '@type': 'Organization', name: 'Future Space Industry Forum' },
  }

  return (
    <article className="pb-20 pt-28 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-fsif">
        <Breadcrumbs items={[{ label: 'NEWS', href: '/news' }, { label: item.title }]} />

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <CategoryTag category={item.category} />
            <time className="font-mono text-sm text-muted-foreground" dateTime={item.date}>
              {formatDateJa(item.date)}
            </time>
          </div>
          <h1 className="mt-4 text-balance text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight text-foreground">
            {item.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-[1.9] text-muted-foreground">{item.lead}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white">
            <Image
              src={item.thumbnail || '/placeholder.svg'}
              alt={item.thumbnailAlt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {item.body.map((block, i) => (
            <section key={i} className="mb-10">
              {block.heading && (
                <h2 className="mb-4 border-l-4 border-fsif-blue pl-4 text-xl font-bold text-foreground">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 leading-[1.9] text-foreground/90">
                  <Linkify text={p} />
                </p>
              ))}
              {block.image && (
                <figure className="mt-6">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white">
                    <Image
                      src={block.image || '/placeholder.svg'}
                      alt={block.imageAlt ?? ''}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-contain"
                    />
                  </div>
                </figure>
              )}
            </section>
          ))}

          {/* Related internal link + External + PDF */}
          {(item.relatedLink || item.externalUrl || item.pdf) && (
            <div className="mb-10 flex flex-wrap gap-3 rounded-xl border border-border bg-surface p-5">
              {item.relatedLink && (
                <CtaLink href={item.relatedLink.href} variant="primary">
                  {item.relatedLink.label}
                </CtaLink>
              )}
              {item.externalUrl && (
                <CtaLink href={item.externalUrl.href} variant="primary" external>
                  {item.externalUrl.label}
                </CtaLink>
              )}
              {item.pdf && (
                <a
                  href={item.pdf.href}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:border-fsif-blue hover:text-fsif-blue"
                >
                  <Download className="size-4" />
                  {item.pdf.label}
                </a>
              )}
            </div>
          )}

          <div className="border-t border-border pt-6">
            <ArticleShare title={item.title} path={`/news/${item.slug}`} />
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="container-fsif mt-20">
          <SectionHeading labelEn="RELATED NEWS" title="関連ニュース" />
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <NewsCard key={r.slug} item={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
