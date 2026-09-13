import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { leadership } from '@/lib/data/org'
import { socialLinks } from '@/lib/data/site'

export const metadata: Metadata = {
  title: '代表メッセージ',
  description: 'FSIF代表からのメッセージ。宇宙とのかかわり方、肯定を土台とした組織づくりについて。',
}

const rep = leadership[0]

const paragraphs = [
  '「宇宙産業が持続可能な産業へと成長するためには、宇宙を利用する非宇宙業界を、いかに巻き込んでいけるかが重要である。」という思いから、未来宇宙産業フォーラムは始まりました。',
  '宇宙産業は今、かつてないスピードで広がっています。しかし、その広がりを前にしても、「宇宙は自分には関係のないもの」と感じている人が、まだ多くいます。技術者や専門家でなければ関われない。そうした思い込みが、宇宙と人との間に距離を生んでいます。',
  '私たちは、その距離を縮めたいと考えています。',
  '宇宙について学ぶ人、宇宙産業で働く人、活動を応援する人。宇宙との関わり方は、一つではありません。一人ひとりが自分に合った距離感で宇宙と関われる選択肢を、社会のあらゆる場所に増やしていく。それが、FSIFの役割です。',
  'これから宇宙は、一部の限られた人だけではなく、誰もが行き、過ごし、活動できる場所へと変わっていきます。その未来では、地球上で当たり前に受けられるサービスが、宇宙でも利用できることが求められます。',
  '一方で、宇宙という特殊な環境では、地球上とは異なる技術や仕組みが必要です。その実現には、現在の宇宙産業だけでなく、ものづくり、医療、食、教育、金融、エンターテインメントなど、これまで宇宙との接点が少なかった多様な業界の知識と経験が欠かせません。',
  '私たちは、あらゆる業界や一人ひとりにとって、宇宙が遠い未来の話ではなく、自分たちにも関わる現実のものだと思える社会を目指して活動していきます。',
  'FSIFは、「肯定」を土台とする組織です。',
  '「まず、やってみよう」と言える空気があるかどうかで、人の可能性や行動は大きく変わります。学生であっても、経験がなくても、主体的に大きな挑戦へ関わることができる。その一つひとつの挑戦が組織の力となり、やがて社会を動かす力になると、私たちは信じています。',
  '宇宙を、みんなのものにする。',
  'この長い挑戦を、立場、業界を越えて集まる仲間とともに、これからも続けていきます。',
]

export default function MessagePage() {
  return (
    <>
      <PageHero
        labelEn="MESSAGE"
        title="代表メッセージ"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'MESSAGE' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-pale-blue">
              <Image
                src={rep.image || '/placeholder.svg'}
                alt={`${rep.name}のポートレート`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5">
              <p className="text-sm text-muted-foreground">{rep.role}</p>
              <p className="mt-1 text-xl font-bold text-foreground">{rep.name}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{rep.bio}</p>
              <ul className="mt-4 flex gap-4">
                {socialLinks.slice(0, 3).map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-fsif-blue transition-colors hover:text-[#0057c4]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-balance text-2xl font-bold leading-snug text-navy md:text-3xl">
              宇宙を、みんなのものにする。
            </p>
            <div className="mt-8 space-y-6 leading-[1.9] text-foreground/90">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-right text-sm text-muted-foreground">
              未来宇宙産業フォーラム
              <br />
              代表　{rep.name}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
