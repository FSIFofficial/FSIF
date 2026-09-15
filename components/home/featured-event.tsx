import Image from 'next/image'
import { symposium2024 as s } from '@/lib/data/events'
import { CtaLink } from '@/components/ui/cta-link'

export function FeaturedEvent() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image
            src="/images/SBS24.png"
            alt="宇宙ビジネスシンポジウム2024の会場"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 lg:bg-gradient-to-r lg:from-navy/10 lg:to-navy" />
        </div>

        <div className="px-5 py-16 md:px-12 md:py-24">
          <span className="section-label text-accent-blue">FEATURED EVENT</span>
          <h2 className="mt-3 text-balance text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight text-white">
            宇宙ビジネスシンポジウム2024
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-navy-foreground/80">{s.concept}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
              <dt className="section-label text-navy-foreground/50">THEME</dt>
              <dd className="mt-1.5 text-sm text-white">{s.theme}</dd>
            </div>
            <div>
              <dt className="section-label text-navy-foreground/50">DATE</dt>
              <dd className="mt-1.5 text-sm text-white">{s.date}</dd>
            </div>
            <div>
              <dt className="section-label text-navy-foreground/50">VENUE</dt>
              <dd className="mt-1.5 text-sm text-white">{s.venue}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink href="/activities/event/space-business-symposium-2024" variant="primary">
              開催記録を見る
            </CtaLink>
            <CtaLink href="/activities/event" variant="secondary" onDark>
              イベント事業を見る
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
