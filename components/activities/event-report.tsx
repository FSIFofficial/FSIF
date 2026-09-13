import { Calendar, FileText, MapPin } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'
import { formatDateJa } from '@/lib/utils'
import type { EventItem } from '@/lib/types'

/** Shared detail template for a past-event report (開催実績の報告書). */
export function EventReport({ item }: { item: EventItem }) {
  return (
    <>
      <PageHero
        eyebrow={`EVENT / ${item.reportType ?? '開催実績'}`}
        title={item.title}
        lead={item.subtitle}
        breadcrumbs={[
          { label: 'Activities', href: '/activities' },
          { label: 'イベント事業', href: '/activities/event' },
          { label: item.title },
        ]}
        image={item.image}
        imageAlt={item.imageAlt}
      />

      <section className="section-y">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <SectionHeading eyebrow="REPORT" title="開催概要" description={item.summary} />
              {item.publishedDate && (
                <p className="mt-4 text-sm text-muted-foreground">
                  公開日：{formatDateJa(item.publishedDate)}
                </p>
              )}
            </Reveal>
            <Reveal delay={80}>
              <dl className="divide-y divide-border rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 pb-4">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">日時</dt>
                    <dd className="mt-1 font-medium text-foreground">
                      {item.eventDateDisplay ?? formatDateJa(item.date)}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">場所</dt>
                    <dd className="mt-1 font-medium text-foreground">{item.venueDisplay ?? item.venue}</dd>
                  </div>
                </div>
                {item.content && (
                  <div className="flex items-start gap-3 pt-4">
                    <FileText className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">内容</dt>
                      <dd className="mt-1 font-medium text-foreground">{item.content}</dd>
                    </div>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>

          {item.externalLinks && item.externalLinks.length > 0 && (
            <Reveal>
              <div className="mt-10 flex flex-wrap gap-3">
                {item.externalLinks.map((l) => (
                  <CtaLink key={l.href} href={l.href} variant="secondary">
                    {l.label}
                  </CtaLink>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-y bg-navy text-navy-foreground">
        <div className="container-wide text-center">
          <Reveal>
            <SectionHeading
              align="center"
              onDark
              eyebrow="NEXT"
              title="次の開催にご参加ください"
              description="出展・協賛・登壇のご相談、そして最新の開催情報はこちらから。"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CtaLink href="/contact">開催について相談する</CtaLink>
              <CtaLink href="/activities/event" variant="secondary" onDark>
                イベント事業を見る
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
