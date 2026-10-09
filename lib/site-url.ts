// 本番のサイトの URL(独自ドメイン。CNAME と同じ)。
// 検索エンジン向けの正しい URL(canonical)・sitemap.xml・robots.txt・SNS の画像の URL に使う。
// 以前は GitHub Pages の https://fsifofficial.github.io/FSIF だったため、サイトマップなどが古い URL を指していた
export const SITE_URL = 'https://www.fsif.jp'

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Next.js does not deep-merge `openGraph` across route segments — a page
 * that sets its own `openGraph` fully replaces the parent's, so `images`
 * (and everything else) must be set explicitly on every page or the
 * link-preview card silently loses its image. This keeps that consistent,
 * defaulting to the FSIF logo when a page has no image of its own.
 */
export function pageOpenGraph(title: string, description: string, image?: string) {
  return {
    title,
    description,
    type: 'website' as const,
    locale: 'ja_JP',
    siteName: 'FSIF 未来宇宙産業フォーラム',
    images: [absoluteUrl(image ?? '/FSIF_logo.png')],
  }
}
