'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { getPublishedPartners, cosmoPartnerTypes, type CosmoPartnerType } from '@/lib/data/cosmobase'
import { cn } from '@/lib/utils'

export function CosmoPartnersList() {
  const all = useMemo(() => getPublishedPartners(), [])
  const [filter, setFilter] = useState<CosmoPartnerType | 'all'>('all')

  // Only show category chips that actually have partners.
  const availableTypes = useMemo(
    () => cosmoPartnerTypes.filter((t) => all.some((p) => p.type === t)),
    [all],
  )

  const filtered = filter === 'all' ? all : all.filter((p) => p.type === filter)

  return (
    <div>
      {/* Count summary: total vs filtered */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <p className="text-sm text-muted-foreground">
          全 <span className="font-mono font-bold text-foreground">{all.length}</span> 団体
          {filter !== 'all' && (
            <>
              {' '}／ 絞り込み <span className="font-mono font-bold text-foreground">{filtered.length}</span> 団体
            </>
          )}
        </p>
      </div>

      {/* Filter chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
          className={cn(
            'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
            filter === 'all'
              ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
              : 'border-border bg-surface text-muted-foreground hover:border-fsif-blue/40 hover:text-fsif-blue',
          )}
        >
          すべて
        </button>
        {availableTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilter(t)}
            aria-pressed={filter === t}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === t
                ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
                : 'border-border bg-surface text-muted-foreground hover:border-fsif-blue/40 hover:text-fsif-blue',
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid / empty state */}
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-border bg-surface p-12 text-center">
          <p className="text-muted-foreground">該当するパートナーがありません。</p>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className="mt-4 text-sm font-medium text-fsif-blue hover:text-[#0057c4]"
          >
            条件をクリア
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id} className="flex flex-col rounded-xl border border-border bg-surface p-6">
              <div className="flex h-20 items-center justify-center rounded-lg bg-pale-blue p-4">
                {p.logo ? (
                  <div className="relative h-full w-full">
                    <Image src={p.logo} alt={`${p.name} ロゴ`} fill className="object-contain" sizes="200px" />
                  </div>
                ) : (
                  <span className="text-center font-mono text-sm font-medium text-muted-foreground">{p.name}</span>
                )}
              </div>
              <span className="mt-4 inline-flex w-fit rounded-full bg-pale-blue px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide text-fsif-blue">
                {p.type}
              </span>
              <h3 className="mt-2 font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue hover:text-[#0057c4]"
                >
                  公式サイト
                  <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <span className="mt-4 text-xs text-muted-foreground">公式サイト準備中</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
