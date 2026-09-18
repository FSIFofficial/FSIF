import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Eye } from 'lucide-react'
import { media, getFeaturedMedia, getPopularMedia } from '@/lib/data/media'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { MediaExplorer } from '@/components/media/media-explorer'
import { formatDate } from '@/lib/utils'

const title = '読み物 / MEDIA'
const description = 'FSIFが発信する読み物。インタビュー、コラム、レポート、リサーチ、プロジェクトストーリーをお届けします。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function MediaPage() {
  const featured = getFeaturedMedia()
  const popular = getPopularMedia(3)
  const pdfs = media.filter((m) => m.pdf)

  return (
    <>
      <PageHero
        labelEn="MEDIA"
        title="読み物 / MEDIA"
        description="NEWSがFSIFに起きた出来事なら、MEDIAはFSIFが考え、発信する読み物です。活動の背景にある思考をお届けします。"
        breadcrumbs={[{ label: 'MEDIA' }]}
        image="/images/design-session.png"
        imageAlt="編集会議の様子"
      />

      {/* Featured story */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <Link href={`/media/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-pale-blue">
              <Image
                src={featured.thumbnail || '/placeholder.svg'}
                alt={featured.thumbnailAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-sm bg-fsif-blue px-2.5 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-primary-foreground">
                FEATURED STORY
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-sm border border-fsif-blue px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-fsif-blue">
                  {featured.category}
                </span>
                <time className="font-mono text-xs text-muted-foreground">{formatDate(featured.date)}</time>
              </div>
              <h2 className="mt-3 text-balance text-2xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-fsif-blue md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-[1.9] text-muted-foreground">{featured.lead}</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Popular */}
      <section className="bg-background py-16">
        <div className="container-fsif">
          <SectionHeading labelEn="POPULAR" title="人気の読み物" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {popular.map((m, i) => (
              <Link key={m.slug} href={`/media/${m.slug}`} className="group flex gap-4">
                <span className="font-mono text-3xl font-bold text-fsif-blue/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="font-mono text-[0.65rem] tracking-wide text-muted-foreground">
                    {m.category}
                  </span>
                  <h3 className="mt-1 text-pretty font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
                    {m.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All with category filter */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="ALL STORIES" title="すべての読み物" />
          <div className="mt-8">
            <MediaExplorer />
          </div>
        </div>
      </section>

      {/* PDF library */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="PDF LIBRARY" title="レポートライブラリ" />
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {pdfs.map((m) => (
              <li key={m.slug} className="flex gap-5 rounded-xl border border-border bg-surface p-5">
                <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-md bg-pale-blue">
                  <Image
                    src={m.pdf?.cover || m.thumbnail}
                    alt={`${m.title} の表紙`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-mono text-[0.65rem] tracking-wide text-muted-foreground">
                    {m.pdf?.publishedAt && formatDate(m.pdf.publishedAt)}
                  </span>
                  <h3 className="mt-1 text-pretty font-bold leading-snug text-foreground">
                    {m.pdf?.label}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{m.excerpt}</p>
                  <div className="mt-auto flex gap-2 pt-3">
                    <Link
                      href={`/media/${m.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-md bg-fsif-blue px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-[#0057c4]"
                    >
                      <Eye className="size-3.5" />
                      閲覧
                    </Link>
                    <a
                      href={m.pdf?.href}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-fsif-blue hover:text-fsif-blue"
                    >
                      <Download className="size-3.5" />
                      ダウンロード
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
