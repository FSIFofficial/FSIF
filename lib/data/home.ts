import type { HeroSlide, Philosophy, Stat, Activity } from '@/lib/types'

export const heroSlides: HeroSlide[] = [
  {
    id: 'brand',
    eyebrow: 'FUTURE SPACE INDUSTRY FORUM',
    copy: '宇宙を、みんなのものにする。',
    sub: 'すべての人に、宇宙とかかわる選択肢を。',
    cta: { label: 'FSIFについて', href: '/about' },
    image: '/images/member.png',
    imageAlt: '宇宙ビジネスシンポジウム2024でのメンバーの集合写真',
  },
  {
    id: 'cosmobase',
    eyebrow: 'COMMUNITY / COSMO BASE',
    copy: '宇宙への一歩を、ここから。',
    sub: '学ぶ。つながる。体験する。誰もが参加できる宇宙コミュニティ。',
    cta: { label: 'Cosmo Baseを見る', href: '/activities/community/cosmobase' },
    image: '/images/cosmobase.png',
    imageAlt: 'Cosmo Baseのコミュニティで交流する参加者たち',
  },
  {
    id: 'event',
    eyebrow: 'ACTIVITY / EVENT',
    copy: '宇宙を、人と人が出会う場所へ。',
    sub: '立場と分野を越え、新しい共創が始まる場をつくる。',
    cta: { label: 'イベント事業を見る', href: '/activities/event' },
    image: '/images/event-networking.png',
    imageAlt: 'イベントで交流する参加者たち',
  },
  {
    id: 'orbit',
    eyebrow: 'PRODUCT / ORBIT',
    copy: 'タスクを打ち上げ、組織を軌道に乗せる。',
    sub: 'タスク管理、人材管理、人材育成をつなぐ組織運営プラットフォーム。',
    cta: { label: 'Orbitを見る', href: '/product/orbit' },
    image: '/images/orbit-team.png',
    imageAlt: 'Orbitを開発・活用するチーム',
  },
  {
    id: 'latest',
    eyebrow: 'LATEST ACTIVITY',
    copy: '挑戦が、次の可能性をひらく。',
    sub: '全日本学生ものづくりEXPOへの出展レポート。',
    cta: { label: '活動レポートを読む', href: '/news/monozukuri-expo-report' },
    image: '/images/booth.png',
    imageAlt: '全日本学生ものづくりEXPOのFSIF出展ブース',
  },
]

export const philosophies: Philosophy[] = [
  {
    key: 'mission',
    labelEn: 'MISSION',
    labelJa: 'ミッション',
    statement: 'すべての人に宇宙とかかわる「選択肢」をつくる',
    description:
      '宇宙は一部の専門家だけのものではありません。学ぶ、働く、参加する、応援する。人それぞれの距離感で宇宙とかかわれる選択肢を、社会のあらゆる場所に増やしていきます。',
  },
  {
    key: 'vision',
    labelEn: 'VISION',
    labelJa: 'ビジョン',
    statement: '宇宙をみんなのものにする',
    description:
      '宇宙産業の裾野を広げ、立場や分野を越えて人が出会い、共創する。その積み重ねが、宇宙を「みんなのもの」に変えていくと私たちは信じています。',
  },
  {
    key: 'value',
    labelEn: 'VALUE',
    labelJa: 'バリュー',
    statement: '肯定の組織で、すべてに挑戦',
    description:
      'まずやってみる。互いの挑戦を否定せず、可能性から考える。肯定を土台にすることで、経験の有無を越えて一人ひとりが主体的に動ける組織をつくります。',
  },
  {
    key: 'purpose',
    labelEn: 'PURPOSE',
    labelJa: 'パーパス',
    statement: '一番身近な宇宙の専門家',
    description:
      '難しく思われがちな宇宙を、わかりやすく、参加しやすい形で届ける。専門性と親しみやすさの両方を持つ、社会にとって一番身近な宇宙の入口であり続けます。',
  },
]

