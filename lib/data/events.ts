import type { EventItem } from '@/lib/types'

export const eventTypes = ['主催', '共催', '運営支援', '出展', '登壇', 'ワークショップ'] as const

export const events: EventItem[] = [
  {
    slug: 'symposium-2024',
    title: '宇宙ビジネスシンポジウム2024',
    date: '2024-11-16',
    type: '主催',
    venue: '東京・大学ホール',
    summary: '企業・研究機関・大学・学生が集い、宇宙産業の未来を語り合った開催実績。基調講演、パネル、学生ピッチ、交流会を実施しました。',
    image: '/images/symposium.png',
    imageAlt: '宇宙ビジネスシンポジウム2024の会場',
    href: '/activities/event/space-business-symposium-2024',
  },
  {
    slug: 'monozukuri-expo-2026',
    title: '全日本学生ものづくりEXPO 出展',
    date: '2026-02-18',
    type: '出展',
    venue: '幕張メッセ',
    summary: '学生の制作物が集まるEXPOに出展。OrbitとCosmo Baseの取り組みを紹介しました。',
    image: '/images/expo-booth.png',
    imageAlt: 'EXPOのブース',
    href: '/news/monozukuri-expo-report',
  },
  {
    slug: 'satellite-workshop-2026',
    title: '衛星モデル制作ワークショップ',
    date: '2026-02-04',
    type: 'ワークショップ',
    venue: 'FSIFラボ（オンライン併用）',
    summary: '手を動かして宇宙を学ぶワークショップ。チームで衛星モデルの制作に挑戦しました。',
    image: '/images/workshop.png',
    imageAlt: 'ワークショップの様子',
    href: '/activities/working-group',
  },
  {
    slug: 'university-seminar-2026',
    title: '大学連携キャリアセミナー',
    date: '2026-05-11',
    type: '登壇',
    venue: '都内大学キャンパス',
    summary: '専攻を問わず宇宙に関われることを、活動事例とともに紹介しました。',
    image: '/images/presentation.png',
    imageAlt: 'セミナー登壇',
    href: '/activities/event',
  },
  {
    slug: 'industry-exhibition-2025',
    title: '産学連携展示イベント',
    date: '2025-07-19',
    type: '共催',
    venue: '大阪・産業展示館',
    summary: '企業と大学の連携により、宇宙産業の裾野を紹介する展示イベントを共催しました。',
    image: '/images/exhibition.png',
    imageAlt: '展示イベント',
    href: '/activities/event',
  },
  {
    slug: 'community-meetup-2025',
    title: 'Cosmo Base 月例ミートアップ',
    date: '2025-10-05',
    type: '主催',
    venue: 'オンライン',
    summary: '参加者が近況やテーマを持ち寄って交流する、月に一度のミートアップ。',
    image: '/images/cosmobase.png',
    imageAlt: 'ミートアップ',
    href: '/activities/community/cosmobase',
  },
  {
    slug: 'research-forum-2025',
    title: '宇宙産業リサーチフォーラム 運営支援',
    date: '2025-09-12',
    type: '運営支援',
    venue: '東京・大学ホール',
    summary: '研究機関主催のフォーラムで、企画・運営を支援しました。',
    image: '/images/research.png',
    imageAlt: 'リサーチフォーラム',
    href: '/activities/thinktank',
  },
]

/**
 * 宇宙ビジネスシンポジウム（開催実績）データ。
 * 現時点で開催実績は 2024 の 1 回のみ。年度別シリーズとしては扱わない。
 * 登壇者・協賛・参加者数など未確認の項目は sample フラグで「仮素材」と明示し、
 * 公開前に確認済みデータへ差し替える前提で構造化している。
 */
export interface SymposiumRecord {
  year: string
  theme: string
  date: string
  venue: string
  audience: string
  concept: string
  /** 確認済みの参加者数。未確定なら null（画面には出さない）。 */
  attendance: number | null
  speakers: { name: string; role: string; org: string }[]
  program: { time: string; title: string; detail: string }[]
  sponsors: string[]
  gallery: { image: string; alt: string }[]
  report?: string
  /** true の場合、登壇者・協賛などが仮素材であることを明示する。 */
  sample: boolean
}

export const symposium2024: SymposiumRecord = {
  year: '2024',
  theme: 'はじまりの一歩 — 立場を越えて宇宙産業を語る',
  date: '2024年11月16日（土）',
  venue: '東京・大学ホール',
  audience: '企業・研究機関・大学・学生・一般',
  concept:
    '学生主体で立ち上げた、宇宙ビジネスを語り合う場のはじまり。専攻や立場を越えて宇宙に関わる人が出会い、新しい共創のきっかけが生まれました。',
  attendance: null,
  speakers: [
    { name: '登壇者（仮）', role: '基調講演', org: '宇宙関連企業' },
    { name: '登壇者（仮）', role: 'パネリスト', org: '研究機関' },
    { name: '登壇者（仮）', role: 'パネリスト', org: '大学' },
    { name: '学生ピッチ登壇者（仮）', role: 'ピッチ', org: 'FSIF' },
  ],
  program: [
    { time: '14:00', title: '開会・オープニング', detail: '主催者挨拶とシンポジウムの趣旨説明。' },
    { time: '14:15', title: '基調講演', detail: '宇宙産業の最前線と、これからの裾野の広げ方。' },
    { time: '15:30', title: 'パネルディスカッション', detail: '立場を越えた登壇者が未来を議論。' },
    { time: '16:45', title: '学生ピッチ', detail: '学生が自らのプロジェクトを発表。' },
    { time: '17:30', title: '交流会', detail: '登壇者と参加者が語り合うネットワーキング。' },
  ],
  sponsors: ['協賛（仮）A', '協賛（仮）B'],
  gallery: [
    { image: '/images/panel-speakers.png', alt: 'パネルディスカッションの様子（仮素材）' },
    { image: '/images/presentation.png', alt: '登壇の様子（仮素材）' },
    { image: '/images/symposium.png', alt: '会場全景（仮素材）' },
  ],
  sample: true,
}
