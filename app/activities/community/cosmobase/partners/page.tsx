import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { CtaLink } from '@/components/ui/cta-link'
import { CosmoPartnersList } from '@/components/cosmobase/partners-list'

const title = 'Cosmo Base パートナー一覧'
const description = 'Cosmo Baseを支える企業・団体・学生団体・研究機関などのパートナー一覧。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function CosmoPartnersPage() {
  return (
    <>
      <PageHero
        labelEn="PARTNERS"
        title="Cosmo Base パートナー"
        description="Cosmo Baseの活動は、多くの企業・団体・学生団体・研究機関の協力に支えられています。カテゴリで絞り込んでご覧いただけます。"
        breadcrumbs={[
          { label: 'ACTIVITIES', href: '/activities' },
          { label: 'コミュニティ事業', href: '/activities/community' },
          { label: 'Cosmo Base', href: '/activities/community/cosmobase' },
          { label: 'Partners' },
        ]}
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <p className="mb-8 rounded-lg border border-dashed border-border bg-pale-blue/40 px-4 py-3 text-sm text-muted-foreground">
            ※ 現在表示されているパートナーは実データ確認前の仮素材です。公開前に正式なロゴ・名称・URLへ差し替えます。
          </p>
          <CosmoPartnersList />
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-navy py-16 text-center text-navy-foreground md:py-20">
        <div className="container-fsif">
          <h2 className="text-balance text-2xl font-bold text-white md:text-3xl">連携について相談する</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/80">
            Cosmo Baseと一緒に、宇宙を身近にする取り組みを進めませんか。ご連携のご相談をお待ちしています。
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href="/contact">連携を相談する</CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
