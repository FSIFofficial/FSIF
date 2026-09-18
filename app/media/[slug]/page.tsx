import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { media, getMediaBySlug } from '@/lib/data/media'
import { Breadcrumbs } from '@/components/shared/page-hero'
import { ArticleShare } from '@/components/shared/article-share'
import { MediaCard } from '@/components/media/media-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { formatDateJa } from '@/lib/utils'
import { pageOpenGraph } from '@/lib/site-url'

export function generateStaticParams() {
  return media.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getMediaBySlug(slug)
  if (!item) return { title: '記事が見つかりません' }
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: pageOpenGraph(item.title, item.excerpt, item.thumbnail),
  }
}

export default async function MediaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getMediaBySlug(slug)
  if (!item) notFound()

  const related = media.filter((m) => m.slug !== slug && m.category === item.category).slice(0, 3)
  const fallbackRelated =
    related.length > 0 ? related : media.filter((m) => m.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    datePublished: item.date,
    image: item.thumbnail,
    author: { '@type': 'Organization', name: item.author ?? 'FSIF' },
    publisher: { '@type': 'Organization', name: 'Future Space Industry Forum' },
  }

  return (
    <article className="pb-20 pt-28 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-fsif">
        <Breadcrumbs items={[{ label: 'MEDIA', href: '/media' }, { label: item.title }]} />

        <header className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-sm border border-fsif-blue px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-fsif-blue">
              {item.category}
            </span>
            <time className="font-mono text-sm text-muted-foreground" dateTime={item.date}>
              {formatDateJa(item.date)}
            </time>
            {item.readingTime && (
              <span className="text-sm text-muted-foreground">約{item.readingTime}分で読めます</span>
            )}
          </div>
          <h1 className="mt-4 text-balance text-[clamp(1.7rem,3.8vw,2.6rem)] font-bold leading-tight tracking-tight text-foreground">
            {item.title}
          </h1>
          {item.author && (
            <p className="mt-4 text-sm text-muted-foreground">文：{item.author}</p>
          )}
          <p className="mt-4 text-pretty text-lg leading-[1.9] text-muted-foreground">{item.lead}</p>
        </header>

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
                <h2 className="mb-4 text-xl font-bold text-foreground">{block.heading}</h2>
              )}
              {block.paragraphs.map((p, j) => (
                <p key={j} className="mb-4 leading-[1.9] text-foreground/90">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {item.pdf && (
            <div className="mb-10 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-surface p-5">
              <div className="relative aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-md bg-pale-blue">
                <Image src={item.pdf.cover || item.thumbnail} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-foreground">{item.pdf.label}</p>
                <p className="text-sm text-muted-foreground">PDFレポートをダウンロードできます。</p>
              </div>
              <a
                href={item.pdf.href}
                className="inline-flex items-center gap-2 rounded-md bg-fsif-blue px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#0057c4]"
              >
                <Download className="size-4" />
                ダウンロード
              </a>
            </div>
          )}

          <div className="border-t border-border pt-6">
            <ArticleShare title={item.title} path={`/media/${item.slug}`} />
          </div>
        </div>
      </div>

      <div className="container-fsif mt-20">
        <SectionHeading labelEn="RELATED STORIES" title="関連する読み物" />
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {fallbackRelated.map((r) => (
            <MediaCard key={r.slug} item={r} />
          ))}
        </div>
      </div>
    </article>
  )
}
