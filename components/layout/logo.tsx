import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const isLight = variant === 'light'
  return (
    <Link
      href="/"
      aria-label="FSIF 未来宇宙産業フォーラム トップページ"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative inline-flex size-8 shrink-0 items-center justify-center">
        <Image src="/FSIF_logo.png" alt="" width={32} height={32} className="size-8 object-contain" />
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
