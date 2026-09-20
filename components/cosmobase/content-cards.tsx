import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { getPublishedContents } from '@/lib/data/cosmobase'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

/**
 * Logo-led content cards. When a logo is provided it is the hero of the card
 * (object-contain, uniform box). When missing, a neutral name placeholder is shown
 * instead of a generic icon. Cards without a confirmed URL show a "準備中" status
 * rather than a dead "詳細を見る" link.
 */
export function CosmoContentCards() {
  const contents = getPublishedContents()

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {contents.map((c, i) => {
        const hasUrl = Boolean(c.url)
        const CardInner = (
          <>
            <div className="flex h-24 items-center justify-center rounded-lg bg-[#000033] p-4">
              {c.logo ? (
                <div className="relative h-full w-full">
                  <Image src={c.logo} alt={`${c.name} ロゴ`} fill className="object-contain" sizes="240px" />
                </div>
              ) : (
                <span className="text-center font-mono text-sm font-medium text-fsif-blue">{c.name}</span>
              )}
            </div>
            <div className="mt-5 flex flex-1 flex-col">
              <span className="section-label text-muted-foreground">{c.category}</span>
              <h3 className="mt-1.5 text-lg font-bold text-foreground">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <span
                className={cn(
                  'mt-4 inline-flex items-center gap-1.5 text-sm font-medium',
                  hasUrl ? 'text-fsif-blue' : 'text-muted-foreground',
                )}
              >
                {hasUrl ? (
                  <>
                    詳細を見る
                    <ArrowUpRight className="size-4" />
                  </>
                ) : (
                  <span className="rounded-full bg-pale-blue px-2.5 py-0.5 text-xs text-fsif-blue">準備中</span>
                )}
              </span>
            </div>
          </>
        )

        return (
          <Reveal key={c.id} delay={i * 60}>
            {hasUrl ? (
              <a
                href={c.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-fsif-blue/40"
              >
                {CardInner}
              </a>
            ) : (
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">{CardInner}</div>
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
