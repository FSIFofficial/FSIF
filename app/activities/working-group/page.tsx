import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { WgTabs } from '@/components/activities/wg-tabs'
import { wgThemeExamples, fetchWorkingGroups } from '@/lib/data/workinggroups'

const title = 'ワーキンググループ事業'
const description =
  '学生団体とFSIFが、宇宙利用をテーマに議論・検討する場。学生の視点を持ち寄り、新しい宇宙利用の可能性を考えるFSIFのワーキンググループ事業。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default async function WorkingGroupPage() {
  const workingGroups = await fetchWorkingGroups()

  return (
    <>
      <PageHero
        labelEn="WORKING GROUP"
        title="学生団体とFSIFで、宇宙利用を考える。"
        description="宇宙に関わる学生団体や異分野の学生団体とFSIFが集まり、それぞれの活動や専門分野に宇宙をどう活用できるかを議論する場です。"
        breadcrumbs={[{ label: 'ACTIVITIES', href: '/activities' }, { label: 'ワーキンググループ事業' }]}
        image="/images/design-session.png"
        imageAlt="ワーキンググループの議論"
      />

      {/* Working Groupとは */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading labelEn="WHAT IS WG" title="Working Groupとは" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              宇宙に関わる学生団体や異分野の学生団体とFSIFが集まり、それぞれの活動や専門分野に宇宙をどう活用できるかを議論する場です。
              学生の視点を持ち寄り、新しい宇宙利用の可能性を考えます。
            </p>
            <p>
              受託開発や企業向けコンサルティングではありません。成果を保証する事業でもなく、
              あくまで「議論・検討する場」として、参加団体それぞれの関心から出発します。
            </p>
          </div>
        </div>
      </section>

      {/* なぜ行うのか */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="WHY" title="なぜ行うのか" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: '視点を持ち寄る', d: '異なる専門や活動を持つ学生団体が集まることで、一つの分野だけでは生まれない発想が生まれます。' },
              { t: '宇宙利用の裾野を広げる', d: '「自分たちの活動に宇宙をどう活かせるか」を考えることが、新しい関わり方の入口になります。' },
              { t: '学生の主体性を大切にする', d: '答えを与えるのではなく、学生自身が議論し検討するプロセスそのものを重視します。' },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-surface p-8">
                <h3 className="text-lg font-bold text-foreground">{c.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 現在のテーマ（テーマ例） */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading
            labelEn="THEMES"
            title="議論のテーマ例"
            description="以下は想定されるテーマの例です。実施状況はワーキンググループ一覧をご確認ください。"
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {wgThemeExamples.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discussion / Session + 一覧（参加学生団体・成果） */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading
            labelEn="WORKING GROUPS"
            title="ワーキンググループ一覧"
            description="議論中・募集中・終了のステータスで絞り込めます。各WGの参加団体・議論内容・成果物を掲載しています。"
          />
          <div className="mt-8">
            <WgTabs workingGroups={workingGroups} />
          </div>
        </div>
      </section>

      {/* 参加について */}
      <section className="bg-navy py-16 text-center text-navy-foreground md:py-20">
        <div className="container-fsif">
          <span className="section-label text-accent-blue">JOIN A WORKING GROUP</span>
          <h2 className="mt-3 text-balance text-2xl font-bold text-white md:text-3xl">議論に加わりませんか。</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/80">
            学生団体としての参加も、個人としての参加も歓迎です。まずはお気軽にご相談ください。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/join" variant="primary">参加を相談する</CtaLink>
            <CtaLink href="/contact" variant="secondary" onDark>お問い合わせ</CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
