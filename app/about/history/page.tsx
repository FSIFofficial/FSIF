import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { history } from '@/lib/data/org'

export const metadata: Metadata = {
  title: '沿革 / History',
  description: '2023年の設立から現在まで、FSIFの歩みを写真とともにご紹介します。',
}

export default function HistoryPage() {
  return (
    <>
      <PageHero
        labelEn="HISTORY"
        title="FSIFの歩み"
        description="2023年の設立から、コミュニティ・イベント・プロダクトへと広がってきた歩みをご紹介します。"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'HISTORY' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif">
          <ol className="relative border-l border-border pl-8 md:pl-12">
            {history.map((entry, i) => (
              <li key={i} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[calc(2rem+1px)] top-1.5 flex size-4 -translate-x-1/2 items-center justify-center md:-left-[calc(3rem+1px)]">
                  <span className="size-3 rounded-full border-2 border-fsif-blue bg-surface" />
                </span>
                <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
                  <div>
                    <time className="font-mono text-sm font-bold text-fsif-blue">{entry.date}</time>
                    <h2 className="mt-1 text-xl font-bold text-foreground">{entry.title}</h2>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                  </div>
                  {entry.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-pale-blue md:w-64">
                      <Image
                        src={entry.image || '/placeholder.svg'}
                        alt={entry.imageAlt ?? entry.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 256px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
