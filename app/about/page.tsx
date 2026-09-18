import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { CountUp } from '@/components/ui/count-up'
import { homeStats, activities } from '@/lib/data/home'

const title = 'FSIFについて'
const description = '未来宇宙産業フォーラム（FSIF）の設立背景、解決したい課題、事業領域、理念、沿革をご紹介します。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

const aboutLinks = [
  { label: '理念', en: 'PHILOSOPHY', href: '/about/philosophy', desc: 'Mission・Vision・Value・Purpose' },
  { label: '代表メッセージ', en: 'MESSAGE', href: '/about/message', desc: '代表が描く宇宙とのかかわり方' },
  { label: '経営・執行メンバー', en: 'LEADERSHIP', href: '/about/leadership', desc: '組織を動かすリーダーたち' },
  { label: '組織図', en: 'ORGANIZATION', href: '/about/organization', desc: '代表から4事業までの体制' },
  { label: '組織概要', en: 'PROFILE', href: '/about/profile', desc: '名称・設立・拠点・連絡先' },
  { label: '沿革', en: 'HISTORY', href: '/about/history', desc: '2023年からの歩み' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        labelEn="ABOUT FSIF"
        title="宇宙への入口を、さまざまな形でつくる。"
        description="未来宇宙産業フォーラム（FSIF）は、すべての人に宇宙とかかわる選択肢をつくる組織です。"
        breadcrumbs={[{ label: 'ABOUT' }]}
        image="/images/about-collab.png"
        imageAlt="議論するFSIFのメンバー"
      />

      {/* Intro */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading labelEn="WHO WE ARE" title="宇宙を、一部の人のものにしない。" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              宇宙産業は、国家機関だけでなく民間企業やスタートアップ、大学、そして学生まで、関わる主体が急速に広がっています。
              一方で、「どう関わればいいか分からない」という声はいまも数多くあります。
            </p>
            <p>
              FSIFは、この「入口の少なさ」という課題に向き合う組織です。学ぶ・つながる・体験するという複数の入口を用意し、
              企業・行政・研究機関・大学・学生・一般の人が、それぞれの距離感で宇宙とかかわれる選択肢を社会に増やしています。
            </p>
            <p>
              私たちが大切にするのは、専門性と親しみやすさの両立。難しいことを正確に、はじめての人にも開かれた言葉で伝える
              「一番身近な宇宙の専門家」であり続けます。
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="THE CHALLENGE" title="私たちが解決したい課題" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: '関わり方が見えない', d: '宇宙に関心はあっても、どこから始めればよいか分からず一歩を踏み出せない。' },
              { t: '立場を越えた場が少ない', d: '企業・研究機関・大学・学生が対等に出会い、共創できる場が限られている。' },
              { t: '専門知が閉じている', d: '専門的な情報が一部にとどまり、社会全体に開かれていない。' },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-lg font-bold text-foreground">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business areas */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading labelEn="BUSINESS AREAS" title="4つの事業領域" />
            <CtaLink href="/activities" variant="text" className="pb-1">事業一覧を見る</CtaLink>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {activities.map((a) => (
              <li key={a.id}>
                <Link href={a.href} className="group flex items-center gap-4 py-5 md:gap-8">
                  <span className="font-mono text-sm font-bold text-fsif-blue">{a.number}</span>
                  <div className="min-w-0 flex-1">
                    <span className="section-label text-muted-foreground">{a.labelEn}</span>
                    <h3 className="mt-0.5 text-lg font-bold text-foreground transition-colors group-hover:text-fsif-blue">
                      {a.labelJa}
                    </h3>
                  </div>
                  <p className="hidden max-w-md text-sm text-muted-foreground md:block">{a.description}</p>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-fsif-blue" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-navy py-16 text-navy-foreground md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="FSIF IN NUMBERS" title="数字で見るFSIF" onDark />
          <dl className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {homeStats.map((s) => (
              <div key={s.labelEn} className="border-t-2 border-accent-blue pt-4">
                <dd className="font-mono text-3xl font-bold text-white md:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} noSeparator={s.noSeparator} />
                </dd>
                <dt className="mt-2 text-sm text-navy-foreground/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About nav grid */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="MORE ABOUT US" title="FSIFをもっと知る" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-fsif-blue"
              >
                <span className="section-label text-fsif-blue">{l.en}</span>
                <h3 className="mt-2 flex items-center justify-between text-lg font-bold text-foreground">
                  {l.label}
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-fsif-blue" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
