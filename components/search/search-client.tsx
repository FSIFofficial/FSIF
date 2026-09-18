'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Search as SearchIcon, ArrowRight } from 'lucide-react'
import { searchDocs, type SearchType } from '@/lib/data/search'
import { formatDate, cn } from '@/lib/utils'

const typeStyles: Record<SearchType, string> = {
  ニュース: 'bg-fsif-blue/10 text-fsif-blue',
  プロダクト: 'bg-emerald-100 text-emerald-700',
  イベント: 'bg-violet-100 text-violet-700',
  ページ: 'bg-muted text-muted-foreground',
}

const suggestions = ['Orbit', 'シンポジウム', 'コミュニティ', '参加', '理念']

export function SearchClient() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const results = useMemo(() => searchDocs(query), [query])
  const trimmed = query.trim()

  return (
    <div>
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          placeholder="キーワードを入力（例：Orbit、シンポジウム）"
          aria-label="サイト内検索"
          className="w-full rounded-full border border-border bg-background py-4 pl-12 pr-5 text-base text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-fsif-blue focus:ring-2 focus:ring-fsif-blue/20"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-muted-foreground">よく検索される:</span>
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setQuery(s)}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {!trimmed ? (
          <p className="text-sm text-muted-foreground">
            キーワードを入力すると、ニュース・プロジェクト・イベント・ページを横断して検索します。
          </p>
        ) : results.length === 0 ? (
          <div className="rounded-2xl border border-border bg-secondary p-8 text-center">
            <p className="font-medium text-foreground">
              「{trimmed}」に一致する結果は見つかりませんでした。
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              別のキーワードでお試しください。
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              「{trimmed}」の検索結果：
              <span className="font-semibold text-foreground"> {results.length}</span> 件
            </p>
            <ul className="mt-5 divide-y divide-border">
              {results.map((doc) => (
                <li key={`${doc.type}-${doc.href}-${doc.title}`}>
                  <Link
                    href={doc.href}
                    className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'rounded-full px-2 py-0.5 text-[0.7rem] font-semibold',
                            typeStyles[doc.type],
                          )}
                        >
                          {doc.type}
                        </span>
                        {doc.date && (
                          <span className="font-mono text-xs tabular-nums text-muted-foreground">
                            {formatDate(doc.date)}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-pretty font-bold text-foreground transition-colors group-hover:text-fsif-blue">
                        {doc.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {doc.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 hidden size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-fsif-blue sm:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
