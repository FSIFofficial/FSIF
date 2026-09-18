import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { LeadershipGrid } from '@/components/about/leadership-grid'

const title = '経営・執行メンバー'
const description = 'FSIFの組織を動かす代表・執行メンバーをご紹介します。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        labelEn="LEADERSHIP"
        title="組織を動かすメンバー"
        description="FSIFを率いる代表・執行メンバー。カードを選ぶとプロフィールをご覧いただけます。"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'LEADERSHIP' }]}
      />
      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif">
          <LeadershipGrid />
        </div>
      </section>
    </>
  )
}
