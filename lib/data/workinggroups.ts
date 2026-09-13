/**
 * ワーキンググループ（WG）データ。
 * WGは「学生団体とFSIFが、宇宙利用をテーマに議論・検討する場」。
 * 受託開発やコンサルティングではない。deliverable が未作成のものは「議論中」を用い、
 * 架空の報告書を成果物として載せない。
 */
export interface WorkingGroup {
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

export const workingGroups: WorkingGroup[] = [
  {
    name: '宇宙×教育 WG',
    status: '議論中',
    theme: '学生団体の教育活動に宇宙をどう取り入れるか',
    participants: ['教育系学生団体（仮）', 'FSIF'],
    members: 6,
    period: '2026.04 - 継続中',
    discussion: '既存の教育プログラムに宇宙の視点を加える方法を、事例を持ち寄って検討しています。',
    deliverable: '議論中',
  },
  {
    name: '宇宙×ものづくり WG',
    status: '議論中',
    theme: '学生のものづくり活動と宇宙利用の接点を探る',
    participants: ['ものづくり系学生団体（仮）', 'ロケット系サークル（仮）', 'FSIF'],
    members: 8,
    period: '2025.10 - 継続中',
    discussion: '制作物やプロジェクトに宇宙をどう活かせるか、それぞれの専門を持ち寄り議論しています。',
    deliverable: '議論中',
  },
  {
    name: '宇宙×地域・防災 WG',
    status: '募集中',
    theme: '地域活動・防災に宇宙データや衛星利用をどう役立てるか',
    participants: ['地域活動系学生団体（仮）', 'FSIF'],
    members: 5,
    period: '2026.05 - 予定',
    discussion: '衛星データの地域・防災への活用可能性を、参加団体の関心に沿って検討します。',
    deliverable: '議論中',
  },
  {
    name: '宇宙×学生活動 WG',
    status: '終了',
    theme: '学生団体の運営・広報に宇宙のテーマをどう組み込むか',
    participants: ['複数の学生団体（仮）', 'FSIF'],
    members: 7,
    period: '2025.06 - 2025.12',
    discussion: 'それぞれの団体活動に宇宙のテーマを取り入れる方法を議論し、視点を共有しました。',
    deliverable: '議論の記録（内部共有）',
  },
]

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
