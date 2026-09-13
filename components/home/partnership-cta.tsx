import { CtaLink } from '@/components/ui/cta-link'

export function PartnershipCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(40,168,255,0.25), transparent 55%)',
        }}
      />
      <div className="container-fsif relative py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="section-label text-accent-blue">PARTNERSHIP</span>
          <h2 className="mt-4 text-balance text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight text-white">
            FSIFと一緒に、新しい宇宙との接点をつくりませんか。
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-[1.9] text-navy-foreground/80">
            企業・行政・研究機関・大学のみなさまへ。連携、協賛、共同企画など、宇宙産業の裾野を広げる取り組みを
            ご一緒できればと考えています。まずはお気軽にご相談ください。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink href="/contact" variant="primary">
              連携について相談する
            </CtaLink>
            <CtaLink href="/contact" variant="secondary" onDark>
              お問い合わせ
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
