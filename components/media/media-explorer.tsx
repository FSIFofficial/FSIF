'use client'

import { useMemo, useState } from 'react'
import { media, mediaCategories } from '@/lib/data/media'
import type { MediaCategory } from '@/lib/types'
import { MediaCard } from './media-card'
import { cn } from '@/lib/utils'

export function MediaExplorer({ excludeSlug }: { excludeSlug?: string }) {
  const [active, setActive] = useState<MediaCategory | 'ALL'>('ALL')

  const items = useMemo(() => {
    return media
      .filter((m) => m.slug !== excludeSlug)
      .filter((m) => (active === 'ALL' ? true : m.category === active))
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [active, excludeSlug])

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="カテゴリで絞り込み">
        <button
          role="tab"
          aria-selected={active === 'ALL'}
          onClick={() => setActive('ALL')}
          className={cn(
            'rounded-full border px-4 py-2 font-mono text-xs transition-colors',
            active === 'ALL'
              ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
              : 'border-border text-muted-foreground hover:border-fsif-blue hover:text-fsif-blue',
          )}
        >
          ALL
        </button>
        {mediaCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-2 font-mono text-xs transition-colors',
              active === cat
                ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-fsif-blue hover:text-fsif-blue',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {items.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MediaCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted-foreground">
          このカテゴリの記事はまだありません。
        </p>
      )}
    </div>
  )
}
