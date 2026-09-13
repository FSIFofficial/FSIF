import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { NewsExplorer } from '@/components/news/news-explorer'

export const metadata: Metadata = {
  title: 'ニュース',
  description: 'FSIF（未来宇宙産業フォーラム）の最新ニュース、プレスリリース、イベント情報、パートナーシップのお知らせ。',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        labelEn="NEWS"
        title="ニュース"
        description="FSIFに起きた出来事を、プレスリリース・イベント・パートナーシップなどのカテゴリでお届けします。"
        breadcrumbs={[{ label: 'NEWS' }]}
      />
      <div className="container-fsif py-16 md:py-20">
        <Suspense fallback={<p className="text-muted-foreground">読み込み中...</p>}>
          <NewsExplorer />
        </Suspense>
      </div>
    </>
  )
}
