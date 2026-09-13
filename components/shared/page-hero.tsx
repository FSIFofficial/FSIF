import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Crumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-1 text-xs">
        <li>
          <Link
            href="/"
            className={cn(
              'transition-colors',
              onDark ? 'text-navy-foreground/60 hover:text-white' : 'text-muted-foreground hover:text-fsif-blue',
            )}
          >
            HOME
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className={cn('size-3', onDark ? 'text-navy-foreground/40' : 'text-muted-foreground/60')} />
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className={cn(
                  'transition-colors',
                  onDark ? 'text-navy-foreground/60 hover:text-white' : 'text-muted-foreground hover:text-fsif-blue',
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(onDark ? 'text-white' : 'text-foreground')}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

interface PageHeroProps {
  /** English kicker. `eyebrow` is an accepted alias. */
  labelEn?: string
  eyebrow?: string
  title: string
  /** Supporting copy. `lead` is an accepted alias. */
  description?: string
  lead?: string
  breadcrumbs: Crumb[]
  image?: string
  imageAlt?: string
}

/** Subpage hero. Uses an image + navy overlay when an image is provided, else a clean navy band. */
export function PageHero({
  labelEn,
  eyebrow,
  title,
  description,
  lead,
  breadcrumbs,
  image,
  imageAlt,
}: PageHeroProps) {
  const label = labelEn ?? eyebrow
  const copy = description ?? lead
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {image && (
        <>
          <Image
            src={image || '/placeholder.svg'}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        </>
      )}
      <div className="container-wide relative pb-14 pt-28 md:pb-20 md:pt-36">
        <Breadcrumbs items={breadcrumbs} onDark />
        {label && <p className="section-label mt-8 text-accent-blue">{label}</p>}
        <h1 className="mt-3 text-balance text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-tight text-white">
          {title}
        </h1>
        {copy && (
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-navy-foreground/80">
            {copy}
          </p>
        )}
      </div>
    </section>
  )
}
