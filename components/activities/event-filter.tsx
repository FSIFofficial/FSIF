'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { events, eventTypes } from '@/lib/data/events'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function EventFilter({ excludeSlug }: { excludeSlug?: string } = {}) {
  const [type, setType] = useState<string>('ALL')

  const items = useMemo(() => {
    return events
      .filter((e) => e.slug !== excludeSlug)
      .filter((e) => (type === 'ALL' ? true : e.type === type))
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [type, excludeSlug])

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="種別で絞り込み">
        {['ALL', ...eventTypes].map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={type === t}
            onClick={() => setType(t)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              type === t
                ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-fsif-blue hover:text-fsif-blue',
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <li key={e.slug}>
            <Link href={e.href} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-pale-blue">
                <Image
                  src={e.image || '/placeholder.svg'}
                  alt={e.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-navy/85 px-2 py-1 font-mono text-[0.65rem] tracking-wide text-navy-foreground">
                  {e.type}
                </span>
              </div>
              <time className="mt-4 font-mono text-xs text-muted-foreground">{formatDate(e.date)}</time>
              <h3 className="mt-1 text-pretty font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
                {e.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.venue}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
