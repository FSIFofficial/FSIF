import type { Metadata } from 'next'
import Image from 'next/image'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { profile, partners } from '@/lib/data/org'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'

const title = '組織概要'
const description = 'FSIF（未来宇宙産業フォーラム）の名称・英語名称・略称・設立・代表・活動拠点・メンバー数・事業・連絡先・SNS。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

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
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <li
                key={p.name}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-4 text-center"
              >
                {p.logo ? (
                  <div className="relative h-16 w-full">
                    <Image src={p.logo} alt={`${p.name} ロゴ`} fill className="object-contain" sizes="200px" />
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center">
                    <span className="font-mono text-xs font-medium text-muted-foreground">{p.name}</span>
                  </div>
                )}
                {p.logo && <span className="text-xs text-muted-foreground">{p.name}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
