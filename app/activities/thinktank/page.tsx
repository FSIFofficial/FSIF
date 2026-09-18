import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'

const title = 'シンクタンク事業'
const description = '宇宙産業の動向を調査・分析し、レポートや提言として社会に発信するFSIFのシンクタンク事業。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

const outputs = [
  { en: 'RESEARCH', ja: '調査', d: '宇宙産業の動向や参入意向を定量・定性で調査します。' },
  { en: 'REPORT', ja: 'レポート', d: '調査結果を分析し、読みやすいレポートにまとめます。' },
  { en: 'SURVEY', ja: 'アンケート', d: 'コミュニティの声を継続的に集め、活動に反映します。' },
  { en: 'INSIGHT', ja: '考察', d: 'データから見えた示唆をコラムや提言として発信します。' },
  { en: 'DATA', ja: 'データ', d: '調査データを整理し、二次利用しやすい形で公開します。' },
]

export default function ThinkTankPage() {
  return (
    <>
      <PageHero
        labelEn="THINK TANK"
        title="調べ、分析し、社会に発信する。"
        description="宇宙産業の動向を客観的に捉え、レポートや提言として発信します。"
        breadcrumbs={[{ label: 'ACTIVITIES', href: '/activities' }, { label: 'シンクタンク事業' }]}
        image="/images/research.png"
        imageAlt="リサーチの様子"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="WHAT WE PRODUCE" title="5つのアウトプット" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {outputs.map((o) => (
              <li key={o.en} className="rounded-xl border border-border bg-background p-5">
                <span className="section-label text-fsif-blue">{o.en}</span>
                <h3 className="mt-2 font-bold text-foreground">{o.ja}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
