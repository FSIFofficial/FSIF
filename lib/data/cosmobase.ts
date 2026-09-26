import { fetchSheetCsv } from '@/lib/data/csv'

export interface CosmoContent {
  id: string
  name: string
  description: string
  /** ロゴ画像パス。未提供なら null（名称入りの中立的な仮枠を表示）。 */
  logo: string | null
  category: string
  /** 確認済みの遷移先。未設定なら null で「準備中」を表示する。 */
  url: string | null
  status: '提供中' | '準備中'
  sortOrder: number
  published: boolean
}

/**
 * Cosmo Base提供コンテンツデータ。運営が管理するGoogleスプレッドシート
 * （「ウェブに公開」のCSVリンク）をビルド時に取得して生成する。シートのURLは
 * COSMOBASE_CONTENTS_CSV_URL（GitHub Actions シークレット）経由でのみ渡し、
 * リポジトリには含めない。シート未設定時（ローカル開発でシークレット未設定
 * など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * id, name, description, logo, category, url, status, sortOrder, published
 */

function rowToCosmoContent(row: Record<string, string>): CosmoContent | null {
  const id = row.id?.trim()
  const name = row.name?.trim()
  if (!id || !name) return null

  return {
    id,
    name,
    description: row.description?.trim() || '',
    logo: row.logo?.trim() || null,
    category: row.category?.trim() || '',
    url: row.url?.trim() || null,
    status: row.status?.trim() === '準備中' ? '準備中' : '提供中',
    sortOrder: Number(row.sortOrder) || 0,
    published: row.published?.trim().toLowerCase() !== 'false',
  }
}

/** ビルド時にシートからCosmo Base提供コンテンツ一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchCosmoContents(): Promise<CosmoContent[]> {
  const records = await fetchSheetCsv(process.env.COSMOBASE_CONTENTS_CSV_URL)
  return records
    .map(rowToCosmoContent)
    .filter((c): c is CosmoContent => c !== null)
}

export function getPublishedContents(all: CosmoContent[]): CosmoContent[] {
  return all.filter((c) => c.published).sort((a, b) => a.sortOrder - b.sortOrder)
}

// パートナーデータは cosmobase-partners.ts でスプレッドシートから取得する。
