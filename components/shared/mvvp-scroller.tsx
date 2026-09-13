'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface MvvpItem {
  key: string
  labelEn: string
  labelJa: string
  statement: string
  description: string
  /** Optional richer content rendered under the statement (e.g. the philosophy page reason block). */
  extra?: ReactNode
}

interface MvvpScrollerProps {
  items: MvvpItem[]
  theme?: 'dark' | 'light'
  /** Left-rail / mobile-tab-bar kicker. */
  eyebrow?: string
}

/**
 * Shared MVVP layout used by the HOME philosophy section (dark) and /about/philosophy (light).
 * - Left rail keeps all labels visible at once; exactly one is active.
 * - Right column stacks every statement in the DOM (never hidden/replaced).
 * - Active state follows the statement crossing the reading line via IntersectionObserver.
 * - Clicking a label/tab smooth-scrolls to its statement (respecting reduced-motion).
 * - Desktop: sticky left rail + stacked statements. Mobile: sticky horizontal tab bar.
 */
export function MvvpScroller({ items, theme = 'dark', eyebrow = 'PHILOSOPHY / 私たちの理念' }: MvvpScrollerProps) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the visible statement whose top is closest to the reading line (~40% down).
        let bestIdx = -1
        let bestDist = Number.POSITIVE_INFINITY
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = Number((entry.target as HTMLElement).dataset.index)
          const dist = Math.abs(entry.boundingClientRect.top - window.innerHeight * 0.4)
          if (dist < bestDist) {
            bestDist = dist
            bestIdx = idx
          }
        })
        if (bestIdx >= 0) setActive(bestIdx)
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: [0, 0.1, 0.5, 1] },
    )
    refs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [])

  // Keep the active mobile tab within view (horizontal only).
  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [active])

  const scrollTo = useCallback((i: number) => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    refs.current[i]?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [])

  const dark = theme === 'dark'

  const t = {
    section: dark ? 'bg-navy text-navy-foreground' : 'bg-surface text-foreground',
    eyebrow: dark ? 'text-accent-blue' : 'text-fsif-blue',
    tabBar: dark ? 'border-white/10 bg-navy/95' : 'border-border bg-surface/95',
    tabActive: dark
      ? 'border-accent-blue bg-accent-blue/15 text-white'
      : 'border-fsif-blue bg-pale-blue text-fsif-blue',
    tabIdle: dark ? 'border-white/20 text-navy-foreground/70' : 'border-border text-muted-foreground',
    railLineOn: dark ? 'bg-accent-blue' : 'bg-fsif-blue',
    railLineOff: dark ? 'bg-white/20' : 'bg-border',
    labelOn: dark ? 'text-white' : 'text-navy',
    labelOff: dark
      ? 'text-navy-foreground/60 group-hover:text-navy-foreground/85'
      : 'text-muted-foreground group-hover:text-navy',
    labelJaOn: dark ? 'text-accent-blue' : 'text-fsif-blue',
    labelJaOff: dark ? 'text-navy-foreground/45' : 'text-muted-foreground/70',
    borderOn: dark ? 'lg:border-accent-blue' : 'lg:border-fsif-blue',
    borderOff: dark ? 'lg:border-white/10' : 'lg:border-border',
    divider: dark ? 'border-white/10' : 'border-border',
    heading: dark ? 'text-white' : 'text-navy',
    body: dark ? 'text-navy-foreground/80' : 'text-muted-foreground',
    labelJaBody: dark ? 'text-navy-foreground/60' : 'text-muted-foreground',
  }

  return (
    <section aria-label="FSIFの理念（MVVP）" className={cn('relative overflow-hidden', t.section)}>
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full border border-white/5" />
          <div className="absolute -left-56 bottom-0 h-[700px] w-[700px] rounded-full border border-white/5" />
        </div>
      )}

      {/* Mobile sticky tab bar */}
      <div className={cn('sticky z-30 border-b backdrop-blur lg:hidden', t.tabBar)} style={{ top: 'var(--header-h)' }}>
        <div className="container-fsif py-3">
          <p className={cn('section-label mb-2', t.eyebrow)}>{eyebrow}</p>
          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="理念">
            {items.map((p, i) => (
              <button
                key={p.key}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => scrollTo(i)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-1.5 font-mono text-xs font-medium tracking-wide transition-colors',
                  i === active ? t.tabActive : t.tabIdle,
                )}
              >
                {p.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fsif relative py-16 md:py-28">
        <p className={cn('section-label mb-12 hidden lg:block', t.eyebrow)}>{eyebrow}</p>

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          {/* Sticky label rail (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky flex flex-col gap-4" style={{ top: 'calc(var(--header-h) + 2rem)' }}>
              {items.map((p, i) => {
                const on = i === active
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => scrollTo(i)}
                    className="group flex items-center gap-4 text-left"
                    aria-current={on}
                  >
                    <span className={cn('h-8 w-0.5 shrink-0 rounded transition-colors duration-300', on ? t.railLineOn : t.railLineOff)} />
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          'font-mono text-[clamp(1.7rem,3.2vw,2.8rem)] font-bold leading-none tracking-tight transition-colors duration-300',
                          on ? t.labelOn : t.labelOff,
                        )}
                      >
                        {p.labelEn}
                      </span>
                      <span className={cn('mt-1 text-xs transition-colors', on ? t.labelJaOn : t.labelJaOff)}>
                        {p.labelJa}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Stacked statements (all kept in the DOM and readable) */}
          <div>
            {items.map((p, i) => (
              <div
                key={p.key}
                data-index={i}
                ref={(el) => {
                  refs.current[i] = el
                }}
                style={{ scrollMarginTop: 'calc(var(--header-h) + 5rem)' }}
                className={cn(
                  'flex min-h-[48vh] flex-col justify-center border-t py-10 transition-colors duration-300 first:border-t-0 lg:min-h-[60vh] lg:border-t-0 lg:border-l-2 lg:pl-8',
                  t.divider,
                  i === active ? t.borderOn : t.borderOff,
                )}
              >
                <span className={cn('section-label mb-3 lg:hidden', t.eyebrow)}>{p.labelEn}</span>
                <span className={cn('mb-3 hidden text-sm lg:block', t.labelJaBody)}>{p.labelJa}</span>
                <h3 className={cn('text-balance text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold leading-tight', t.heading)}>
                  {p.statement}
                </h3>
                <p className={cn('mt-6 max-w-xl text-pretty leading-[1.9]', t.body)}>{p.description}</p>
                {p.extra}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
