import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedMedia, getLatestMedia } from '@/lib/data/media'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'
import { formatDate } from '@/lib/utils'

export function StoriesMedia() {
  const featured = getFeaturedMedia()
  const latest = getLatestMedia(3).filter((m) => m.slug !== featured.slug).slice(0, 3)

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-fsif">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionHeading labelEn="STORIES / MEDIA" title="FSIFが発信する、読み物。" />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              NEWSがFSIFに起きた出来事なら、MEDIAはFSIFが考え、発信する読み物です。
              インタビュー、コラム、レポートを通じて活動の背景をお届けします。
            </p>
          </div>
          <CtaLink href="/media" variant="text" className="pb-1">
            読み物一覧を見る
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          {/* Featured editorial */}
          <Reveal>
            <Link href={`/media/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-pale-blue">
                <Image
                  src={featured.thumbnail || '/placeholder.svg'}
                  alt={featured.thumbnailAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex items-center rounded-sm border border-fsif-blue px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-fsif-blue">
                  {featured.category}
                </span>
                <time className="font-mono text-xs text-muted-foreground" dateTime={featured.date}>
                  {formatDate(featured.date)}
                </time>
                {featured.readingTime && (
                  <span className="text-xs text-muted-foreground">約{featured.readingTime}分</span>
                )}
              </div>
              <h3 className="mt-2 text-balance text-2xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-fsif-blue md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-[1.9] text-muted-foreground">{featured.lead}</p>
            </Link>
          </Reveal>

          {/* Latest list */}
          <Reveal delay={100}>
            <ul className="flex flex-col divide-y divide-border">
              {latest.map((m) => (
                <li key={m.slug}>
                  <Link href={`/media/${m.slug}`} className="group flex flex-col py-5 first:pt-0">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-sm bg-pale-blue px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-fsif-blue">
                        {m.category}
                      </span>
                      <time className="font-mono text-xs text-muted-foreground" dateTime={m.date}>
                        {formatDate(m.date)}
                      </time>
                    </div>
                    <h4 className="mt-2 text-pretty font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
                      {m.title}
                    </h4>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {m.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
