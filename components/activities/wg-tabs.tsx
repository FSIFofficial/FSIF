'use client'

import { useMemo, useState } from 'react'
import { wgStatuses, type WorkingGroup } from '@/lib/data/workinggroups'
import { cn } from '@/lib/utils'

const statusColor: Record<string, string> = {
  議論中: 'bg-fsif-blue text-primary-foreground',
  募集中: 'bg-accent-blue text-navy',
  終了: 'bg-pale-blue text-muted-foreground',
}

export function WgTabs({ workingGroups }: { workingGroups: WorkingGroup[] }) {
  const [status, setStatus] = useState<string>('ALL')

  const items = useMemo(
    () => workingGroups.filter((w) => (status === 'ALL' ? true : w.status === status)),
    [workingGroups, status],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="ステータスで絞り込み">
        {['ALL', ...wgStatuses].map((s) => (
          <button
            key={s}
            type="button"
            role="tab"
            aria-selected={status === s}
            onClick={() => setStatus(s)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              status === s
                ? 'border-fsif-blue bg-fsif-blue text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-fsif-blue hover:text-fsif-blue',
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border bg-surface p-12 text-center">
          <p className="text-muted-foreground">該当するワーキンググループがありません。</p>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((w) => (
            <li
              key={w.id}
              id={w.id}
              style={{ scrollMarginTop: 'calc(var(--header-h) + 1rem)' }}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-foreground">{w.name}</h3>
                <span className={cn('shrink-0 rounded-full px-3 py-1 text-xs font-medium', statusColor[w.status])}>
                  {w.status}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-fsif-blue">{w.theme}</p>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{w.discussion}</p>
              <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">参加団体</dt>
                  <dd className="text-foreground">{w.participants.join(' / ')}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">人数・期間</dt>
                  <dd className="text-foreground">{w.members}名 ・ {w.period}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">成果物</dt>
                  <dd className="text-foreground">{w.deliverable}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
