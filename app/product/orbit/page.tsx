import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { CtaLink } from '@/components/ui/cta-link'
import { getProjectBySlug, orbitProblems, orbitFeatures } from '@/lib/data/projects'
import { pageOpenGraph } from '@/lib/site-url'

const title = 'Orbit'
const description =
  'タスクを打ち上げ、組織を軌道に乗せる。タスク管理・人材管理・人材育成をつなぐ、FSIF発の自主開発ツール「Orbit」。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description, '/images/orbit-team.png'),
}

const axes = [
  {
    en: 'Task Management',
    ja: 'タスク管理',
    d: 'タスクの状態・担当・期限・確認待ちを一覧で可視化。単なるToDoではなく、遂行の履歴として蓄積されます。',
  },
  {
    en: 'Talent Management',
    ja: '人材管理',
    d: 'メンバーの担当領域や要求スキルを整理し、タスクと人を適切に結びつけます。適任者の判断を支援します。',
  },
  {
    en: 'Human Development',
    ja: '人材育成',
    d: '遂行履歴から一人ひとりのスキルの伸びを可視化。成果と成長を同じ場所で扱い、次の挑戦につなげます。',
  },
]

export default function OrbitPage() {
  const project = getProjectBySlug('orbit')!

  return (
    <>
      <PageHero
        labelEn="PRODUCT / ORBIT"
        title="Orbit"
        description={project.tagline}
        breadcrumbs={[{ label: 'PRODUCT', href: '/product' }, { label: 'Orbit' }]}
      />

      {/* Orbitとは */}
      <section className="border-b border-border bg-background">
        <div className="container-fsif grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <Reveal>
            <span className="section-label text-fsif-blue">ABOUT ORBIT</span>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-snug text-foreground md:text-3xl">
              タスクを打ち上げ、組織を軌道に乗せる。
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Orbitは、遂行履歴・要求スキル・担当者の成長を一つの流れとして扱う、FSIF発の自主開発ツールです。FSIF自身の運営から生まれ、同じ課題を抱える組織への提供を想定しています。
            </p>
            <div className="mt-8">
              <CtaLink href={project.external!.href} external>
                {project.external!.label}
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 開発背景 */}
      <section className="border-b border-border bg-surface">
        <div className="container-fsif grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <SectionHeading labelEn="BACKGROUND" title="活動の現場から生まれた。" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              学生を中心に多くのメンバーが関わるFSIFの運営では、「誰が何をしているか」「何が確認待ちか」が見えにくくなる場面が多くありました。
            </p>
            <p>
              既存のツールでは、タスクの完了は追えても、その先の「誰が、何を通じて成長したか」までは扱えません。ならば自分たちでつくろう——それがOrbitの出発点です。
            </p>
          </div>
        </div>
      </section>

      {/* 解決する課題 */}
      <section className="border-b border-border bg-background">
        <div className="container-fsif py-16 md:py-24">
          <SectionHeading
            labelEn="CHALLENGES"
            title="組織運営の、よくある詰まり"
            description="人が増えるほど生まれる「見えない停滞」。Orbitはこうした課題を解きほぐします。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {orbitProblems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fsif-blue/10 text-xs font-bold text-fsif-blue"
                    >
                      !
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">{problem.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 axes: Task / Talent / Human */}
      <section className="border-b border-border bg-surface">
        <div className="container-fsif py-16 md:py-24">
          <SectionHeading
            labelEn="THREE AXES"
            title="3つの軸で、組織を支える"
            description="タスク・人材・育成を分断させず、ひとつの流れとしてつなぎます。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {axes.map((f, i) => (
              <Reveal key={f.en} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                  <span className="text-4xl font-bold tabular-nums text-fsif-blue/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{f.en}</h3>
                  <p className="text-sm font-medium text-fsif-blue">{f.ja}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 主要機能 */}
      <section className="border-b border-border bg-background">
        <div className="container-fsif py-16 md:py-20">
          <SectionHeading labelEn="KEY FEATURES" title="主要機能" />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {orbitFeatures.map((f) => (
              <li key={f.name} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fsif-blue" aria-hidden />
                <div>
                  <p className="font-bold text-foreground">
                    {f.name} <span className="text-sm font-medium text-fsif-blue">/ {f.labelJa}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* UI + 利用イメージ */}
      <section className="border-b border-border bg-surface">
        <div className="container-fsif grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/orbit-team.png" alt="Orbitを活用するチーム" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading labelEn="IN USE" title="日々の運営に、自然になじむ。" />
            <div className="mt-6 space-y-5 leading-[1.9] text-muted-foreground">
              <p>
                タスクを起点に、担当・スキル・成長が一つの画面でつながる。だから「次に誰へ任せるか」の判断もスムーズになります。
              </p>
              <p>
                FSIFでは新メンバーのオンボーディングから日々の進行管理まで、Orbitを実際の運営に活用しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入について + 公式 */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-fsif py-16 text-center md:py-20">
          <Reveal>
            <span className="section-label text-accent-blue">GET STARTED</span>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-snug text-white md:text-3xl">
              あなたの組織も、軌道に乗せませんか。
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-foreground/75">
              導入のご相談を承ります。FSIFでの運用知見とあわせてご案内します。提供条件は個別にご相談ください。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaLink href="/contact">導入を相談する</CtaLink>
              <CtaLink href={project.external!.href} variant="secondary" onDark external>
                Orbit公式ページ
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
