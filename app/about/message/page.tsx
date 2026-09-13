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
  '「宇宙は、限られた人のものではない」。この思いが、FSIFのはじまりでした。',
  '宇宙産業はいま、かつてないスピードで広がっています。しかし、その広がりを前にして「自分には関係ない」と感じてしまう人が、まだたくさんいます。技術者でなければ、専門家でなければ関われない。そんな思い込みが、宇宙と人の間に距離をつくっています。',
  '私たちは、その距離を縮めたいと考えています。学ぶ人、働く人、応援する人。関わり方は一つではありません。一人ひとりが自分の距離感で宇宙とかかわれる選択肢を、社会のあらゆる場所に増やしていく。それがFSIFの役割です。',
  'FSIFは、肯定を土台にした組織です。まずやってみよう、と言える空気があるかどうかで、人の動き方は大きく変わります。学生であっても、経験がなくても、主体的に大きな挑戦に関われる。その積み重ねが、組織の力になり、社会を動かす力になると信じています。',
  '宇宙をみんなのものにする。この長い挑戦を、立場を越えた仲間とともに続けていきます。',
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
              宇宙をみんなのものにする。
            </p>
            <div className="mt-8 space-y-6 leading-[1.9] text-foreground/90">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-right text-sm text-muted-foreground">
              未来宇宙産業フォーラム 代表
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
