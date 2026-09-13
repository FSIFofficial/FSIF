import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { MvvpScroller } from '@/components/shared/mvvp-scroller'
import { philosophies } from '@/lib/data/home'

export const metadata: Metadata = {
  title: '理念 / Philosophy',
  description: 'FSIFのMission・Vision・Value・Purposeと、それぞれを掲げる理由をご紹介します。',
}

const reasons: Record<string, string> = {
  mission: '宇宙との関わり方は本来もっと多様であるはずです。その選択肢を社会に増やすことを、私たちの使命に据えています。',
  vision: '裾野が広がるほど、宇宙は特別な誰かのものではなくなります。私たちが目指す未来像です。',
  value: '否定から入ると挑戦は生まれません。肯定を出発点にすることで、経験を問わず主体的に動ける組織になります。',
  purpose: '専門性だけでも、親しみやすさだけでも足りません。両方を持つ存在として社会に貢献し続けます。',
}

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        labelEn="PHILOSOPHY"
        title="私たちの理念"
        description="Mission・Vision・Value・Purpose。FSIFの活動すべての土台にある考え方です。"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'PHILOSOPHY' }]}
      />

      <MvvpScroller
        theme="light"
        eyebrow="MVVP / 私たちの理念"
        items={philosophies.map((p) => ({
          key: p.key,
          labelEn: p.labelEn,
          labelJa: p.labelJa,
          statement: p.statement,
          description: p.description,
          extra: (
            <div className="mt-6 max-w-xl rounded-lg border-l-2 border-fsif-blue bg-pale-blue/50 p-5">
              <p className="section-label mb-2 text-fsif-blue">WHY WE HOLD THIS</p>
              <p className="text-sm leading-relaxed text-foreground/80">{reasons[p.key]}</p>
            </div>
          ),
        }))}
      />
    </>
  )
}
