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

// パートナーデータは cosmobase-partners.ts でスプレッドシートから取得する。
