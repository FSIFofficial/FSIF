import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/shared/page-hero'
import { SearchClient } from '@/components/search/search-client'

export const metadata: Metadata = {
  title: 'サイト内検索 | FSIF',
  description: 'FSIFサイト内のニュース・読み物・プロジェクト・イベント・ページを横断検索します。',
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams

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
            <SearchClient initialQuery={q ?? ''} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
