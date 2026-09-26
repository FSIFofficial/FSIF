import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventReport } from '@/components/activities/event-report'
import { fetchEvents } from '@/lib/data/events'
import { pageOpenGraph } from '@/lib/site-url'

// The symposium keeps its own dedicated static route at
// /activities/event/SBS24 (app/activities/event/SBS24/page.tsx), so it's
// excluded here to avoid a duplicate static path at build time.
async function getReports() {
  const events = await fetchEvents()
  return events.filter((e) => e.slug !== 'SBS24')
}

export async function generateStaticParams() {
  const reports = await getReports()
  if (reports.length === 0) {
    // EVENTS_CSV_URL 未設定時（ローカル開発など）。output: 'export' は
    // 動的ルートに最低1件のパスを要求するため、404になるダミーを1件返す。
    return [{ slug: '_no-events-configured' }]
  }
  return reports.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const reports = await getReports()
  const item = reports.find((e) => e.slug === slug)
  if (!item) return { title: '報告書が見つかりません' }
  return {
    title: item.title,
    description: item.summary,
    openGraph: pageOpenGraph(item.title, item.summary, item.image),
  }
}

export default async function EventReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const reports = await getReports()
  const item = reports.find((e) => e.slug === slug)
  if (!item) notFound()

  return <EventReport item={item} />
}
