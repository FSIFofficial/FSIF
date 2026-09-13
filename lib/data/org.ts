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
    image: '/images/representative.png',
    bio: '大学在学中にFSIFを立ち上げ。宇宙産業と社会の接点づくりに取り組む。「一番身近な宇宙の専門家」を掲げる。',
    message:
      '宇宙は、限られた人のものではありません。学ぶ人、働く人、応援する人。すべての人がそれぞれの距離で宇宙とかかわれる社会を、仲間とともにつくっていきます。',
  },
  {
    id: 'coo',
    name: '後藤 槻成',
    nameEn: 'Goto Kinari',
    role: '副代表',
    area: '経営・執行',
    image: '/images/about-collab.png',
    bio: '複数の事業運営を統括。Orbitの活用を通じた組織づくりを推進する。',
  },
  {
    id: 'community-lead',
    name: '後藤 槻成',
    nameEn: 'Goto Kinari',
    role: '事業責任者',
    area: 'コミュニティ事業',
    image: '/images/cosmobase.png',
    bio: 'Cosmo Baseの立ち上げと運営を担当。誰もが参加できる場づくりに情熱を注ぐ。',
  },
  {
    id: 'event-lead',
    name: 'イベント事業責任者',
    nameEn: 'Event Lead',
    role: '事業責任者',
    area: 'イベント事業',
    image: '/images/event-networking.png',
    bio: '宇宙ビジネスシンポジウムをはじめ、共創の場の企画・運営を統括する。',
  },
  {
    id: 'thinktank-lead',
    name: 'シンクタンク事業責任者',
    nameEn: 'Think Tank Lead',
    role: '事業責任者',
    area: 'シンクタンク事業',
    image: '/images/research.png',
    bio: '宇宙産業の調査・分析を担当。レポートや提言を通じて社会に発信する。',
  },
  {
    id: 'wg-lead',
    name: 'ワーキンググループ事業責任者',
    nameEn: 'Working Group Lead',
    role: '事業責任者',
    area: 'ワーキンググループ事業',
    image: '/images/design-session.png',
    bio: '学生団体とFSIFが宇宙利用を議論するワーキンググループの運営を統括する。',
  },
  {
    id: 'product-lead',
    name: 'プロダクト開発責任者',
    nameEn: 'Product Lead',
    role: 'プロダクト責任者',
    area: 'プロダクト（Orbit）',
    image: '/images/orbit-team.png',
    bio: 'FSIF発の自主開発ツールOrbitの開発をリード。活動から生まれた課題をプロダクトとして形にする。',
  },
]

export const history: HistoryEntry[] = [
  {
    year: '2023',
    date: '2023.09',
    title: 'FSIF設立',
    description: '「宇宙をみんなのものにする」を掲げ、学生を中心に未来宇宙産業フォーラムを設立。',
    image: '/images/group.png',
    imageAlt: '設立時のメンバー',
  },
  {
    year: '2023',
    date: '2023.09',
    title: 'ワークショップイベントを初開催',
    description: '宇宙の店にてワークショップ形式のイベントを初開催。',
    image: '/images/panel-speakers.png',
    imageAlt: 'FSID',
  },
  {
    year: '2024',
    date: '2024.11',
    title: '宇宙ビジネスシンポジウムを初開催',
    description: '第1回シンポジウムを開催。宇宙産業を語り合う場のはじまり。',
    image: '/images/panel-speakers.png',
    imageAlt: '第1回シンポジウム',
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
    image: '/images/expo-booth.png',
    imageAlt: 'EXPO出展',
  },
]

export const partners: Partner[] = [
  { name: 'KARURA Project', category: '学生団体', href: '/contact' },
  { name: 'iSIO', category: '一般社団法人', href: '/contact' },
  { name: 'Union', category: '学生団体', href: '/contact' },
  { name: 'なんだっけ？', category: '', href: '/contact' },
]
