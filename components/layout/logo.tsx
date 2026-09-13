import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

/** Provisional FSIF wordmark with a small orbit mark. Replaceable with an SVG asset later. */
export function Logo({ variant = 'dark', className }: LogoProps) {
  const isLight = variant === 'light'
  return (
    <Link
      href="/"
      aria-label="FSIF 未来宇宙産業フォーラム トップページ"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative inline-flex size-8 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="size-8" fill="none">
          <circle
            cx="16"
            cy="16"
            r="6"
            className={isLight ? 'fill-accent-blue' : 'fill-fsif-blue'}
          />
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="6"
            transform="rotate(-30 16 16)"
            className={cn('stroke-[1.5]', isLight ? 'stroke-white/70' : 'stroke-fsif-blue/50')}
            fill="none"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-mono text-lg font-bold tracking-[0.12em]',
            isLight ? 'text-white' : 'text-navy',
          )}
        >
          FSIF
        </span>
        <span
          className={cn(
            'mt-0.5 text-[0.6rem] tracking-wide',
            isLight ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          未来宇宙産業フォーラム
        </span>
      </span>
    </Link>
  )
}
