import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import Link from 'next/link'
import { PageHero } from '@/components/shared/page-hero'
import { orgDivisions } from '@/lib/data/org'

const title = '組織図'
const description = '代表の直下に3つの事業本部と経営推進本部が並ぶ、4本部体制のFSIFの組織図をご紹介します。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
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

function UnitItem({ unit, nested = false }: { unit: { name: string; href?: string }; nested?: boolean }) {
  const className = nested
    ? 'block rounded-md border border-border bg-surface px-3 py-1.5 text-center text-[0.7rem] text-muted-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue'
    : 'block rounded-md bg-pale-blue px-3 py-2 text-center text-xs text-navy transition-colors hover:bg-pale-blue/70'
  return unit.href ? (
    <Link href={unit.href} className={className}>
      {unit.name}
    </Link>
  ) : (
    <span className={className}>{unit.name}</span>
  )
}

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        labelEn="ORGANIZATION"
        title="組織体制"
        description="代表を起点に、コミュニティ・イベント・シンクタンクの3つの事業本部と、経営推進本部が並ぶ4本部体制です。各本部長は副代表を兼任し、代表・副代表による経営会議で全体方針や本部間の調整を行います。"
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

            {/* Tier 2: 4 divisions */}
            <p className="section-label text-muted-foreground">4 本部体制</p>
            <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {orgDivisions.map((d) => (
                <li key={d.id} className="flex h-full flex-col gap-3 rounded-xl border border-border bg-background p-4">
                  <div className="text-center">
                    <span className="font-mono text-xs font-bold text-fsif-blue">{d.labelEn}</span>
                    <p className="mt-1 text-sm font-bold text-foreground">{d.name}</p>
                    {d.leadName ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {d.leadTitle}: {d.leadName}
                      </p>
                    ) : (
                      <p className="mt-1 inline-block rounded-full border border-dashed border-border px-2 py-0.5 text-[0.65rem] text-muted-foreground">
                        {d.leadTitle}: 空席
                      </p>
                    )}
                  </div>
                  <span className="mx-auto h-4 w-px bg-border" aria-hidden="true" />
                  <ul className="flex flex-col gap-2">
                    {d.units.map((unit) => (
                      <li key={unit.name} className="flex flex-col gap-1.5">
                        <UnitItem unit={unit} />
                        {unit.children && (
                          <ul className="flex flex-col gap-1.5 pl-3">
                            {unit.children.map((child) => (
                              <li key={child.name}>
                                <UnitItem unit={child} nested />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
