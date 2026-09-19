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
  twitter?: string
  instagram?: string
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

/** 標準的なCSV（ダブルクォート・カンマ・改行を含むフィールドに対応）を行ごとの配列に変換する。 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  const pushField = () => {
    row.push(field)
    field = ''
  }
  const pushRow = () => {
    pushField()
    rows.push(row)
    row = []
  }

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      pushField()
    } else if (c === '\r') {
      // skip; \n (or \r\n) ends the row
    } else if (c === '\n') {
      pushRow()
    } else {
      field += c
    }
  }
  if (field.length > 0 || row.length > 0) pushRow()

  return rows.filter((r) => r.some((cell) => cell.trim() !== ''))
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
    twitter: row.twitter?.trim() || undefined,
    instagram: row.instagram?.trim() || undefined,
    facebook: row.facebook?.trim() || undefined,
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

function parsePartnersCsv(csv: string): CosmoPartner[] {
  const rows = parseCsv(csv)
  if (rows.length < 2) return []
  const header = rows[0].map((h) => h.trim())
  return rows
    .slice(1)
    .map((cells) => {
      const record: Record<string, string> = {}
      header.forEach((key, i) => {
        record[key] = cells[i] ?? ''
      })
      return rowToPartner(record)
    })
    .filter((p): p is CosmoPartner => p !== null)
}

/** ビルド時にシートからパートナー一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchCosmoPartners(): Promise<CosmoPartner[]> {
  const url = process.env.COSMOBASE_PARTNERS_CSV_URL
  if (!url) return []
  try {
    const res = await fetch(url)
    if (!res.ok) return []
    const csv = await res.text()
    return parsePartnersCsv(csv)
  } catch {
    return []
  }
}