export const homeStats: Stat[] = [
  { value: 2023, suffix: '', label: '設立', labelEn: 'FOUNDED' },
  { value: 100, suffix: '+', label: '接点を持った企業・団体', labelEn: 'ORGANIZATIONS' },
  { value: 20, suffix: '+', label: 'イベント・プロジェクト', labelEn: 'PROJECTS & EVENTS' },
  { value: 1000, suffix: '+', label: 'コミュニティコンテンツ総回答者', labelEn: 'COMMUNITY RESPONSES' },
  { value: 4, suffix: '', label: '主要事業領域', labelEn: 'BUSINESS AREAS' },
]

export const activities: Activity[] = [
  {
    id: 'community',
    number: '01',
    labelEn: 'COMMUNITY',
    labelJa: 'コミュニティ事業',
    description: '学ぶ・つながる・体験する。誰もが参加できる宇宙コミュニティを運営します。',
    image: '/images/cosmobase.png',
    imageAlt: 'コミュニティ事業の活動風景',
    href: '/activities/community',
  },
  {
    id: 'working-group',
    number: '02',
    labelEn: 'WORKING GROUP',
    labelJa: 'ワーキンググループ事業',
    description: 'テーマごとに有志が集い、調査や企画を具体的なアウトプットへ形にします。',
    image: '/images/design-session.png',
    imageAlt: 'ワーキンググループの議論風景',
    href: '/activities/working-group',
  },
  {
    id: 'event',
    number: '03',
    labelEn: 'EVENT',
    labelJa: 'イベント事業',
    description: '立場と分野を越えた出会いと共創が始まる場を企画・運営します。',
    image: '/images/event-networking.png',
    imageAlt: 'イベント事業の交流風景',
    href: '/activities/event',
  },
  {
    id: 'thinktank',
    number: '04',
    labelEn: 'THINK TANK',
    labelJa: 'シンクタンク事業',
    description: '宇宙産業の動向を調査・分析し、レポートや提言として社会に発信します。',
    image: '/images/research.png',
    imageAlt: 'シンクタンク事業のリサーチ風景',
    href: '/activities/thinktank',
  },
]

export interface GalleryItem {
  image: string
  alt: string
  title: string
  date: string
  category: string
  href: string
  span: 'wide' | 'tall' | 'normal'
}

export const galleryItems: GalleryItem[] = [
  {
    image: '/images/panel-speakers.png',
    alt: '宇宙ビジネスシンポジウム2024のパネルディスカッション',
    title: '宇宙ビジネスシンポジウム2024 パネル',
    date: '2024.11.16',
    category: 'EVENT',
    href: '/activities/event/space-business-symposium-2024',
    span: 'wide',
  },
  {
    image: '/images/workshop.png',
    alt: 'ものづくりワークショップの様子',
    title: '衛星モデル制作ワークショップ',
    date: '2025.08.03',
    category: 'WORKSHOP',
    href: '/activities/working-group',
    span: 'tall',
  },
  {
    image: '/images/booth.png',
    alt: '学生ものづくりEXPOの出展',
    title: '全日本学生ものづくりEXPO 出展',
    date: '2026.02.20',
    category: 'REPORT',
    href: '/news/monozukuri-expo-report',
    span: 'normal',
  },
  {
    image: '/images/cosmobase.png',
    alt: 'Cosmo Baseの交流会',
    title: 'Cosmo Base 月例ミートアップ',
    date: '2025.10.05',
    category: 'COMMUNITY',
    href: '/activities/community/cosmobase',
    span: 'normal',
  },
  {
    image: '/images/presentation.png',
    alt: '登壇の様子',
    title: '大学連携セミナー登壇',
    date: '2025.09.28',
    category: 'EVENT',
    href: '/activities/event',
    span: 'tall',
  },
  {
    image: '/images/member.png',
    alt: '宇宙ビジネスシンポジウム2024でのメンバーの集合写真',
    title: '2025年度キックオフ',
    date: '2025.04.12',
    category: 'FSIF',
    href: '/about',
    span: 'wide',
  },
  {
    image: '/images/research.png',
    alt: 'リサーチミーティング',
    title: '宇宙産業動向レポート編集会議',
    date: '2025.12.01',
    category: 'RESEARCH',
    href: '/activities/thinktank',
    span: 'normal',
  },
  {
    image: '/images/booth.png',
    alt: '展示ブースの様子',
    title: '産学連携展示イベント',
    date: '2025.07.19',
    category: 'EVENT',
    href: '/activities/event',
    span: 'normal',
  },
]
