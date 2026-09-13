import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { profile, partners } from '@/lib/data/org'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'

export const metadata: Metadata = {
  title: '組織概要',
  description: 'FSIF（未来宇宙産業フォーラム）の名称・英語名称・略称・設立・代表・活動拠点・メンバー数・事業・連絡先・SNS。',
}

const partnerGroups = ['企業', '大学', '行政・研究機関', '学生団体'] as const

export default function ProfilePage() {
  return (
    <>
      <PageHero
        labelEn="PROFILE"
        title="組織概要"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'PROFILE' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif">
          <SectionHeading labelEn="ORGANIZATION PROFILE" title="組織概要" />
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {profile.rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="font-mono text-sm font-medium text-muted-foreground">{row.label}</dt>
                <dd className="text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading labelEn="PARTNERS" title="パートナー一覧" />
            <CtaLink href="/contact" variant="text" className="pb-1">連携について相談する</CtaLink>
          </div>
          <div className="mt-10 space-y-10">
            {partnerGroups.map((group) => {
              const groupPartners = partners.filter((p) => p.category === group)
              if (!groupPartners.length) return null
              return (
                <div key={group}>
                  <h3 className="section-label mb-4 text-muted-foreground">{group}</h3>
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {groupPartners.map((p) => (
                      <li
                        key={p.name}
                        className="flex h-20 items-center justify-center rounded-lg border border-border bg-surface px-4 text-center font-mono text-sm text-muted-foreground"
                      >
                        {p.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
