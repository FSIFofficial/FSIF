'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '@/lib/data/home'
import { cn } from '@/lib/utils'

/** Autoplay interval. Spec: default 6s, configurable within 5–8s. */
const INTERVAL = 6000
/** Horizontal movement beyond this (px) counts as a swipe. */
const SWIPE_THRESHOLD = 50
/** Pointer travel beyond this (px) suppresses the click on release (drag, not tap). */
const DRAG_SUPPRESS = 10

export function HeroSlider() {
  const total = heroSlides.length
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Timer + pause bookkeeping in refs so re-renders never spawn duplicate timers.
  const timerRef = useRef<number | null>(null)
  const pausedRef = useRef(false) // pressed-and-held
  const hiddenRef = useRef(false) // document hidden
  const focusInsideRef = useRef(false) // keyboard focus within slider
  const reducedRef = useRef(false)

  // Pointer gesture bookkeeping.
  const pointerId = useRef<number | null>(null)
  const startX = useRef(0)
  const startY = useRef(0)
  const movedX = useRef(0)
  const suppressClick = useRef(false)
  const rootRef = useRef<HTMLElement>(null)

  const advance = useCallback(
    (dir: number) => setIndex((v) => ((v + dir) % total + total) % total),
    [total],
  )
  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total])

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  /** (Re)start the autoplay countdown unless something should hold it. */
  const scheduleNext = useCallback(() => {
    clearTimer()
    if (reducedRef.current || pausedRef.current || hiddenRef.current || focusInsideRef.current) return
    timerRef.current = window.setTimeout(() => {
      setIndex((v) => (v + 1) % total)
    }, INTERVAL)
  }, [clearTimer, total])

  // Reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      reducedRef.current = mq.matches
      setReducedMotion(mq.matches)
      scheduleNext()
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [scheduleNext])

  // Restart the countdown every time the slide changes (manual or auto) → fresh 6s.
  useEffect(() => {
    scheduleNext()
    return clearTimer
  }, [index, scheduleNext, clearTimer])

  // Pause while the tab/document is hidden; on return, release press-hold and re-evaluate.
  useEffect(() => {
    const onVisibility = () => {
      hiddenRef.current = document.hidden
      if (document.hidden) {
        clearTimer()
      } else {
        pausedRef.current = false // never resume stuck in a pressed state
        scheduleNext()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [clearTimer, scheduleNext])

  // Window losing focus should not leave us paused forever.
  useEffect(() => {
    const onBlur = () => {
      pausedRef.current = false
      scheduleNext()
    }
    window.addEventListener('blur', onBlur)
    return () => window.removeEventListener('blur', onBlur)
  }, [scheduleNext])

  // ---- Press-and-hold pause via Pointer Events ----
  const beginHold = (e: React.PointerEvent) => {
    if (pointerId.current !== null) return
    // Let interactive controls (CTA link, arrows, dots) handle their own
    // click natively — capturing the pointer here would redirect their
    // pointerup/click to the section instead, silently breaking them.
    if ((e.target as HTMLElement).closest('a, button')) return
    pointerId.current = e.pointerId
    startX.current = e.clientX
    startY.current = e.clientY
    movedX.current = 0
    suppressClick.current = false
    pausedRef.current = true
    clearTimer() // stop immediately so a long press never flips mid-hold
    try {
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    } catch {
      // ignore
    }
  }

  const moveHold = (e: React.PointerEvent) => {
    if (e.pointerId !== pointerId.current) return
    const dx = e.clientX - startX.current
    const dy = e.clientY - startY.current
    movedX.current = dx
    if (Math.abs(dx) > DRAG_SUPPRESS) suppressClick.current = true
    // If the gesture is clearly vertical, don't hijack the page's vertical scroll.
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > DRAG_SUPPRESS) {
      endHold(e, true)
    }
  }

  const endHold = (e: React.PointerEvent, cancelled = false) => {
    if (e.pointerId !== pointerId.current) return
    const dx = movedX.current
    pointerId.current = null
    pausedRef.current = false
    try {
      ;(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }
    // Horizontal swipe → change slide (only when not a vertical-scroll cancel).
    if (!cancelled && Math.abs(dx) > SWIPE_THRESHOLD) {
      advance(dx < 0 ? 1 : -1)
    } else {
      scheduleNext() // resume with a fresh interval
    }
  }

  // Suppress accidental CTA navigation at the end of a drag.
  const onClickCapture = (e: React.MouseEvent) => {
    if (suppressClick.current) {
      e.preventDefault()
      e.stopPropagation()
      suppressClick.current = false
    }
  }

  // Keyboard focus inside the slider suppresses autoplay (accessibility).
  const onFocus = () => {
    focusInsideRef.current = true
    clearTimer()
  }
  const onBlurCapture = (e: React.FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node)) {
      focusInsideRef.current = false
      scheduleNext()
    }
  }

  const active = heroSlides[index]

  return (
    <section
      ref={rootRef}
      aria-label="FSIFの主要な取り組み"
      aria-roledescription="carousel"
      className="relative h-[88vh] min-h-[560px] w-full touch-pan-y overflow-hidden bg-navy select-none lg:h-screen"
      onPointerDown={beginHold}
      onPointerMove={moveHold}
      onPointerUp={(e) => endHold(e)}
      onPointerCancel={(e) => endHold(e, true)}
      onLostPointerCapture={() => {
        pointerId.current = null
        pausedRef.current = false
        scheduleNext()
      }}
      onClickCapture={onClickCapture}
      onFocus={onFocus}
      onBlurCapture={onBlurCapture}
    >
      {/* Sliding track for a smooth horizontal transition */}
      <div
        className={cn('flex h-full w-full', !reducedMotion && 'transition-transform duration-700 ease-out')}
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        aria-live="off"
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${total}`}
            aria-hidden={i !== index}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.imageAlt}
              fill
              priority={i === 0}
              draggable={false}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content (keyed to re-run entrance animation per slide) */}
      <div className="container-wide pointer-events-none absolute inset-0 flex items-end pb-20 md:items-center md:pb-0">
        <div key={active.id} className="pointer-events-auto max-w-2xl">
          <p
            className="section-label mb-4 text-accent-blue"
            style={{ animation: reducedMotion ? undefined : 'fsif-fade-up 0.6s ease both' }}
          >
            {active.eyebrow}
          </p>
          <h1
            className="text-balance text-[clamp(2.1rem,6vw,4.2rem)] font-bold leading-[1.1] text-white"
            style={{ animation: reducedMotion ? undefined : 'fsif-fade-up 0.7s ease both' }}
          >
            {active.copy}
          </h1>
          <p
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg"
            style={{ animation: reducedMotion ? undefined : 'fsif-fade-up 0.8s ease both' }}
          >
            {active.sub}
          </p>
          <div style={{ animation: reducedMotion ? undefined : 'fsif-fade-up 0.9s ease both' }}>
            <Link
              href={active.cta.href}
              draggable={false}
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-fsif-blue px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#0057c4]"
            >
              {active.cta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Controls: counter, indicators, prev/next — no play/pause button */}
      <div className="container-wide pointer-events-none absolute inset-x-0 bottom-6 md:bottom-8">
        <div className="pointer-events-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-sm text-white">
            <span className="text-white">{String(index + 1).padStart(2, '0')}</span>
            <span className="h-px w-8 bg-white/40" />
            <span className="text-white/60">{String(total).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="mr-2 hidden items-center gap-2 sm:flex" role="tablist" aria-label="スライド選択">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`スライド ${i + 1}: ${s.eyebrow}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === index ? 'w-8 bg-accent-blue' : 'w-4 bg-white/40 hover:bg-white/70',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => advance(-1)}
              aria-label="前のスライド"
              className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label="次のスライド"
              className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
