/**
 * 標準的なCSV（ダブルクォート・カンマ・改行を含むフィールドに対応）を
 * 行ごとの配列に変換する。Googleスプレッドシートの「ウェブに公開」CSV
 * を取り込むデータソース（cosmobase-partners.ts, news.ts）で共有する。
 */
export function parseCsv(text: string): string[][] {
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

/** CSVの行配列をヘッダー行をキーとしたレコードの配列に変換する。 */
export function csvRowsToRecords(rows: string[][]): Record<string, string>[] {
  if (rows.length < 2) return []
  const header = rows[0].map((h) => h.trim())
  return rows.slice(1).map((cells) => {
    const record: Record<string, string> = {}
    header.forEach((key, i) => {
      record[key] = cells[i] ?? ''
    })
    return record
  })
}

/** ビルド時にシートCSVを取得する。未設定・取得失敗時は空配列。 */
export async function fetchSheetCsv(envUrl: string | undefined): Promise<Record<string, string>[]> {
  if (!envUrl) return []
  try {
    const res = await fetch(envUrl)
    if (!res.ok) return []
    const csv = await res.text()
    return csvRowsToRecords(parseCsv(csv))
  } catch {
    return []
  }
}
