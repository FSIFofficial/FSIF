import type { JobPosition, Faq, JobCategory } from '@/lib/types'
import { fetchSheetCsv } from '@/lib/data/csv'

export const jobCategories: JobCategory[] = [
  'イベント企画',
  'コミュニティ運営',
  'デザイン',
  '広報',
  'Web開発',
  'AI活用',
  '企業連携',
  '新規事業',
  '調査研究',
  'PM',
]

export const canDoAreas = [
  { title: 'イベント企画', description: 'シンポジウムやワークショップを企画・運営する。' },
  { title: 'コミュニティ運営', description: 'Cosmo Baseで人と人をつなぎ、場を育てる。' },
  { title: 'デザイン', description: '広報物やプロダクトUIをデザインする。' },
  { title: '広報', description: 'SNSやメディアを通じてFSIFの活動を発信する。' },
  { title: 'Web開発', description: '公式サイトやプロダクトの開発に携わる。' },
  { title: 'AI活用', description: '業務やコンテンツにAIを取り入れ効率化する。' },
  { title: '企業連携', description: '企業・団体との連携やパートナーシップを推進する。' },
  { title: '新規事業', description: '新しいプロジェクトを立ち上げ、形にする。' },
  { title: '調査研究', description: '宇宙産業の動向を調べ、レポートにまとめる。' },
  { title: 'PM', description: 'プロジェクトの進行と成果に責任を持つ。' },
]

/**
 * 募集ポジションデータ。運営が管理するGoogleスプレッドシート（「ウェブに公開」の
 * CSVリンク）をビルド時に取得して生成する。シートのURLは JOB_POSITIONS_CSV_URL
 * （GitHub Actions シークレット）経由でのみ渡し、リポジトリには含めない。
 * シート未設定時（ローカル開発でシークレット未設定など）は空配列を返す。
 *
 * シートのヘッダー（1行目）:
 * slug, title, category, status, commitment, location, description,
 * responsibilities, welcome
 *
 * responsibilities・welcome列は複数項目を "|"（パイプ）区切りで入力する。
 * 例: 企画立案と運営|登壇者・参加者との調整|当日運営とふりかえり
 */

function splitList(value: string | undefined): string[] {
  return (value ?? '')
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean)
}

function rowToJobPosition(row: Record<string, string>): JobPosition | null {
  const slug = row.slug?.trim()
  const title = row.title?.trim()
  if (!slug || !title) return null

  return {
    slug,
    title,
    category: (row.category?.trim() || 'PM') as JobCategory,
    status: (row.status?.trim() || '募集中') as JobPosition['status'],
    commitment: row.commitment?.trim() || '',
    location: row.location?.trim() || '',
    description: row.description?.trim() || '',
    responsibilities: splitList(row.responsibilities),
    welcome: splitList(row.welcome),
  }
}

/** ビルド時にシートから募集ポジション一覧を取得する。未設定・取得失敗時は空配列。 */
export async function fetchJobPositions(): Promise<JobPosition[]> {
  const records = await fetchSheetCsv(process.env.JOB_POSITIONS_CSV_URL)
  return records
    .map(rowToJobPosition)
    .filter((j): j is JobPosition => j !== null)
}

export const memberStories = [
  {
    name: 'Aさん',
    role: 'Web開発 / 大学2年',
    quote: '文系でしたが、肯定してくれる環境で挑戦でき、いまは開発チームで活躍しています。',
    image: '/images/design-session.png',
  },
  {
    name: 'Bさん',
    role: 'イベント企画 / 大学3年',
    quote: 'シンポジウムの運営を任せてもらい、企業の方と直接話せる経験ができました。',
    image: '/images/SBS24R.png',
  },
  {
    name: 'Cさん',
    role: 'コミュニティ運営 / 大学1年',
    quote: '入学してすぐでも任せてもらえる環境で、自分の視野が大きく広がりました。',
    image: '/images/cosmobase.png',
  },
]

export const joinFaqs: Faq[] = [
  {
    question: '未経験でも参加できますか？',
    answer:
      'はい。FSIFは「肯定の組織ですべてに挑戦」を掲げています。多くのメンバーが未経験から活動を始め、実践を通じてスキルを身につけています。',
  },
  {
    question: '宇宙系の専攻でなくても大丈夫ですか？',
    answer:
      '問題ありません。文系・理系・専攻を問わず、さまざまなバックグラウンドのメンバーが活躍しています。デザイン、広報、開発など関わり方は多様です。',
  },
  {
    question: 'どのくらいの頻度で活動しますか？',
    answer:
      'ポジションによりますが、週2〜6時間程度が目安です。案件ベースで関わる形もあり、学業や本業と両立している方が多数です。',
  },
  {
    question: '所属している大学は関係ありますか？',
    answer: '大学は問いません。複数の大学・地域のメンバーがオンラインを中心に協働しています。',
  },
  {
    question: '地方に住んでいても参加できますか？',
    answer:
      'できます。活動はオンラインを基本としているため、全国どこからでも参加可能です。対面イベントは任意参加です。',
  },
  {
    question: 'オンラインだけの参加も可能ですか？',
    answer: '可能です。多くのメンバーがオンライン中心で活動しています。対面での交流機会も別途用意しています。',
  },
  {
    question: '社会人でも参加できますか？',
    answer: '申し訳ございません。FSIFは学生を対象とした組織のため、社会人の方にはご参加いただけません。',
  },
  {
    question: '応募から参加までの流れを教えてください。',
    answer:
      'お問い合わせフォームからのエントリー後、オンライン面談を経て、興味のある事業・ポジションで活動を開始します。',
  },
]

export const joinFlow = [
  { step: '01', title: 'エントリー', description: 'お問い合わせフォームから関心のある領域を添えて応募します。' },
  { step: '02', title: 'オンライン面談', description: 'カジュアルにお話しし、活動内容や希望をすり合わせます。' },
  { step: '03', title: 'オリエンテーション', description: '活動の進め方やツール（Orbit）の使い方を共有します。' },
  { step: '04', title: '活動スタート', description: '興味のある事業・プロジェクトで実際の活動を始めます。' },
]
