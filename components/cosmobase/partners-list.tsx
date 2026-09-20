'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { CosmoPartner } from '@/lib/data/cosmobase-partners'
import { cn } from '@/lib/utils'

const snsIcons = {
  twitter: {
    label: 'X (Twitter)',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  instagram: {
    label: 'Instagram',
    path: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm5.25-8.5a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34z',
  },
  facebook: {
    label: 'Facebook',
    path: 'M13.5 21.75v-8.25h2.77l.415-3.216H13.5V8.253c0-.931.259-1.566 1.594-1.566h1.703V3.808A22.8 22.8 0 0 0 14.315 3.7c-2.454 0-4.135 1.498-4.135 4.248v2.37H7.402v3.216h2.778v8.25z',
  },
} as const

export function CosmoPartnersList({ partners: all }: { partners: CosmoPartner[] }) {
  const [filter, setFilter] = useState<string | 'all'>('all')

  // Only show category chips that actually have partners, in first-seen order.
  const availableTypes = useMemo(() => {
    const seen = new Set<string>()
    const types: string[] = []
    all.forEach((p) => {
      if (p.type && !seen.has(p.type)) {
        seen.add(p.type)
        types.push(p.type)
      }
    })
    return types
  }, [all])

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
              <div className="flex h-32 items-center justify-center rounded-lg bg-pale-blue p-2">
                {p.logo ? (
                  <div className="relative h-full w-full">
                    <Image src={p.logo} alt={`${p.name} ロゴ`} fill className="object-contain" sizes="280px" />
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
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue hover:text-[#0057c4]"
                  >
                    公式サイト
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground">公式サイト準備中</span>
                )}
                {(p.twitter || p.instagram || p.facebook) && (
                  <ul className="flex items-center gap-2">
                    {(['twitter', 'instagram', 'facebook'] as const)
                      .filter((key) => p[key])
                      .map((key) => (
                        <li key={key}>
                          <a
                            href={p[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.name} ${snsIcons[key].label}`}
                            className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-pale-blue hover:text-fsif-blue"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                              <path d={snsIcons[key].path} />
                            </svg>
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
