import { fetchSheetCsv } from '@/lib/data/csv'

/**
 * ワーキンググループ（WG）データ。
 * WGは「学生団体とFSIFが、宇宙利用をテーマに議論・検討する場」。
 * 受託開発やコンサルティングではない。deliverable が未作成のものは「議論中」を用い、
 * 架空の報告書を成果物として載せない。
 *
 * 運営が管理するGoogleスプレッドシート（「ウェブに公開」のCSVリンク）を
 * ビルド時に取得して生成する。シートのURLは WORKING_GROUPS_CSV_URL
 * （GitHub Actions シークレット）経由でのみ渡し、リポジトリには含めない。
 * シート未設定時（ローカル開発でシークレット未設定など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * id, name, status, theme, participants, members, period, discussion, deliverable
 *
 * participants列は複数の学生団体・チームを "|"（パイプ）区切りで入力する。
 * 例: 教育系学生団体（仮）|FSIF
 */
export interface WorkingGroup {
  /** URLアンカー等に使う一意なキー。 */
  id: string
  name: string
  status: '議論中' | '募集中' | '終了'
  theme: string
  /** 参加している学生団体・チーム。 */
  participants: string[]
  members: number
  period: string
  /** 議論・検討の内容。 */
  discussion: string
  /** 成果物。未作成なら「議論中」。 */
  deliverable: string
}

export const wgStatuses = ['議論中', '募集中', '終了'] as const

/** 議論の想定テーマ例（実施済みとは限らないため「テーマ例」として扱う）。 */
export const wgThemeExamples = [
  '宇宙×ものづくり',
  '宇宙×教育',
  '宇宙×防災',
  '宇宙×地域',
  '宇宙×観光',
  '宇宙×農業',
  '宇宙×エンタメ',
  '宇宙×学生活動',
]

function rowToWorkingGroup(row: Record<string, string>): WorkingGroup | null {
  const id = row.id?.trim()
  const name = row.name?.trim()
  if (!id || !name) return null

  const status = row.status?.trim()

  return {
    id,
    name,
    status: status === '募集中' || status === '終了' ? status : '議論中',
    theme: row.theme?.trim() || '',
    participants: (row.participants ?? '')
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean),
    members: Number(row.members) || 0,
    period: row.period?.trim() || '',
    discussion: row.discussion?.trim() || '',
    deliverable: row.deliverable?.trim() || '議論中',
  }
}

/** ビルド時にシートからワーキンググループ一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchWorkingGroups(): Promise<WorkingGroup[]> {
  const records = await fetchSheetCsv(process.env.WORKING_GROUPS_CSV_URL)
  return records
    .map(rowToWorkingGroup)
    .filter((w): w is WorkingGroup => w !== null)
}
