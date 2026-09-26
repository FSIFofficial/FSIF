import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'
import { fetchNews } from '@/lib/data/news'
import { fetchEvents } from '@/lib/data/events'
import { leadership } from '@/lib/data/org'

// output: 'export' (静的サイト生成) では、メタデータルートを事前に
// 固定出力させるため force-static の指定が必須。
export const dynamic = 'force-static'

/**
 * サイトマップ。検索エンジンがサイト全体を効率よくクロール・インデックス
 * できるよう、静的ページと動的ルート（ニュース・イベント報告書・
 * 経営メンバー個別ページ）を網羅する。
 */

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about/philosophy', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/about/message', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/about/leadership', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/organization', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/about/profile', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about/history', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/about/brand', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/activities', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/activities/community', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/activities/community/cosmobase', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/activities/community/cosmobase/partners', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/activities/event', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/activities/thinktank', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/activities/working-group', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/join', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/news', priority: 0.8, changeFrequency: 'daily' },
  { path: '/product', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/product/orbit', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/search', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/social-media-policy', priority: 0.3, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await fetchNews()
  const events = await fetchEvents()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const newsEntries: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${SITE_URL}/news/${n.slug}`,
    lastModified: n.date,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  const eventEntries: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${SITE_URL}/activities/event/${e.slug}`,
    lastModified: e.publishedDate,
    changeFrequency: 'yearly',
    priority: 0.4,
  }))

  const leadershipEntries: MetadataRoute.Sitemap = leadership.map((m) => ({
    url: `${SITE_URL}/about/leadership/${m.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticEntries, ...newsEntries, ...eventEntries, ...leadershipEntries]
}
