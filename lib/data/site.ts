export const brand = {
  name: '未来宇宙産業フォーラム',
  nameEn: 'Future Space Industry Forum',
  abbr: 'FSIF',
  tagline: '宇宙を、みんなのものにする。',
  description: 'すべての人に、宇宙とかかわる「選択肢」をつくる組織です。',
}

/** External URLs. Replace with confirmed values before launch. */
export const externalUrls = {
  cosmoBaseOfficial:
    process.env.NEXT_PUBLIC_COSMO_BASE_OFFICIAL_URL ?? 'https://fsifofficial.github.io/CosmoBase/',
}

export interface NavFeature {
  title: string
  description: string
  image: string
  href: string
}

export interface NavColumnItem {
  label: string
  description: string
  href: string
}

export interface NavItem {
  label: string
  labelJa: string
  href: string
  mega?: {
    intro: string
    columns: NavColumnItem[]
    feature?: NavFeature
  }
}

/**
 * Top-level order: HOME (logo) / NEWS / ABOUT / ACTIVITIES / PRODUCT / MEDIA / JOIN / CONTACT.
 * ABOUT and ACTIVITIES have mega panels; their label links to the section index and a
 * separate arrow toggles the panel. PRODUCT/MEDIA/JOIN are direct links. CONTACT renders
 * as the dedicated header button (and as a CTA in the mobile menu).
 */
export const mainNav: NavItem[] = [
  { label: 'NEWS', labelJa: 'ニュース', href: '/news' },
  {
    label: 'ABOUT',
    labelJa: 'FSIFについて',
    href: '/about',
    mega: {
      intro: 'FSIFの理念、組織、代表、実績、沿革をご紹介します。',
      columns: [
        { label: 'FSIFとは', description: '設立背景と私たちが解決したい課題', href: '/about' },
        { label: '理念 / Philosophy', description: 'Mission・Vision・Value・Purpose', href: '/about/philosophy' },
        { label: '代表メッセージ', description: '代表が描く宇宙とのかかわり方', href: '/about/message' },
        { label: '経営・執行メンバー', description: '組織を動かすリーダーたち', href: '/about/leadership' },
        { label: '組織図', description: '代表から4事業までの体制', href: '/about/organization' },
        { label: '組織概要', description: '名称・設立・拠点・連絡先', href: '/about/profile' },
        { label: '沿革 / History', description: '2023年からの歩み', href: '/about/history' },
        { label: 'ブランド', description: 'ロゴ・カラー・書体・素材配布', href: '/about/brand' },
      ],
      feature: {
        title: '一番身近な宇宙の専門家として',
        description: '肯定の組織で、すべてに挑戦する。FSIFの原点となる理念をご覧ください。',
        image: '/images/about-collab.png',
        href: '/about/philosophy',
      },
    },
  },
  {
    label: 'ACTIVITIES',
    labelJa: '事業',
    href: '/activities',
    mega: {
      intro: '4つの事業で、コミュニティ・共創・調査をつなぎます。',
      columns: [
        { label: 'コミュニティ事業', description: '誰もが参加できる宇宙コミュニティ', href: '/activities/community' },
        { label: 'ワーキンググループ事業', description: '学生団体とFSIFが宇宙利用を議論する場', href: '/activities/working-group' },
        { label: 'イベント事業', description: '出会いと共創が始まる場', href: '/activities/event' },
        { label: 'シンクタンク事業', description: '調査・レポート・提言', href: '/activities/thinktank' },
      ],
    },
  },
  { label: 'PRODUCT', labelJa: 'プロダクト', href: '/product' },
  { label: 'JOIN', labelJa: '参加する', href: '/join' },
]

export const socialLinks = [
  { label: 'X', href: 'https://x.com/fsif_official_', handle: '@fsif_official_' },
  { label: 'Instagram', href: 'https://instagram.com/fsif.official', handle: '@fsif.official' },
  { label: 'YouTube', href: 'https://www.youtube.com/@FSIF.official', handle: '@FSIF.official' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/%E6%9C%AA%E6%9D%A5%E5%AE%87%E5%AE%99%E7%94%A3%E6%A5%AD%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0/61560527245437/',
    handle: '未来宇宙産業フォーラム',
  },
]

export const footerSitemap = [
  {
    heading: 'ABOUT',
    links: [
      { label: 'FSIFとは', href: '/about' },
      { label: '理念', href: '/about/philosophy' },
      { label: '代表メッセージ', href: '/about/message' },
      { label: '組織概要', href: '/about/profile' },
      { label: '沿革', href: '/about/history' },
    ],
  },
  {
    heading: 'ACTIVITIES',
    links: [
      { label: 'コミュニティ事業', href: '/activities/community' },
      { label: 'ワーキンググループ事業', href: '/activities/working-group' },
      { label: 'イベント事業', href: '/activities/event' },
      { label: 'シンクタンク事業', href: '/activities/thinktank' },
    ],
  },
  {
    heading: 'PRODUCT',
    links: [
      { label: 'PRODUCT一覧', href: '/product' },
      { label: 'Orbit', href: '/product/orbit' },
    ],
  },
  {
    heading: 'CONNECT',
    links: [
      { label: 'ニュース', href: '/news' },
      { label: '参加する / JOIN', href: '/join' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
]

export const legalLinks = [
  { label: 'Privacy Policy', href: '/about/brand' },
  { label: 'Terms', href: '/about/brand' },
  { label: 'Social Media Policy', href: '/about/brand' },
  { label: 'Brand', href: '/about/brand' },
]
