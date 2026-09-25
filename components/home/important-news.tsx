'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { NewsItem } from '@/lib/types'
import { CategoryTag } from '@/components/shared/news-card'
import { formatDate } from '@/lib/utils'

export function ImportantNews({ items }: { items: NewsItem[] }) {
  const [index, setIndex] = useState(0)
  const total = items.length

  useEffect(() => {
    if (total < 2) return
    const t = setInterval(() => setIndex((v) => (v + 1) % total), 5000)
    return () => clearInterval(t)
  }, [total])

  if (total === 0) return null

  return (
    <section aria-label="重要なお知らせ" className="border-b border-border bg-surface">
      <div className="container-wide flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-6">
        <span className="section-label shrink-0 text-fsif-blue">IMPORTANT NEWS</span>
        <div className="relative min-h-[3rem] flex-1 sm:min-h-0">
          {items.map((item, i) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              aria-hidden={i !== index}
              tabIndex={i === index ? 0 : -1}
              className="group flex items-center gap-3 transition-opacity duration-500 data-[hidden=true]:pointer-events-none data-[hidden=true]:absolute data-[hidden=true]:inset-0 data-[hidden=true]:opacity-0"
              data-hidden={i !== index}
            >
              <time className="hidden font-mono text-xs text-muted-foreground sm:block" dateTime={item.date}>
                {formatDate(item.date)}
              </time>
              <CategoryTag category={item.category} />
              <span className="line-clamp-1 flex-1 text-sm text-foreground transition-colors group-hover:text-fsif-blue">
                {item.title}
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-fsif-blue" />
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          {items.map((item, i) => (
            <button
              key={item.slug}
              onClick={() => setIndex(i)}
              aria-label={`お知らせ ${i + 1}`}
              className={`size-2 rounded-full transition-colors ${i === index ? 'bg-fsif-blue' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
