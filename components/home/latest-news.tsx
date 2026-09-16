import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedNews, getLatestNews } from '@/lib/data/news'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { CategoryTag, NewsRow } from '@/components/shared/news-card'
import { Reveal } from '@/components/ui/reveal'
import { formatDate } from '@/lib/utils'

export function LatestNews() {
  const featured = getFeaturedNews()
  const rest = getLatestNews(6)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-fsif">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading labelEn="LATEST NEWS" title="最新ニュース" />
          <CtaLink href="/news" variant="text" className="shrink-0 pb-1">
            ニュース一覧を見る
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Link href={`/news/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
                <Image
                  src={featured.thumbnail || '/placeholder.svg'}
                  alt={featured.thumbnailAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-fsif-blue px-2.5 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-primary-foreground">
                  FEATURED
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <time className="font-mono text-xs text-muted-foreground" dateTime={featured.date}>
                  {formatDate(featured.date)}
                </time>
                <CategoryTag category={featured.category} />
              </div>
              <h3 className="mt-2 text-balance text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue md:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-3 line-clamp-2 leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-border">
              {rest.map((item) => (
                <li key={item.slug}>
                  <NewsRow item={item} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
