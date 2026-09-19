/**
 * Cosmo Base（コミュニティ事業）データ。
 * コンテンツ・パートナーは CMS 接続を想定した型付きデータ。
 * ロゴや URL が未確認のものは status/logo を通じて「準備中」「仮素材」として扱い、
 * published: false のものは公開対象から外せる構造にしている。
 */

export interface CosmoContent {
  id: string
  name: string
  description: string
  /** ロゴ画像パス。未提供なら null（名称入りの中立的な仮枠を表示）。 */
  logo: string | null
  category: string
  /** 確認済みの遷移先。未設定なら null で「準備中」を表示する。 */
  url: string | null
  status: '公開中' | '準備中'
  sortOrder: number
  published: boolean
}

export const cosmoContents: CosmoContent[] = [
  {
    id: 'quiz',
    name: '毎日宇宙クイズ',
    description: '毎日、宇宙に関するクイズをCosmo Base及びSNSで発信中。',
    logo: null,
    category: 'クイズ',
    url: null,
    status: '公開中',
    sortOrder: 1,
    published: true,
  },
  {
    id: 'news',
    name: '週刊宇宙ニュース',
    description: '毎週、宇宙に関するニュースをスライドにまとめて発信しています。',
    logo: null,
    category: 'ニュース',
    url: null,
    status: '公開中',
    sortOrder: 2,
    published: true,
  },
  {
    id: 'type',
    name: '宇宙タイプ診断',
    description: '簡単な問題に回答することで自分のタイプが分かるコンテンツを提供しています。',
    logo: null,
    category: '診断',
    url: null,
    status: '公開中',
    sortOrder: 3,
    published: true,
  },
  {
    id: 'shittoku',
    name: 'Cosmo Baseで宇宙知っトク',
    description: '毎週、水曜日19:00から座談会や、講座、トークセッションなど宇宙に関するオンラインイベントを開催しています。',
    logo: null,
    category: 'イベント',
    url: null,
    status: '公開中',
    sortOrder: 5,
    published: true,
  },
  {
    id: 'oshiete',
    name: 'Cosmo Baseで宇宙教えて',
    description: 'Cosmo Base内では宇宙に関する質問をいつでもできるチャンネルを準備しております。',
    logo: null,
    category: '',
    url: null,
    status: '公開中',
    sortOrder: 6,
    published: true,
  },
  {
    id: 'ittoide',
    name: '宇宙に行っといで',
    description: '運営がおすすめする宇宙に関するイベントを紹介します。',
    logo: null,
    category: 'イベント',
    url: null,
    status: '公開中',
    sortOrder: 7,
    published: true,
  },
  {
    id: 'CBMD',
    name: 'Cosmo Base Museum Databese',
    description: '宇宙系の展示がある博物館を紹介しています。',
    logo: null,
    category: 'イベント',
    url: null,
    status: '公開中',
    sortOrder: 8,
    published: true,
  },
  {
    id: 'CBED',
    name: 'Cosmo Base Event Database',
    description: '全国で開催される宇宙に関するイベント一覧を公開しています。',
    logo: null,
    category: 'イベント',
    url: null,
    status: '公開中',
    sortOrder: 8,
    published: true,
  },
  {
    id: 'ittekita',
    name: '宇宙のイベント行ってきた',
    description: '運営メンバーが宇宙に関するイベントに行ってきた際に、不定期でイベントレポートを配信します。',
    logo: null,
    category: 'イベント',
    url: null,
    status: '準備中',
    sortOrder: 9,
    published: true,
  },
  {
    id: 'CBL',
    name: 'Cosmo Base Library',
    description: 'Cosmo Base内で公開された資料や、運営団体である未来宇宙産業フォーラムが収集した情報などをデータベースとして格納しています。',
    logo: null,
    category: '資料',
    url: null,
    status: '公開中',
    sortOrder: 10,
    published: true,
  },
  {
    id: 'match',
    name: 'Cosmo Match',
    description: '',
    logo: null,
    category: 'マッチング',
    url: null,
    status: '公開中',
    sortOrder: 4,
    published: true,
  },
  {
    id: 'voyager',
    name: 'Space Voyager',
    description: 'レベル確認などに利用していただける検定制度。宇宙に関する検定の他に、コミュニティーでの権限が一気に増える「Space Navigator」の認定なども行います。',
    logo: null,
    category: '体験',
    url: null,
    status: '準備中',
    sortOrder: 11,
    published: true,
  },
  {
    id: 'CBM',
    name: 'Cosmo Base Media',
    description: '宇宙系の記事やレポートを届けるメディア。',
    logo: null,
    category: 'メディア',
    url: null,
    status: '公開中',
    sortOrder: 12,
    published: true,
  },
]

export function getPublishedContents(): CosmoContent[] {
  return cosmoContents.filter((c) => c.published).sort((a, b) => a.sortOrder - b.sortOrder)
}

export type CosmoPartnerType =
  | 'Corporate Partner'
  | 'Organization Partner'
  | 'Student Organization'
  | 'Academic Partner'
  | 'Media Partner'
  | 'Special Partner'

export interface CosmoPartner {
  id: string
  name: string
  /** ロゴ画像パス。未提供なら null（名称入りの中立的な仮枠を表示）。 */
  logo: string | null
  type: CosmoPartnerType
  description: string
  /** 確認済みの公式 URL。未設定なら null。 */
  url: string | null
  sortOrder: number
  published: boolean
}

/**
 * 仮のパートナーデータ。実データ確認前のサンプルであり、公開前に差し替える。
 * 件数は published: true のユニークな件数のみをカウントする。
 */
export const cosmoPartners: CosmoPartner[] = [
  { id: 'p1', name: 'Aerospace Corp（仮）', logo: null, type: 'Corporate Partner', description: '宇宙関連企業。', url: null, sortOrder: 1, published: true },
  { id: 'p2', name: 'Orbital Systems（仮）', logo: null, type: 'Corporate Partner', description: '宇宙システム開発企業。', url: null, sortOrder: 2, published: true },
  { id: 'p3', name: '未来科学研究所（仮）', logo: null, type: 'Academic Partner', description: '研究機関。', url: null, sortOrder: 3, published: true },
  { id: 'p4', name: '東央大学 宇宙研究会（仮）', logo: null, type: 'Student Organization', description: '大学の宇宙系学生団体。', url: null, sortOrder: 4, published: true },
  { id: 'p5', name: 'Rocket Club（仮）', logo: null, type: 'Student Organization', description: 'ロケット制作の学生団体。', url: null, sortOrder: 5, published: true },
  { id: 'p6', name: 'Space Media（仮）', logo: null, type: 'Media Partner', description: '宇宙分野のメディア。', url: null, sortOrder: 6, published: true },
  { id: 'p7', name: 'Cosmo Circle（仮）', logo: null, type: 'Organization Partner', description: '宇宙好きが集まる団体。', url: null, sortOrder: 7, published: true },
  { id: 'p8', name: '北都大学（仮）', logo: null, type: 'Academic Partner', description: '連携大学。', url: null, sortOrder: 8, published: true },
]

export const cosmoPartnerTypes: CosmoPartnerType[] = [
  'Corporate Partner',
  'Organization Partner',
  'Student Organization',
  'Academic Partner',
  'Media Partner',
  'Special Partner',
]

export function getPublishedPartners(): CosmoPartner[] {
  return cosmoPartners.filter((p) => p.published).sort((a, b) => a.sortOrder - b.sortOrder)
}

/** 公開中のユニークなパートナー数（複製ロゴは含めない）。 */
export const cosmoPartnerCount = getPublishedPartners().length
