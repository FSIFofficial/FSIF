import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { CtaLink } from '@/components/ui/cta-link'
import { products } from '@/lib/data/projects'

const title = 'PRODUCT'
const description = 'FSIFから生まれたプロダクト。FSIF内部から生まれ、外部への提供を想定している自主開発ツールを紹介します。現在はOrbit。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function ProductPage() {
  return (
    <>
      <PageHero
        labelEn="PRODUCT"
        title="FSIFから生まれたプロダクト。"
        description="FSIF内部の活動から生まれ、外部への提供を想定して開発している自主開発ツールを紹介します。"
        breadcrumbs={[{ label: 'PRODUCT' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif flex flex-col gap-16">
          {products.map((p) => (
            <article key={p.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-navy">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-sm font-bold tracking-wide text-fsif-blue">{p.name}</span>
                <h2 className="mt-2 text-balance text-3xl font-bold leading-snug text-foreground md:text-4xl">
                  {p.tagline}
                </h2>
                <p className="mt-5 max-w-xl leading-[1.9] text-muted-foreground">{p.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaLink href={p.href}>View {p.name}</CtaLink>
                  {p.external && (
                    <CtaLink href={p.external.href} variant="secondary" external>
                      {p.external.label}
                    </CtaLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background py-14 text-center">
        <div className="container-fsif">
          <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            プロダクトは、FSIFの活動の現場で見つかった課題から生まれます。今後の追加はこの一覧に順次掲載していきます。
          </p>
        </div>
      </section>
    </>
  )
}
