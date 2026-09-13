import Image from 'next/image'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'

const roleTags = ['イベント企画', 'コミュニティ運営', 'デザイン', '広報', 'Web開発', 'AI活用', '企業連携', '調査研究']

export function JoinFsif() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-fsif">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading labelEn="JOIN FSIF" title="宇宙をみんなのものにする仲間を募集しています。" />
            <p className="mt-6 leading-[1.9] text-muted-foreground">
              専攻も経験も問いません。FSIFは肯定を土台に、一人ひとりが主体的に挑戦できる組織です。
              イベント企画からデザイン、開発、調査研究まで、あなたの関心を活かせる場所がきっと見つかります。
              学生を中心に、社会人や専門家も加わり、立場を越えて活動しています。
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {roleTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/join" variant="primary">
                FSIFでできることを見る
              </CtaLink>
              <CtaLink href="/join#positions" variant="secondary">
                募集ポジションを見る
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/join.png"
                alt="プロジェクトを終えて喜ぶFSIFの学生メンバー"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
