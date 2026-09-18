import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { EventFilter } from '@/components/activities/event-filter'
import { symposium2024 } from '@/lib/data/events'

const title = 'イベント事業'
const description = '立場と分野を越えた出会いと共創が始まる場を企画・運営するFSIFのイベント事業。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

const symposiumHref = '/activities/event/SBS24'

export default function EventPage() {
  return (
    <>
      <PageHero
        labelEn="EVENT"
        title="宇宙を、人と人が出会う場所へ。"
        description="主催・共催・運営支援・出展・登壇・ワークショップ。多様な形で、共創が始まる場をつくります。"
        breadcrumbs={[{ label: 'ACTIVITIES', href: '/activities' }, { label: 'イベント事業' }]}
        image="/images/SBS24R.png"
        imageAlt="イベントの交流風景"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading labelEn="ABOUT" title="イベント事業とは" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              企業、研究機関、大学、学生。立場の異なる人が対等に出会える場は、意外なほど限られています。
              イベント事業は、その出会いをデザインし、新しい共創のきっかけを生み出します。
            </p>
            <p>
              大規模なシンポジウムから少人数のワークショップまで、目的に応じた多様な形式で場をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* 主なイベント: 宇宙ビジネスシンポジウム2024（代表的な開催実績） */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="FEATURED EVENT" title="主なイベント" />
          <Link
            href={symposiumHref}
            className="group mt-8 grid overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-fsif-blue focus-visible:border-fsif-blue lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
              <Image
                src="/images/SBS24.png"
                alt="宇宙ビジネスシンポジウム2024の会場"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="font-mono text-sm font-bold text-fsif-blue">SYMPOSIUM 2024 / 開催実績</span>
              <h3 className="mt-2 text-balance text-2xl font-bold text-foreground transition-colors group-hover:text-fsif-blue md:text-3xl">
                宇宙ビジネスシンポジウム2024
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {symposium2024.theme}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{symposium2024.concept}</p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">開催日</dt>
                  <dd className="font-medium text-foreground">{symposium2024.date}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">会場</dt>
                  <dd className="font-medium text-foreground">{symposium2024.venue}</dd>
                </div>
              </dl>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue">
                開催レポートを見る
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 過去の開催イベントとその報告書 */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="PAST EVENTS" title="過去の開催イベントとその報告書" />
          <p className="mt-4 text-sm text-muted-foreground">種別で絞り込めます。</p>
          <div className="mt-8">
            <EventFilter />
          </div>
        </div>
      </section>
    </>
  )
}
