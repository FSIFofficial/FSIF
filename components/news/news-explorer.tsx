'use client'

import { useCallback, useMemo, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { newsCategories } from '@/lib/data/news'
import type { BusinessArea, NewsCategory, NewsItem } from '@/lib/types'
import { NewsCard } from '@/components/shared/news-card'
import { cn } from '@/lib/utils'

const areaLabels: Record<BusinessArea, string> = {
  community: 'コミュニティ',
  'working-group': 'ワーキンググループ',
  event: 'イベント',
  thinktank: 'シンクタンク',
}

/** 4事業とは別に保持する関連タグ（Orbitを第5の事業に戻さないための区分）。 */
const tagLabels: Record<string, string> = {
  cosmobase: 'Cosmo Base',
  orbit: 'Orbit',
}

const PER_PAGE = 6

export function NewsExplorer({ initialNews }: { initialNews: NewsItem[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [keyword, setKeyword] = useState(searchParams.get('q') ?? '')
  const [categories, setCategories] = useState<NewsCategory[]>(
    (searchParams.get('cat')?.split(',').filter(Boolean) as NewsCategory[]) ?? [],
  )
  const [year, setYear] = useState(searchParams.get('year') ?? '')
  const [month, setMonth] = useState(searchParams.get('month') ?? '')
  const [area, setArea] = useState(searchParams.get('area') ?? '')
  const [page, setPage] = useState(Number(searchParams.get('page') ?? '1'))
  const [showFilters, setShowFilters] = useState(false)

  const years = useMemo(
    () => Array.from(new Set(initialNews.map((n) => n.date.slice(0, 4)))).sort().reverse(),
    [initialNews],
  )
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  // Sync state to URL
  useEffect(() => {
    const params = new URLSearchParams()
    if (keyword) params.set('q', keyword)
    if (categories.length) params.set('cat', categories.join(','))
    if (year) params.set('year', year)
    if (month) params.set('month', month)
    if (area) params.set('area', area)
    if (page > 1) params.set('page', String(page))
    const qs = params.toString()
    router.replace(qs ? `/news?${qs}` : '/news', { scroll: false })
  }, [keyword, categories, year, month, area, page, router])

  const toggleCategory = (cat: NewsCategory) => {
    setPage(1)
    setCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  const filtered = useMemo(() => {
    return initialNews
      .filter((n) => {
        if (keyword) {
          const hay = `${n.title} ${n.excerpt} ${n.lead}`.toLowerCase()
          if (!hay.includes(keyword.toLowerCase())) return false
        }
        if (categories.length && !categories.includes(n.category)) return false
        if (year && n.date.slice(0, 4) !== year) return false
        if (month && n.date.slice(5, 7) !== month) return false
        if (area) {
          if (area in tagLabels) {
            if (n.relatedTag !== area) return false
          } else if (n.relatedArea !== area) {
            return false
          }
        }
        return true
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [initialNews, keyword, categories, year, month, area])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  const hasFilters = keyword || categories.length || year || month || area
  const clearAll = useCallback(() => {
    setKeyword('')
    setCategories([])
    setYear('')
    setMonth('')
    setArea('')
    setPage(1)
  }, [])

  const selectClass =
    'rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-fsif-blue focus:outline-none'

  return (
    <div>
      {/* Search + filter toggle */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value)
              setPage(1)
            }}
            placeholder="キーワードで検索"
            aria-label="ニュースをキーワードで検索"
            className="w-full rounded-md border border-border bg-surface py-2.5 pl-10 pr-4 text-sm focus:border-fsif-blue focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          aria-expanded={showFilters}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-fsif-blue"
        >
          <SlidersHorizontal className="size-4" />
          絞り込み
          {hasFilters && <span className="ml-1 size-2 rounded-full bg-fsif-blue" />}
        </button>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="mt-4 rounded-xl border border-border bg-surface p-5">
          <fieldset>
            <legend className="section-label text-muted-foreground">CATEGORY</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {newsCategories.map((cat) => {
                const active = categories.includes(cat)
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      'rounded-full border px-3 py-1.5 font-mono text-xs transition-colors',
                      active
                        ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
                        : 'border-border text-muted-foreground hover:border-fsif-blue hover:text-fsif-blue',
                    )}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="mt-5 flex flex-wrap gap-3">
            <label className="flex flex-col gap-1.5">
              <span className="section-label text-muted-foreground">YEAR</span>
              <select value={year} onChange={(e) => { setYear(e.target.value); setPage(1) }} className={selectClass}>
                <option value="">すべて</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}年</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="section-label text-muted-foreground">MONTH</span>
              <select value={month} onChange={(e) => { setMonth(e.target.value); setPage(1) }} className={selectClass}>
                <option value="">すべて</option>
                {months.map((m) => (
                  <option key={m} value={m}>{Number(m)}月</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="section-label text-muted-foreground">RELATED</span>
              <select value={area} onChange={(e) => { setArea(e.target.value); setPage(1) }} className={selectClass}>
                <option value="">すべての事業</option>
                <optgroup label="事業">
                  {Object.entries(areaLabels).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </optgroup>
                <optgroup label="関連タグ">
                  {Object.entries(tagLabels).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </optgroup>
              </select>
            </label>
          </div>
        </div>
      )}

      {/* Result meta */}
      <div className="mt-6 flex items-center justify-between gap-4 border-b border-border pb-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-mono text-lg font-bold text-foreground">{filtered.length}</span> 件のニュース
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-sm text-fsif-blue transition-colors hover:text-[#0057c4]"
          >
            <X className="size-4" />
            検索条件をクリア
          </button>
        )}
      </div>

      {/* Results */}
      {pageItems.length > 0 ? (
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-foreground">該当するニュースが見つかりませんでした。</p>
          <p className="mt-2 text-sm text-muted-foreground">検索条件を変更してお試しください。</p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-fsif-blue hover:text-fsif-blue"
          >
            条件をクリア
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="ページネーション" className="mt-14 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              aria-current={p === currentPage ? 'page' : undefined}
              className={cn(
                'flex size-10 items-center justify-center rounded-md font-mono text-sm transition-colors',
                p === currentPage
                  ? 'bg-fsif-blue text-primary-foreground'
                  : 'border border-border text-foreground hover:border-fsif-blue hover:text-fsif-blue',
              )}
            >
              {p}
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
