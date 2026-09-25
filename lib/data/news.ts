import type { NewsItem, NewsBody, NewsCategory, BusinessArea, RelatedTag } from '@/lib/types'
import { fetchSheetCsv } from '@/lib/data/csv'

export const newsCategories: NewsCategory[] = [
  'PRESS RELEASE',
  'NEWS',
  'EVENT',
  'PARTNERSHIP',
  'MEDIA',
  'REPORT',
  'PROJECT',
]

export const newsCategoryColor: Record<NewsCategory, string> = {
  'PRESS RELEASE': 'bg-navy text-navy-foreground',
  NEWS: 'bg-fsif-blue text-primary-foreground',
  EVENT: 'bg-accent-blue text-navy',
  PARTNERSHIP: 'bg-pale-blue text-fsif-blue',
  MEDIA: 'bg-foreground text-background',
  REPORT: 'bg-[#0b3a66] text-navy-foreground',
  PROJECT: 'bg-[#123c73] text-navy-foreground',
}

/**
 * ニュース記事データ。運営が管理するGoogleスプレッドシート（「ウェブに公開」の
 * CSVリンク）をビルド時に取得して生成する。シートのURLは NEWS_CSV_URL
 * （GitHub Actions シークレット）経由でのみ渡し、リポジトリには含めない。
 * シート未設定時（ローカル開発でシークレット未設定など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * slug, date, category, title, excerpt, thumbnail, thumbnailAlt,
 * relatedArea, relatedTag, featured, important, lead, body,
 * externalUrlLabel, externalUrlHref, relatedLinkLabel, relatedLinkHref,
 * pdfLabel, pdfHref
 *
 * body列は、見出し・段落・画像を複数セット持てる既存の記事構造をそのまま
 * 保持するため、NewsBody[] をJSON文字列化したものを入力する。
 * 例: [{"paragraphs":["本文1行目"]},{"heading":"見出し","paragraphs":["本文"],"image":"/path.png","imageAlt":"代替テキスト"}]
 */

const truthy = (v: string | undefined) => {
  const s = v?.trim().toLowerCase()
  return s === 'true' || s === '1' || s === 'yes'
}

function parseBody(raw: string | undefined): NewsBody[] {
  const s = raw?.trim()
  if (!s) return []
  try {
    const parsed = JSON.parse(s)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((b): b is Record<string, unknown> => typeof b === 'object' && b !== null)
      .map((b) => ({
        heading: typeof b.heading === 'string' ? b.heading : undefined,
        paragraphs: Array.isArray(b.paragraphs) ? b.paragraphs.filter((p): p is string => typeof p === 'string') : [],
        image: typeof b.image === 'string' ? b.image : undefined,
        imageAlt: typeof b.imageAlt === 'string' ? b.imageAlt : undefined,
      }))
  } catch {
    return []
  }
}

function rowToNewsItem(row: Record<string, string>): NewsItem | null {
  const slug = row.slug?.trim()
  const date = row.date?.trim()
  const title = row.title?.trim()
  if (!slug || !date || !title) return null

  return {
    slug,
    date,
    category: (row.category?.trim() || 'NEWS') as NewsCategory,
    title,
    excerpt: row.excerpt?.trim() || '',
    thumbnail: row.thumbnail?.trim() || '',
    thumbnailAlt: row.thumbnailAlt?.trim() || '',
    relatedArea: (row.relatedArea?.trim() || undefined) as BusinessArea | undefined,
    relatedTag: (row.relatedTag?.trim() || undefined) as RelatedTag | undefined,
    featured: truthy(row.featured) || undefined,
    important: truthy(row.important) || undefined,
    lead: row.lead?.trim() || '',
    body: parseBody(row.body),
    externalUrl:
      row.externalUrlHref?.trim() ? { label: row.externalUrlLabel?.trim() || '', href: row.externalUrlHref.trim() } : undefined,
    relatedLink:
      row.relatedLinkHref?.trim() ? { label: row.relatedLinkLabel?.trim() || '', href: row.relatedLinkHref.trim() } : undefined,
    pdf: row.pdfHref?.trim() ? { label: row.pdfLabel?.trim() || '', href: row.pdfHref.trim() } : undefined,
  }
}

/** ビルド時にシートからニュース一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchNews(): Promise<NewsItem[]> {
  const records = await fetchSheetCsv(process.env.NEWS_CSV_URL)
  return records
    .map(rowToNewsItem)
    .filter((n): n is NewsItem => n !== null)
}

export function getNewsBySlug(all: NewsItem[], slug: string): NewsItem | undefined {
  return all.find((n) => n.slug === slug)
}

export function getFeaturedNews(all: NewsItem[]): NewsItem | undefined {
  return all.find((n) => n.featured) ?? all[0]
}

export function getLatestNews(all: NewsItem[], count = 6): NewsItem[] {
  return [...all]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((n) => !n.featured)
    .slice(0, count)
}

export function getRelatedNews(all: NewsItem[], slug: string, count = 3): NewsItem[] {
  const current = getNewsBySlug(all, slug)
  return all
    .filter((n) => n.slug !== slug)
    .sort((a, b) => {
      const aMatch = current && a.relatedArea === current.relatedArea ? 1 : 0
      const bMatch = current && b.relatedArea === current.relatedArea ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, count)
}

/** ホーム上部の「重要なお知らせ」ティッカーに表示する記事（新しい順）。 */
export function getImportantNews(all: NewsItem[]): NewsItem[] {
  return [...all]
    .filter((n) => n.important)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
