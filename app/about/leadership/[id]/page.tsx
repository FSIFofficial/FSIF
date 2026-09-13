import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PageHero } from '@/components/shared/page-hero'
import { CtaLink } from '@/components/ui/cta-link'
import { leadership } from '@/lib/data/org'

function getMemberById(id: string) {
  return leadership.find((m) => m.id === id)
}

export function generateStaticParams() {
  return leadership.map((m) => ({ id: m.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const member = getMemberById(id)
  if (!member) return { title: 'メンバーが見つかりません' }
  return {
    title: `${member.name} | 経営・執行メンバー`,
    description: member.bio,
  }
}

export default async function LeadershipMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = getMemberById(id)
  if (!member) notFound()

  return (
    <>
      <PageHero
        labelEn="LEADERSHIP"
        title={member.name}
        description={`${member.role} / ${member.nameEn}`}
        breadcrumbs={[
          { label: 'ABOUT', href: '/about' },
          { label: 'LEADERSHIP', href: '/about/leadership' },
          { label: member.name },
        ]}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-fsif">
          <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:gap-10">
            <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-xl bg-pale-blue">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={`${member.name}のプロフィール写真`}
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="section-label text-fsif-blue">{member.area}</span>
              <h2 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">{member.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {member.role} / {member.nameEn}
              </p>
              <p className="mt-4 leading-relaxed text-foreground/90">{member.bio}</p>
              {member.message && (
                <blockquote className="mt-5 rounded-lg border-l-2 border-fsif-blue bg-pale-blue/50 p-4 text-sm leading-relaxed text-foreground/80">
                  {member.message}
                </blockquote>
              )}
            </div>
          </div>

          {member.career && member.career.length > 0 && (
            <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-8 sm:ml-[calc(220px+2.5rem)] sm:mt-8">
              <p className="section-label text-fsif-blue">経歴</p>
              <ol className="mt-4 space-y-3">
                {member.career.map((c, i) => (
                  <li key={i} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                    <span className="shrink-0 font-mono text-xs text-muted-foreground sm:w-24">{c.date}</span>
                    <span className="text-sm text-foreground/90">{c.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-12">
            <CtaLink href="/about/leadership" variant="secondary">
              経営・執行メンバー一覧へ
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  )
}
