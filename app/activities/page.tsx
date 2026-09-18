import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { activities } from '@/lib/data/home'

const title = '事業 / Activities'
const description = 'コミュニティ、ワーキンググループ、イベント、シンクタンク。FSIFの4つの事業をご紹介します。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        labelEn="ACTIVITIES"
        title="4つの事業で、宇宙とつながる。"
        description="コミュニティから共創、研究まで。FSIFは4つの事業を有機的につなぎ、宇宙とかかわる選択肢を広げています。"
        breadcrumbs={[{ label: 'ACTIVITIES' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif flex flex-col gap-6">
          {activities.map((a, i) => (
            <Link
              key={a.id}
              href={a.href}
              className="group grid overflow-hidden rounded-2xl border border-border bg-background md:grid-cols-2"
            >
              <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[280px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={a.image || '/placeholder.svg'}
                  alt={a.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="font-mono text-sm font-bold text-fsif-blue">{a.number}</span>
                <span className="section-label mt-3 text-muted-foreground">{a.labelEn}</span>
                <h2 className="mt-1 text-2xl font-bold text-foreground transition-colors group-hover:text-fsif-blue">
                  {a.labelJa}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue">
                  詳しく見る
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
