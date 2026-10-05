import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { CtaLink } from '@/components/ui/cta-link'
import { pageOpenGraph } from '@/lib/site-url'

// FSIF の HP の Ohsumi の紹介。詳しい説明・申込・ログインは、Ohsumi のサイト(ohsumi.fsif.jp)に任せる
const OHSUMI_URL = 'https://ohsumi.fsif.jp'

const title = 'Ohsumi'
const description =
  '仕事を進めるほど、組織が見えてくる。仕事を中心に、人・プロジェクト・組織・知識をつなぐ、FSIF 発の組織運営プラットフォーム「Ohsumi」。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description, '/images/ohsumi-team.png'),
}

const problems = [
  { title: '誰が何をしているか見えない', description: '人が増えるほど、担当や進み具合、確認待ちの仕事が見えにくくなります。' },
  { title: '経験が人と一緒に抜けていく', description: '代替わりや卒業のたびに、仕事のやり方や判断の理由が失われます。' },
  { title: '任せる相手を決める材料がない', description: '誰がどんなスキルや経験を持っているかが分からず、仕事が一部の人に偏ります。' },
  { title: '頑張りが成長として残らない', description: 'タスクを終えても、その経験がスキルや次の挑戦につながりません。' },
]

const axes = [
  {
    en: 'WORK',
    ja: '仕事を進める',
    d: 'タスクの担当・期限・確認待ちを、一覧・カンバン・カレンダー・ガントで見える化。承認や確認の流れも、そのまま記録に残ります。',
  },
  {
    en: 'PEOPLE',
    ja: '人を知る',
    d: '完了した仕事が、一人ひとりのスキルと経験として積み上がります。仕事を任せる前の判断の材料がそろいます。',
  },
  {
    en: 'ORGANIZATION',
    ja: '組織に残す',
    d: '成果物・振り返り・判断の記録が組織に残り、代替わりの後も次の担当者の手がかりになります。',
  },
]

const features = [
  { name: 'タスク管理', description: '登録・承認・担当・確認までの流れを一つに。表示は一覧・カンバン・カレンダー・ガントから選べます。' },
  { name: 'スキルと経験', description: '完了したタスクがスキルの点数になり、レベルとして積み上がります。基準は団体ごとに決められます。' },
  { name: '人材の情報', description: 'メンバーのスキル・やりたいこと・経験を、必要な人が必要な範囲で確認できます。' },
  { name: '通知', description: 'Discord・Slack・メールで、確認の依頼や期限の知らせを受け取れます。' },
  { name: '日報・週報、申請', description: '日報・週報、経費の申請、申請フォームとその承認を、同じ場所で扱えます。' },
  { name: '安全とバックアップ', description: 'データは各団体の Google アカウントの中に保存。毎日のバックアップから戻せます。' },
]

export default function OhsumiPage() {
  return (
    <>
      <PageHero
        labelEn="PRODUCT / OHSUMI"
        title="Ohsumi"
        description="仕事を進めるほど、組織が見えてくる。"
        breadcrumbs={[{ label: 'PRODUCT', href: '/product' }, { label: 'Ohsumi' }]}
      />

      {/* Ohsumi とは */}
      <section className="border-b border-border bg-background">
        <div className="container-fsif grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <Reveal>
            <span className="section-label text-fsif-blue">ABOUT OHSUMI</span>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-snug text-foreground md:text-3xl">
              仕事を中心に、人・プロジェクト・組織・知識をつなぐ。
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ohsumi(オオスミ)は、日々の実務を組織の成長データへ変える組織運営プラットフォームです。タスクの遂行の記録・スキル・一人ひとりの成長を、一つの流れとして扱います。
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              FSIF 自身の運営から生まれ、同じ課題を抱える学生団体・プロジェクト型の組織への提供を始めています。
            </p>
            <div className="mt-6">
              <a
                href={OHSUMI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fsif-blue underline underline-offset-4 hover:opacity-80"
              >
                Ohsumi の公式サイトで詳しく見る →
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/ohsumi-team.png"
                alt="Ohsumi を活用するチーム"
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
              学生を中心に多くのメンバーが関わる FSIF の運営では、「誰が何をしているか」「何が確認待ちか」が見えにくくなる場面が多くありました。
            </p>
            <p>
              既存のツールでは、タスクの完了は追えても、その先の「誰が、何を通じて成長したか」までは扱えません。ならば自分たちでつくろう——それが Ohsumi の出発点です。
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
            description="人が増えるほど生まれる「見えない停滞」を、仕事の記録から解きほぐします。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-bold text-foreground">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / PEOPLE / ORGANIZATION */}
      <section className="border-b border-border bg-surface">
        <div className="container-fsif py-16 md:py-24">
          <SectionHeading
            labelEn="WORK & PEOPLE PLATFORM"
            title="仕事を進めるほど、組織のデータが育つ"
            description="仕事・人・組織を分断させず、ひとつの流れとしてつなぎます。"
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

      {/* 主な機能 */}
      <section className="border-b border-border bg-background">
        <div className="container-fsif py-16 md:py-20">
          <SectionHeading labelEn="KEY FEATURES" title="主な機能" />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.name} className="flex gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fsif-blue" aria-hidden />
                <div>
                  <p className="font-bold text-foreground">{f.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            機能・料金・提供の条件の詳しい説明は、
            <a href={OHSUMI_URL} target="_blank" rel="noopener noreferrer" className="mx-1 font-medium text-fsif-blue underline underline-offset-2">
              Ohsumi の公式サイト
            </a>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* FSIF での利用 */}
      <section className="border-b border-border bg-surface">
        <div className="container-fsif grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/ohsumi-team.png" alt="Ohsumi を活用するチーム" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading labelEn="IN USE" title="日々の運営に、自然になじむ。" />
            <div className="mt-6 space-y-5 leading-[1.9] text-muted-foreground">
              <p>
                タスクを起点に、担当・スキル・経験が一つの画面でつながる。だから「次に誰へ任せるか」を考える材料がそろいます。
              </p>
              <p>FSIF では、新メンバーの受け入れから日々の進行管理まで、Ohsumi を実際の運営に使っています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入について */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-fsif py-16 text-center md:py-20">
          <Reveal>
            <span className="section-label text-accent-blue">GET STARTED</span>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-snug text-white md:text-3xl">
              あなたの組織でも、Ohsumi を。
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-foreground/75">
              提供の条件・申込・導入のご相談は、Ohsumi の公式サイトで受け付けています。FSIF での運用の知見とあわせてご案内します。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={OHSUMI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-lg bg-white px-6 text-sm font-semibold text-navy hover:opacity-90"
              >
                Ohsumi の公式サイトへ
              </a>
              <CtaLink href={OHSUMI_URL + '/contact'}>導入を相談する</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
