import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { CtaLink } from '@/components/ui/cta-link'
import { Accordion } from '@/components/ui/accordion'
import {
  canDoAreas,
  jobPositions,
  memberStories,
  joinFaqs,
  joinFlow,
} from '@/lib/data/join'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: '参加する | FSIF',
  description:
    '肯定の組織で、すべてに挑戦する。専攻や立場を問わず、宇宙産業に関わりたい仲間を募集しています。FSIFの募集ポジションと参加の流れをご紹介します。',
}

const statusStyles: Record<string, string> = {
  募集中: 'bg-fsif-blue/10 text-fsif-blue',
  若干名: 'bg-amber-100 text-amber-700',
  募集終了: 'bg-muted text-muted-foreground',
}

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="参加する"
        lead="肯定の組織で、すべてに挑戦する。あなたの「やってみたい」から、宇宙への一歩がはじまります。"
        breadcrumbs={[{ label: 'Join' }]}
      />

      {/* Intro banner */}
      <section className="border-b border-border bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <h2 className="text-balance text-2xl font-bold leading-snug tracking-tight md:text-3xl">
              専攻も、立場も、経験も問いません。
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              文系・理系、学生・社会人、宇宙が専門でなくても大丈夫。FSIFには多様なバックグラウンドの仲間が集い、それぞれの得意を持ち寄って活動しています。大切なのは「関わってみたい」という気持ちです。
            </p>
            <div className="mt-8">
              <CtaLink href="/contact">エントリーする</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
              <Image
                src="/images/join.png"
                alt="プロジェクトの完成を喜ぶメンバー"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Can-do areas */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHeading
            eyebrow="What You Can Do"
            title="FSIFでできること"
            description="関わり方は一つではありません。あなたの得意や興味から、活動をはじめられます。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {canDoAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 40}>
                <div className="h-full rounded-xl border border-border bg-secondary p-5 transition-colors hover:border-fsif-blue/40">
                  <h3 className="font-bold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="scroll-mt-[var(--header-h)] border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHeading
            eyebrow="Open Positions"
            title="募集ポジション"
            description="現在募集中の役割です。複数のポジションを兼ねることもできます。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {jobPositions.map((job, i) => (
              <Reveal key={job.slug} delay={i * 50}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-fsif-blue">{job.category}</span>
                      <h3 className="mt-1 text-lg font-bold text-foreground">{job.title}</h3>
                    </div>
                    <span
                      className={cn(
                        'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold',
                        statusStyles[job.status] ?? statusStyles['募集中'],
                      )}
                    >
                      {job.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                    <div className="flex gap-1.5">
                      <dt className="text-muted-foreground/70">稼働</dt>
                      <dd className="font-medium text-foreground">{job.commitment}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="text-muted-foreground/70">場所</dt>
                      <dd className="font-medium text-foreground">{job.location}</dd>
                    </div>
                  </dl>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground">主な役割</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {job.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-5">
                    <CtaLink href="/contact" variant="text">
                      このポジションに応募
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member stories */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHeading
            eyebrow="Member Voices"
            title="メンバーの声"
            description="さまざまな入口からFSIFに参加した、メンバーのリアルな声です。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {memberStories.map((story, i) => (
              <Reveal key={story.name} delay={i * 60}>
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-secondary">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={story.image || '/placeholder.svg'}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <figcaption className="flex flex-1 flex-col p-6">
                    <blockquote className="flex-1 text-pretty leading-relaxed text-foreground">
                      「{story.quote}」
                    </blockquote>
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="font-bold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHeading
            eyebrow="Flow"
            title="参加までの流れ"
            description="エントリーから活動開始まで、無理のないステップで進みます。"
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {joinFlow.map((f, i) => (
              <Reveal key={f.step} delay={i * 60}>
                <li className="relative h-full rounded-2xl border border-border bg-background p-6">
                  <span className="font-mono text-3xl font-bold text-fsif-blue/20">{f.step}</span>
                  <h3 className="mt-2 font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
          <SectionHeading eyebrow="FAQ" title="よくある質問" align="center" />
          <div className="mt-10">
            <Accordion
              items={joinFaqs.map((f) => ({ title: f.question, content: f.answer }))}
            />
          </div>
          <div className="mt-12 text-center">
            <CtaLink href="/contact">エントリーする</CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
