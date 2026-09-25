/**
 * Cosmo Base パートナーデータ。
 * 運営が管理するGoogleスプレッドシート（「ウェブに公開」のCSVリンク）を
 * ビルド時に取得して生成する。シートのURLは COSMOBASE_PARTNERS_CSV_URL
 * （GitHub Actions シークレット）経由でのみ渡し、リポジトリには含めない。
 * シート未設定時（ローカル開発でシークレット未設定など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * id, name, furigana, type, logo, description, detailedDescription,
 * website, twitter, instagram, facebook, note, otherLink1, otherLink2,
 * otherLink3, email, category, established, activities, achievements, newsLink
 */

import { fetchSheetCsv } from '@/lib/data/csv'

export interface CosmoPartner {
  id: string
  name: string
  furigana?: string
  /** 団体種別（例: Corporate Partner）。シート上の自由記述。 */
  type: string
  /** ロゴ画像パス。シートの logo 列の値（例: /CosmoBase/AstroKIT.png）をそのまま使う。未設定なら null。 */
  logo: string | null
  description: string
  detailedDescription?: string
  /** 公式サイトURL（シートの website 列）。未設定なら null。 */
  url: string | null
  /** X (Twitter) のプロフィールURL。シートには @handle 等でもよく、正規化してフルURLにする。 */
  twitter?: string
  /** InstagramのプロフィールURL。シートには @handle 等でもよく、正規化してフルURLにする。 */
  instagram?: string
  /** FacebookのプロフィールURL。シートには handle 等でもよく、正規化してフルURLにする。 */
  facebook?: string
  note?: string
  otherLinks: string[]
  email?: string
  category?: string
  established?: string
  activities?: string
  achievements?: string
  newsLink?: string
}

const snsDomains = {
  twitter: 'https://x.com/',
  instagram: 'https://instagram.com/',
  facebook: 'https://www.facebook.com/',
} as const

/**
 * シートのSNS列（フルURLのこともあれば @handle や handle だけのこともある）を
 * 完全なURLに正規化する。相対URL扱いされて現在ページ配下に飛ぶのを防ぐ。
 */
function toSnsUrl(platform: keyof typeof snsDomains, value: string | undefined): string | undefined {
  const v = value?.trim()
  if (!v) return undefined
  if (/^https?:\/\//i.test(v)) return v
  return snsDomains[platform] + v.replace(/^@/, '')
}

function rowToPartner(row: Record<string, string>): CosmoPartner | null {
  const id = row.id?.trim()
  const name = row.name?.trim()
  if (!id || !name) return null

  const otherLinks = [row.otherLink1, row.otherLink2, row.otherLink3]
    .map((v) => v?.trim())
    .filter((v): v is string => Boolean(v))

  return {
    id,
    name,
    furigana: row.furigana?.trim() || undefined,
    type: row.type?.trim() || '',
    logo: row.logo?.trim() || null,
    description: row.description?.trim() || '',
    detailedDescription: row.detailedDescription?.trim() || undefined,
    url: row.website?.trim() || null,
    twitter: toSnsUrl('twitter', row.twitter),
    instagram: toSnsUrl('instagram', row.instagram),
    facebook: toSnsUrl('facebook', row.facebook),
    note: row.note?.trim() || undefined,
    otherLinks,
    email: row.email?.trim() || undefined,
    category: row.category?.trim() || undefined,
    established: row.established?.trim() || undefined,
    activities: row.activities?.trim() || undefined,
    achievements: row.achievements?.trim() || undefined,
    newsLink: row.newsLink?.trim() || undefined,
  }
}

/** ビルド時にシートからパートナー一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchCosmoPartners(): Promise<CosmoPartner[]> {
  const records = await fetchSheetCsv(process.env.COSMOBASE_PARTNERS_CSV_URL)
  return records
    .map(rowToPartner)
    .filter((p): p is CosmoPartner => p !== null)
}
