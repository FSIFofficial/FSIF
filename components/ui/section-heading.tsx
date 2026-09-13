import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** English kicker label. `eyebrow` is an accepted alias. */
  labelEn?: string
  eyebrow?: string
  title?: string
  /** Optional supporting copy rendered under the title. */
  description?: React.ReactNode
  className?: string
  onDark?: boolean
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  labelEn,
  eyebrow,
  title,
  description,
  className,
  onDark = false,
  align = 'left',
  as = 'h2',
}: SectionHeadingProps) {
  const Tag = as
  const label = labelEn ?? eyebrow

  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {label && (
        <span
          className={cn(
            'section-label inline-flex items-center gap-2',
            onDark ? 'text-accent-blue' : 'text-fsif-blue',
          )}
        >
          <span className={cn('h-px w-6', onDark ? 'bg-accent-blue/60' : 'bg-fsif-blue/60')} />
          {label}
        </span>
      )}
      {title && (
        <Tag
          className={cn(
            'mt-3 text-balance font-bold leading-tight tracking-tight',
            'text-[clamp(1.6rem,4vw,2.6rem)]',
            onDark ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          {title}
        </Tag>
      )}
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty leading-relaxed',
            align === 'center' && 'mx-auto',
            onDark ? 'text-navy-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
