import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getPublishedPartners, cosmoPartnerCount } from '@/lib/data/cosmobase'

/**
 * Cosmo Base partner marquee: right-to-left, infinite, pausable on hover/focus,
 * static under reduced-motion. Uses a visual duplicate of the same row (aria-hidden)
 * so screen readers and Tab don't hit the same links twice, and always links to the
 * static partners list for full access.
 */
export function CosmoPartnerCarousel() {
  const partners = getPublishedPartners()
  if (partners.length === 0) return null

  const Item = ({ p, ariaHidden }: { p: (typeof partners)[number]; ariaHidden?: boolean }) => {
    const label = p.name
    const box = (
      <div className="flex h-20 w-44 items-center justify-center rounded-lg border border-border bg-surface px-4">
        {p.logo ? (
          <div className="relative h-full w-full">
            <Image src={p.logo} alt={`${label} ロゴ`} fill className="object-contain" sizes="176px" />
          </div>
        ) : (
          <span className="text-center font-mono text-sm font-medium text-muted-foreground">{label}</span>
        )}
      </div>
    )
    if (ariaHidden) {
      return <li aria-hidden="true">{box}</li>
    }
    return (
      <li>
        {p.url ? (
          <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${label}（${p.type}）`}>
            {box}
          </a>
        ) : (
          box
        )}
      </li>
    )
  }

  return (
    <div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <ul className="marquee-cosmo flex w-max items-center gap-4">
          {partners.map((p) => (
            <Item key={p.id} p={p} />
          ))}
          {/* Visual duplicate only — hidden from AT and tab order */}
          {partners.map((p) => (
            <Item key={`dup-${p.id}`} p={p} ariaHidden />
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          公開中のパートナー <span className="font-mono font-bold text-foreground">{cosmoPartnerCount}</span> 団体（仮素材を含む）
        </p>
        <Link
          href="/activities/community/cosmobase/partners"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue transition-colors hover:text-[#0057c4]"
        >
          パートナー一覧を見る
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
