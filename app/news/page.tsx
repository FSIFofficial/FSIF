import { Suspense } from 'react'
import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { NewsExplorer } from '@/components/news/news-explorer'
import { fetchNews } from '@/lib/data/news'

const title = 'ニュース'
const description = 'FSIF（未来宇宙産業フォーラム）の最新ニュース、プレスリリース、イベント情報、パートナーシップのお知らせ。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default async function NewsPage() {
  const news = await fetchNews()

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
          <NewsExplorer initialNews={news} />
        </Suspense>
      </div>
    </>
  )
}
