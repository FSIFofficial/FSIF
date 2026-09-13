import Image from 'next/image'
import { products } from '@/lib/data/projects'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'

/** HOME PRODUCT section. FSIF発の自主開発ツールを紹介。現在の掲載対象はOrbitのみ。 */
export function HomeProduct() {
  const orbit = products[0]
  if (!orbit) return null

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-fsif">
        <SectionHeading
          labelEn="PRODUCT"
          title="FSIFから生まれたプロダクト。"
          description="活動の現場で見つけた課題を、自らのツールとして形にする。FSIF発の自主開発プロダクトをご紹介します。"
        />

        <Reveal className="mt-12">
          <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
            <div className="relative aspect-[16/11] bg-navy lg:aspect-auto">
              <Image
                src={orbit.image || '/placeholder.svg'}
                alt={orbit.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="font-mono text-sm font-bold tracking-wide text-fsif-blue">
                {orbit.name}
              </span>
              <h3 className="mt-3 text-balance text-2xl font-bold leading-snug text-foreground md:text-3xl">
                {orbit.tagline}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{orbit.summary}</p>
              <div className="mt-8">
                <CtaLink href="/product/orbit" variant="primary">
                  View Orbit
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
