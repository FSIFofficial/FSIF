import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'
import { symposium2024 as s } from '@/lib/data/events'
import { AlertTriangle, Calendar, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '宇宙ビジネスシンポジウム2024',
  description:
    'FSIFが主催した宇宙ビジネスシンポジウム2024の開催記録。企業・研究機関・大学・学生が立場を越えて宇宙産業の未来を語り合いました。',
}

export default function SymposiumPage() {
  return (
    <>
      <PageHero
        eyebrow="EVENT / 開催実績"
        title="宇宙ビジネスシンポジウム2024"
        lead={s.theme}
        breadcrumbs={[
          { label: 'Activities', href: '/activities' },
          { label: 'イベント事業', href: '/activities/event' },
          { label: '宇宙ビジネスシンポジウム2024' },
        ]}
        image="/images/symposium.png"
        imageAlt="宇宙ビジネスシンポジウム2024の会場"
      />

      {/* 開催概要 */}
      <section className="section-y">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="OVERVIEW"
                title="開催概要"
                description={s.concept}
              />
            </Reveal>
            <Reveal delay={80}>
              <dl className="divide-y divide-border rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 pb-4">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">開催日</dt>
                    <dd className="mt-1 font-medium text-foreground">{s.date}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">会場</dt>
                    <dd className="mt-1 font-medium text-foreground">{s.venue}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <Users className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">対象</dt>
                    <dd className="mt-1 font-medium text-foreground">{s.audience}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>
          </div>

          {s.sample && (
            <Reveal>
              <p className="mt-8 flex items-start gap-2 rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  本ページの登壇者・協賛・参加者数などの一部は、実データ確定前の
                  <strong className="font-semibold">仮素材（サンプル）</strong>
                  です。確定情報に差し替えて公開してください。
                </span>
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* プログラム */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="PROGRAM" title="プログラム" />
          </Reveal>
          <ol className="mt-10 space-y-3">
            {s.program.map((item, i) => (
              <Reveal as="li" key={item.time} delay={i * 60}>
                <div className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="w-16 shrink-0 font-mono text-sm font-semibold text-fsif-blue">{item.time}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 登壇者 */}
      <section className="section-y">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="SPEAKERS"
              title="登壇者"
              description="立場の異なる登壇者が、それぞれの視点から宇宙産業の未来を語りました。"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.speakers.map((sp, i) => (
              <Reveal key={sp.name + i} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="inline-block rounded-full bg-fsif-blue/10 px-3 py-1 text-xs font-semibold text-fsif-blue">
                    {sp.role}
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{sp.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{sp.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 会場の様子 */}
      <section className="section-y bg-secondary">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="GALLERY" title="会場の様子" />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {s.gallery.map((g, i) => (
              <Reveal key={g.image + i} delay={i * 80}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={g.image || '/placeholder.svg'}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 協賛 */}
      <section className="section-y">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="SPONSORS" title="協賛" />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-4">
            {s.sponsors.map((name) => (
              <div
                key={name}
                className="flex h-16 min-w-40 flex-1 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
