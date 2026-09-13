'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { LeadershipMember } from '@/lib/types'
import { leadership } from '@/lib/data/org'

export function LeadershipGrid() {
  const [active, setActive] = useState<LeadershipMember | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((m) => (
          <li key={m.id}>
            <button
              type="button"
              onClick={() => setActive(m)}
              className="group block w-full text-left"
              aria-haspopup="dialog"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-pale-blue">
                <Image
                  src={m.image || '/placeholder.svg'}
                  alt={`${m.name}のプロフィール写真`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <span className="section-label mt-4 block text-fsif-blue">{m.area}</span>
              <span className="mt-1 block text-lg font-bold text-foreground transition-colors group-hover:text-fsif-blue">
                {m.name}
              </span>
              <span className="mt-0.5 block text-sm text-muted-foreground">{m.role}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name}のプロフィール`}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-surface p-6 sm:rounded-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="閉じる"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-pale-blue hover:text-foreground"
            >
              <X className="size-5" />
            </button>
            <div className="grid gap-6 sm:grid-cols-[160px_1fr]">
              <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-xl bg-pale-blue">
                <Image
                  src={active.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="section-label text-fsif-blue">{active.area}</span>
                <h3 className="mt-1 text-2xl font-bold text-foreground">{active.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.role} / {active.nameEn}
                </p>
                <p className="mt-4 leading-relaxed text-foreground/90">{active.bio}</p>
                {active.message && (
                  <blockquote className="mt-5 rounded-lg border-l-2 border-fsif-blue bg-pale-blue/50 p-4 text-sm leading-relaxed text-foreground/80">
                    {active.message}
                  </blockquote>
                )}
              </div>
            </div>

            {active.career && active.career.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="section-label text-fsif-blue">経歴</p>
                <ol className="mt-4 space-y-3">
                  {active.career.map((c, i) => (
                    <li key={i} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                      <span className="shrink-0 font-mono text-xs text-muted-foreground sm:w-24">{c.date}</span>
                      <span className="text-sm text-foreground/90">{c.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
