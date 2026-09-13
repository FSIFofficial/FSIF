import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventReport } from '@/components/activities/event-report'
import { events } from '@/lib/data/events'

// The symposium keeps its own dedicated static route at
// /activities/event/space-business-symposium-2024, so it's excluded here.
const reports = events.filter((e) => e.href === `/activities/event/${e.slug}`)

function getReportBySlug(slug: string) {
  return reports.find((e) => e.slug === slug)
}

export function generateStaticParams() {
  return reports.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getReportBySlug(slug)
  if (!item) return { title: '報告書が見つかりません' }
  return {
    title: item.title,
    description: item.summary,
  }
}

export default async function EventReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getReportBySlug(slug)
  if (!item) notFound()

  return <EventReport item={item} />
}
