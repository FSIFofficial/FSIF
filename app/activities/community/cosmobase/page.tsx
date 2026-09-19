import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { NewsCard } from '@/components/shared/news-card'
import { CosmoContentCards } from '@/components/cosmobase/content-cards'
import { CosmoPartnerCarousel } from '@/components/cosmobase/partner-carousel'
import { fetchCosmoPartners } from '@/lib/data/cosmobase-partners'
import { news } from '@/lib/data/news'
import { externalUrls } from '@/lib/data/site'

const title = 'Cosmo Base'
const description =
  'FSIFがコミュニティ事業として運営する宇宙コミュニティ Cosmo Base。学ぶ・つながる・体験するを通じて、誰もが宇宙に参加できる場をつくります。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

const pillars = [
  { en: 'LEARN', ja: '学ぶ', d: '勉強会や講座で、宇宙の基礎から最新動向までを学びます。' },
  { en: 'CONNECT', ja: 'つながる', d: 'ミートアップで、立場や地域を越えた仲間とつながります。' },
  { en: 'EXPERIENCE', ja: '体験する', d: 'ワークショップや制作を通じて、手を動かして宇宙を体験します。' },
]

const relatedNews = news
  .filter((n) => n.relatedArea === 'community' || n.relatedTag === 'cosmobase')
  .slice(0, 3)

export default async function CosmoBasePage() {
  const officialUrl = externalUrls.cosmoBaseOfficial
  const partners = await fetchCosmoPartners()

  return (
    <>
      {/* HERO */}
      <PageHero
        labelEn="COMMUNITY / COSMO BASE"
        title="宇宙への一歩を、ここから。"
        description="学ぶ・つながる・体験する。FSIFがコミュニティ事業として運営する宇宙コミュニティ、それがCosmo Baseです。"
        breadcrumbs={[
          { label: 'ACTIVITIES', href: '/activities' },
          { label: 'コミュニティ事業', href: '/activities/community' },
          { label: 'Cosmo Base' },
        ]}
        image="/images/cosmobase.png"
        imageAlt="Cosmo Baseの活動"
      />
      <section className="bg-[#000033]">
        <div className="container-fsif flex flex-wrap items-center justify-between gap-6 py-8">
          <Image
            src="/CB/CosmoBase.png"
            alt="Cosmo Base"
            width={1658}
            height={348}
            className="h-12 w-auto"
          />
          <CtaLink href={officialUrl} variant="secondary" onDark external>
            Cosmo Base公式サイト
          </CtaLink>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading labelEn="ABOUT" title="Cosmo Baseとは" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              宇宙に興味を持っても、専門知識や人脈がないと関わりにくい——。Cosmo Baseは、その壁をなくすためにFSIFが運営する
              コミュニティ事業です。知識のあるなしにかかわらず、誰もが安心して参加できる入口をつくっています。
            </p>
            <p>
              肯定を土台にした場だからこそ、「わからない」を素直に言える。その積み重ねが、一人ひとりの宇宙との距離を縮めていきます。
            </p>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="CONCEPT" title="学ぶ・つながる・体験する" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.en} className="rounded-xl border border-border bg-surface p-8">
                <span className="section-label text-fsif-blue">{p.en}</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{p.ja}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading
            labelEn="CONTENTS"
            title="提供コンテンツ"
            description="Cosmo Baseが届ける、宇宙を身近にするコンテンツ。ロゴ・公開状況は順次更新します。"
          />
          <CosmoContentCards />
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/workshop.png"
              alt="Cosmo Baseのワークショップ"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading labelEn="ACTIVITY" title="コミュニティの広がり" />
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {[
                { v: '1,500+', l: 'コンテンツ利用者数' },
                { v: '10+', l: '開催イベント' },
                { v: '150+', l: '参加者数' },
                { v: String(partners.length), l: 'パートナー数' },
              ].map((s) => (
                <div key={s.l} className="border-t-2 border-fsif-blue pt-4">
                  <dd className="font-mono text-3xl font-bold text-navy">{s.v}</dd>
                  <dt className="mt-2 text-sm text-muted-foreground">{s.l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PARTNERS carousel */}
      <section className="border-y border-border bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="PARTNERS" title="Cosmo Baseを支えるパートナー" />
          <div className="mt-10">
            <CosmoPartnerCarousel partners={partners} />
          </div>
        </div>
      </section>

      {/* NEWS */}
      {relatedNews.length > 0 && (
        <section className="bg-background py-16 md:py-20">
          <div className="container-fsif">
            <SectionHeading labelEn="NEWS" title="Cosmo Base 関連ニュース" />
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JOIN COSMO BASE */}
      <section className="bg-navy py-16 text-center text-navy-foreground md:py-20">
        <div className="container-fsif">
          <span className="section-label text-accent-blue">JOIN COSMO BASE</span>
          <h2 className="mt-3 text-balance text-2xl font-bold text-white md:text-3xl">Cosmo Baseに参加する</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/80">
            公式サイトから、最新のイベント情報や参加方法をご確認いただけます。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href={officialUrl} variant="secondary" onDark external>
              Cosmo Base公式サイト
            </CtaLink>
            <CtaLink href="/join" variant="secondary" onDark>
              FSIFに参加する
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
