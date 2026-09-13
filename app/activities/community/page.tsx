import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { NewsCard } from '@/components/shared/news-card'
import { news } from '@/lib/data/news'

export const metadata: Metadata = {
  title: 'コミュニティ事業',
  description: '学ぶ・つながる・体験する。誰もが参加できる宇宙コミュニティを運営するFSIFのコミュニティ事業。',
}

const relatedNews = news.filter((n) => n.relatedArea === 'community').slice(0, 3)

export default function CommunityPage() {
  return (
    <>
      <PageHero
        labelEn="COMMUNITY"
        title="誰もが参加できる、宇宙コミュニティ。"
        description="学ぶ・つながる・体験する。立場や専攻を越えて、宇宙に関心のある人が集う場をつくります。"
        breadcrumbs={[{ label: 'ACTIVITIES', href: '/activities' }, { label: 'コミュニティ事業' }]}
        image="/images/cosmobase.png"
        imageAlt="コミュニティの活動"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading labelEn="ABOUT" title="コミュニティ事業とは" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              宇宙に興味はあっても、「どこから始めればいいか分からない」という声は少なくありません。
              専門的なコミュニティは敷居が高く、はじめの一歩を踏み出しにくいのが現状です。
            </p>
            <p>
              コミュニティ事業は、この入口の課題に向き合います。知識がなくても、専攻が違っても参加でき、
              学び合い、つながり、体験できる場を継続的に運営しています。
            </p>
          </div>
        </div>
      </section>

      {/* 運営コミュニティ: Cosmo Base */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="OUR COMMUNITY" title="FSIFが運営するコミュニティ" />
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image src="/images/cosmobase.png" alt="Cosmo Base" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <span className="font-mono text-sm font-bold text-fsif-blue">Cosmo Base</span>
              <h3 className="mt-2 text-2xl font-bold text-foreground">宇宙への一歩を、ここから。</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cosmo Baseは、宇宙に興味を持つ人が「学ぶ・つながる・体験する」ことのできる、FSIF運営のコミュニティです。
                宇宙に詳しい人だけでなく、これから関わりたい人にとっても参加しやすい入口を提供しています。
              </p>
              <div className="mt-8">
                <CtaLink href="/activities/community/cosmobase" variant="primary">Cosmo Baseを見る</CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 提供価値 */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="OUR VALUE" title="提供価値" />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { t: '学ぶ', d: '勉強会や講座を通じて、専門知識がなくても宇宙の「いま」を学べます。' },
              { t: 'つながる', d: '立場や専攻を越えて、宇宙に関心のある人同士がつながれます。' },
              { t: '体験する', d: 'ミートアップや体験プログラムで、宇宙を身近に感じられます。' },
            ].map((v) => (
              <li key={v.t} className="rounded-xl border border-border bg-background p-6">
                <h3 className="text-lg font-bold text-foreground">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="ACHIEVEMENTS" title="活動実績" />
          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { v: '1,000+', l: 'コミュニティ総回答者' },
              { v: '30+', l: '開催した勉強会・イベント' },
              { v: '10+', l: '連携パートナー' },
              { v: '80+', l: '参加メンバー' },
            ].map((s) => (
              <div key={s.l} className="border-t-2 border-fsif-blue pt-4">
                <dd className="font-mono text-3xl font-bold text-navy">{s.v}</dd>
                <dt className="mt-2 text-sm text-muted-foreground">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related news */}
      {relatedNews.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-fsif">
            <SectionHeading labelEn="RELATED NEWS" title="関連ニュース" />
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy py-16 text-center text-navy-foreground md:py-20">
        <div className="container-fsif">
          <h2 className="text-balance text-2xl font-bold text-white md:text-3xl">
            宇宙コミュニティに参加しませんか。
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/80">
            はじめての方も歓迎です。あなたのペースで、宇宙とのかかわり方を見つけてください。
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <CtaLink href="/join" variant="primary">参加する</CtaLink>
            <CtaLink href="/activities/community/cosmobase" variant="secondary" onDark>Cosmo Baseを見る</CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
