import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'

export function AboutFsif() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-fsif">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/about-collab.png"
                alt="ミーティングで議論するFSIFのメンバー"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-md bg-navy px-4 py-2.5 font-mono text-xs text-navy-foreground shadow-lg md:-bottom-5 md:left-6">
              <span className="text-accent-blue">EST. 2023</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading labelEn="ABOUT FSIF" title="宇宙への入口を、さまざまな形でつくる。" />
            <p className="mt-6 leading-[1.9] text-muted-foreground">
              未来宇宙産業フォーラム（FSIF）は、宇宙を一部の専門家だけのものにしないための組織です。
              学ぶ・つながる・体験する、複数の入口を用意し、企業・行政・研究機関・大学・学生・一般の人が、
              それぞれの距離感で宇宙とかかわれる選択肢を社会に増やしています。専門性と親しみやすさの両方を持つ
              「一番身近な宇宙の専門家」として、肯定を土台に、すべてに挑戦し続けます。
            </p>
            <div className="mt-8">
              <CtaLink href="/about" variant="secondary">
                FSIFについて知る
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
