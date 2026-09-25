import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { Suspense } from 'react'
import { PageHero } from '@/components/shared/page-hero'
import { SearchClient } from '@/components/search/search-client'
import { buildSearchIndex } from '@/lib/data/search'
import { fetchNews } from '@/lib/data/news'

const title = 'サイト内検索'
const description = 'FSIFサイト内のニュース・プロジェクト・イベント・ページを横断検索します。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default async function SearchPage() {
  const news = await fetchNews()
  const index = buildSearchIndex(news)

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="サイト内検索"
        lead="キーワードから、FSIFの情報を横断して探せます。"
        breadcrumbs={[{ label: 'Search' }]}
      />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <Suspense>
            <SearchClient index={index} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
