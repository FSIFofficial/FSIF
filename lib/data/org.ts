import type { LeadershipMember, HistoryEntry, Partner } from '@/lib/types'

export const profile = {
  rows: [
    { label: '名称', value: '未来宇宙産業フォーラム' },
    { label: '英語名称', value: 'Future Space Industry Forum' },
    { label: '略称', value: 'FSIF' },
    { label: '設立', value: '2023年' },
    { label: '代表', value: '眞鍋 和士' },
    { label: '活動拠点', value: 'オンラインを併用し全国で活動' },
    { label: 'メンバー数', value: '約20名' },
    { label: '事業領域', value: 'コミュニティ / ワーキンググループ / イベント / シンクタンク' },
    { label: 'プロダクト', value: 'Orbit（FSIF発の自主開発ツール）' },
    { label: '連絡先', value: 'fsif.official＠gmail.com' },
    { label: 'SNS', value: 'X / Instagram / Facebook / note / YouTube' },
  ],
}

export const leadership: LeadershipMember[] = [
  {
    id: 'representative',
    name: '眞鍋 和士',
    nameEn: 'Manabe Kazuto',
    role: '代表',
    area: '全体統括',
    image: '/images/Manabe.jpg',
    bio: '大学在学中にFSIFを立ち上げ。宇宙産業と社会の接点づくりに取り組む。「一番身近な宇宙の専門家」を掲げる。',
    message:
      '宇宙は、限られた人のものではありません。学ぶ人、働く人、応援する人。すべての人がそれぞれの距離で宇宙とかかわれる社会を、仲間とともにつくっていきます。',
    career: [
      { date: '2023年4月', text: '神奈川大学工学部機械工学科　入学' },
      { date: '2023年9月', text: '未来宇宙産業フォーラム　立ち上げ' },
      { date: '2023年12月', text: '神奈川大学宇宙ロケット部　部長就任' },
      { date: '2025年2月', text: 'CMC3期生として参加' },
      { date: '2025年4月', text: 'コミュニティコーディネーター養成プログラム1期生として参加' },
      { date: '2025年5月', text: '神奈川大学宇宙ロケット部　広報代表就任' },
      { date: '2025年12月', text: 'ソフトバンク生成AI活用アイデアコンテスト　7位/23位受賞' },
      { date: '2026年2月', text: 'CMC4期生として参加' },
      { date: '2026年5月', text: "MIRAI CREATOR'Z 2026　選出" },
      { date: '2026年5月', text: "MIRAI CREATOR'Z 2026　若者実行委員会" },
    ],
  },
  {
    id: 'coo',
    name: '後藤 槻成',
    nameEn: 'Goto Kinari',
    role: '副代表 / コミュニティ事業責任者',
    area: 'コミュニティ事業',
    image: '/images/Kinari.jpg',
    bio: '複数の事業運営を統括するとともに、Cosmo Baseの立ち上げと運営を担当。誰もが参加できる場づくりに情熱を注ぐ。',
    career: [
      { date: '2023年4月', text: '慶應義塾大学理工学部機械工学科　入学' },
      { date: '2023年4月', text: '慶應義塾大学公認学生団体　宇宙科学総合研究会 LYNCS　入会' },
      { date: '2023年12月', text: '未来宇宙産業フォーラム　入会' },
      { date: '2026年6月', text: "MIRAI CREATOR'Z 2026　選出" },
    ],
  },
]

export const history: HistoryEntry[] = [
  {
    year: '2023',
    date: '2023.09',
    title: 'FSIF設立',
    description: '「宇宙をみんなのものにする」を掲げ、学生を中心に未来宇宙産業フォーラムを設立。',
    image: '/images/member.png',
    imageAlt: '宇宙ビジネスシンポジウム2024でのメンバーの集合写真',
  },
  {
    year: '2023',
    date: '2023.09',
    title: 'ワークショップイベントを初開催',
    description: '宇宙の店にてワークショップ形式のイベントを初開催。',
    image: '/images/workshop.png',
    imageAlt: 'ワークショップイベントの告知',
  },
  {
    year: '2024',
    date: '2024.11',
    title: '宇宙ビジネスシンポジウムを初開催',
    description: '第1回シンポジウムを開催。宇宙産業を語り合う場のはじまり。',
    image: '/images/SBS24.png',
    imageAlt: '宇宙ビジネスシンポジウム2024の様子',
  },
  {
    year: '2026',
    date: '2026.04',
    title: 'Cosmo Base 本格始動',
    description: '学ぶ・つながる・体験するコミュニティ「Cosmo Base」を本格的に立ち上げ。',
    image: '/images/cosmobase.png',
    imageAlt: 'Cosmo Base',
  },
  {
    year: '2026',
    date: '2026.08',
    title: 'Orbit 開発開始',
    description: '組織運営の課題を解決するプラットフォーム「Orbit」の開発に着手。',
    image: '/images/orbit-team.png',
    imageAlt: 'Orbit開発',
  },
  {
    year: '2026',
    date: '2026.08',
    title: '全日本学生ものづくりEXPO 出展',
    description: 'プロダクトとコミュニティの取り組みを、全国の学生に向けて紹介。',
    image: '/images/booth.png',
    imageAlt: 'EXPO出展',
  },
]

export const partners: Partner[] = [
  { name: 'KARURA Project', category: '学生団体', href: '/contact' },
  { name: 'iSIO', category: '一般社団法人', href: '/contact' },
  { name: 'Union', category: '学生団体', href: '/contact' },
  { name: 'なんだっけ？', category: '', href: '/contact' },
]
