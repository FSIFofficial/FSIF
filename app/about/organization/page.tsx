import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/page-hero'
import { activities } from '@/lib/data/home'

export const metadata: Metadata = {
  title: '組織図',
  description: '代表から経営・執行、4つの事業、そしてプロダクトまで。FSIFの組織体制をご紹介します。',
}

const projectsByArea: Record<string, string[]> = {
  community: ['Cosmo Base'],
  'working-group': ['各テーマWG'],
  event: ['宇宙ビジネスシンポジウム2024'],
  thinktank: ['調査レポート'],
}

function Node({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-5 py-3 text-center ${
        accent ? 'border-fsif-blue bg-fsif-blue text-primary-foreground' : 'border-border bg-surface text-foreground'
      }`}
    >
      {children}
    </div>
  )
}

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        labelEn="ORGANIZATION"
        title="組織体制"
        description="代表を起点に、経営・執行が全体を支え、4つの事業がそれぞれの取り組みを推進します。プロダクト開発もここから生まれます。"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'ORGANIZATION' }]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-wide">
          <div className="flex flex-col items-center gap-6">
            {/* Tier 1 */}
            <Node accent>
              <span className="font-bold">代表 / Representative</span>
            </Node>
            <span className="h-6 w-px bg-border" aria-hidden="true" />

            {/* Tier 2 */}
            <Node>
              <span className="font-medium">経営・執行 / Management & Operations</span>
            </Node>
            <span className="h-6 w-px bg-border" aria-hidden="true" />

            {/* Tier 3: 4 business areas */}
            <p className="section-label text-muted-foreground">4 BUSINESS AREAS</p>
            <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4">
              {activities.map((a) => (
                <li key={a.id} className="flex flex-col items-center gap-3">
                  <Link href={a.href} className="w-full">
                    <div className="rounded-lg border border-border bg-background px-3 py-4 text-center transition-colors hover:border-fsif-blue">
                      <span className="font-mono text-xs font-bold text-fsif-blue">{a.number}</span>
                      <p className="mt-1 text-sm font-bold text-foreground">{a.labelJa}</p>
                      <p className="mt-0.5 font-mono text-[0.6rem] tracking-wide text-muted-foreground">
                        {a.labelEn}
                      </p>
                    </div>
                  </Link>
                  <span className="h-4 w-px bg-border" aria-hidden="true" />
                  <ul className="flex w-full flex-col gap-2">
                    {(projectsByArea[a.id] ?? []).map((proj) => (
                      <li
                        key={proj}
                        className="rounded-md bg-pale-blue px-3 py-2 text-center text-xs text-navy"
                      >
                        {proj}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* PRODUCT: 活動から生まれる自主開発ツール */}
            <span className="mt-2 h-6 w-px bg-border" aria-hidden="true" />
            <p className="section-label text-muted-foreground">PRODUCT</p>
            <Link href="/product/orbit" className="w-full max-w-xs">
              <div className="rounded-lg border border-border bg-background px-4 py-4 text-center transition-colors hover:border-fsif-blue">
                <p className="text-sm font-bold text-foreground">Orbit</p>
                <p className="mt-0.5 text-xs text-muted-foreground">FSIF発の自主開発ツール</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
