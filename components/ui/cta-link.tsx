import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'text'

interface CtaLinkProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
  className?: string
  onDark?: boolean
}

const isExternalHref = (href: string) => /^https?:\/\//.test(href)

export function CtaLink({
  href,
  children,
  variant = 'primary',
  external,
  className,
  onDark = false,
}: CtaLinkProps) {
  const detectedExternal = external ?? isExternalHref(href)

  const base =
    'group inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants: Record<Variant, string> = {
    primary:
      'rounded-md bg-fsif-blue px-5 py-3 text-primary-foreground hover:bg-[#0057c4] focus-visible:outline-fsif-blue',
    secondary: onDark
      ? 'rounded-md border border-navy-foreground/30 px-5 py-3 text-navy-foreground hover:border-navy-foreground/70 hover:bg-white/5'
      : 'rounded-md border border-border bg-surface px-5 py-3 text-foreground hover:border-fsif-blue hover:text-fsif-blue',
    text: onDark
      ? 'text-navy-foreground hover:text-accent-blue'
      : 'text-fsif-blue hover:text-[#0057c4]',
  }

  const Icon = detectedExternal ? ArrowUpRight : ArrowRight

  const content = (
    <>
      <span>{children}</span>
      <Icon
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
      {detectedExternal && <span className="sr-only">（外部サイトへ移動します）</span>}
    </>
  )

  if (detectedExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  )
}
