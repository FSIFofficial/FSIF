import type { EventItem } from '@/lib/types'
import { fetchSheetCsv } from '@/lib/data/csv'

export const eventTypes = ['主催', '共催', '運営支援', '出展', '登壇', 'ワークショップ'] as const

/**
 * イベント開催実績データ。運営が管理するGoogleスプレッドシート（「ウェブに公開」の
 * CSVリンク）をビルド時に取得して生成する。シートのURLは EVENTS_CSV_URL
 * （GitHub Actions シークレット）経由でのみ渡し、リポジトリには含めない。
 * シート未設定時（ローカル開発でシークレット未設定など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * slug, title, subtitle, date, type, venue, venueDisplay, summary, image,
 * imageAlt, reportType, publishedDate, eventDateDisplay, content,
 * reportPdfLabel, reportPdfHref, reportPdfDownloadName
 *
 * href は /activities/event/{slug} として自動生成するため列は不要。
 */

function rowToEventItem(row: Record<string, string>): EventItem | null {
  const slug = row.slug?.trim()
  const title = row.title?.trim()
  const date = row.date?.trim()
  const type = row.type?.trim() as EventItem['type']
  if (!slug || !title || !date || !eventTypes.includes(type as (typeof eventTypes)[number])) return null

  return {
    slug,
    title,
    date,
    type,
    venue: row.venue?.trim() || '',
    summary: row.summary?.trim() || '',
    image: row.image?.trim() || '',
    imageAlt: row.imageAlt?.trim() || '',
    href: `/activities/event/${slug}`,
    subtitle: row.subtitle?.trim() || undefined,
    reportType: row.reportType?.trim() || undefined,
    publishedDate: row.publishedDate?.trim() || undefined,
    eventDateDisplay: row.eventDateDisplay?.trim() || undefined,
    venueDisplay: row.venueDisplay?.trim() || undefined,
    content: row.content?.trim() || undefined,
    reportPdf: row.reportPdfHref?.trim()
      ? {
          label: row.reportPdfLabel?.trim() || '',
          href: row.reportPdfHref.trim(),
          downloadName: row.reportPdfDownloadName?.trim() || '',
        }
      : undefined,
  }
}

/** ビルド時にシートからイベント一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchEvents(): Promise<EventItem[]> {
  const records = await fetchSheetCsv(process.env.EVENTS_CSV_URL)
  return records
    .map(rowToEventItem)
    .filter((e): e is EventItem => e !== null)
}

/**
 * 宇宙ビジネスシンポジウム2024（開催実績）の概要データ。
 * ホームの FeaturedEvent セクションで使用。詳細な報告内容は
 * events データ内の対応エントリ（slug: 'SBS24'）を参照。
 */
export const symposium2024 = {
  theme: '宇宙産業の新たな夜明け',
  date: '2024年9月28日、29日',
  venue: 'ふれあい貸し会議室五反田No79 ＋ オンライン',
  concept: '企業・研究機関・大学・学生が集い、宇宙産業の未来を語り合いました。講演とパネルディスカッションを実施しました。',
}
