import { news } from '@/lib/data/news'
import { media } from '@/lib/data/media'
import { projects } from '@/lib/data/projects'
import { events } from '@/lib/data/events'

export type SearchType = 'ニュース' | '読み物' | 'プロダクト' | 'イベント' | 'ページ'

export interface SearchDoc {
  title: string
  excerpt: string
  href: string
  type: SearchType
  keywords: string
  date?: string
}

const staticPages: SearchDoc[] = [
  {
    title: 'FSIFについて',
    excerpt: 'すべての人に、宇宙とかかわる選択肢をつくる組織です。',
    href: '/about',
    type: 'ページ',
    keywords: 'about 理念 組織 概要 fsifとは',
  },
  {
    title: '理念 / Philosophy',
    excerpt: 'Mission・Vision・Value・Purpose。FSIFが大切にする考え方。',
    href: '/about/philosophy',
    type: 'ページ',
    keywords: 'philosophy mission vision value purpose 理念',
  },
  {
    title: '代表メッセージ',
    excerpt: '一番身近な宇宙の専門家として。代表が描くかかわり方。',
    href: '/about/message',
    type: 'ページ',
    keywords: 'message 代表 メッセージ',
  },
  {
    title: '参加する / JOIN',
    excerpt: '肯定の組織で、すべてに挑戦する。仲間を募集しています。',
    href: '/join',
    type: 'ページ',
    keywords: 'join 参加 募集 採用 recruit エントリー',
  },
  {
    title: 'お問い合わせ',
    excerpt: 'ご参加・ご連携・取材のご相談はこちらから。',
    href: '/contact',
    type: 'ページ',
    keywords: 'contact お問い合わせ 連絡',
  },
  {
    title: 'コミュニティ事業',
    excerpt: '学ぶ・つながる・体験する。誰もが参加できる宇宙コミュニティ。',
    href: '/activities/community',
    type: 'ページ',
    keywords: 'community コミュニティ cosmo base コスモベース',
  },
  {
    title: 'Cosmo Base',
    excerpt: 'FSIFが運営する宇宙コミュニティ。学ぶ・つながる・体験する。',
    href: '/activities/community/cosmobase',
    type: 'ページ',
    keywords: 'cosmo base コスモベース community コミュニティ',
  },
  {
    title: 'ワーキンググループ事業',
    excerpt: '学生団体とFSIFが宇宙利用をテーマに議論・検討する場。',
    href: '/activities/working-group',
    type: 'ページ',
    keywords: 'working group ワーキンググループ 学生団体 宇宙利用 議論',
  },
  {
    title: 'PRODUCT / Orbit',
    excerpt: 'FSIFから生まれたプロダクト。組織運営プラットフォームOrbit。',
    href: '/product',
    type: 'ページ',
    keywords: 'product プロダクト orbit オービット タスク管理',
  },
]

export function buildSearchIndex(): SearchDoc[] {
  return [
    ...news.map<SearchDoc>((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      href: `/news/${a.slug}`,
      type: 'ニュース',
      keywords: `${a.title} ${a.excerpt} ${a.category} ${a.relatedArea ?? ''}`,
      date: a.date,
    })),
    ...media.map<SearchDoc>((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      href: `/media/${a.slug}`,
      type: '読み物',
      keywords: `${a.title} ${a.excerpt} ${a.category} ${a.author ?? ''}`,
      date: a.date,
    })),
    ...projects.map<SearchDoc>((p) => ({
      title: p.name,
      excerpt: p.summary,
      href: p.href,
      type: p.kind === 'product' ? 'プロダクト' : p.kind === 'event' ? 'イベント' : 'ページ',
      keywords: `${p.name} ${p.tagline} ${p.summary}`,
    })),
    ...events.map<SearchDoc>((e) => ({
      title: e.title,
      excerpt: e.summary,
      href: e.href,
      type: 'イベント',
      keywords: `${e.title} ${e.summary} ${e.type} ${e.venue}`,
      date: e.date,
    })),
    ...staticPages,
  ]
}

export function searchDocs(query: string): SearchDoc[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/).filter(Boolean)
  const index = buildSearchIndex()
  return index
    .map((doc) => {
      const haystack = `${doc.title} ${doc.keywords}`.toLowerCase()
      const score = terms.reduce((acc, t) => (haystack.includes(t) ? acc + 1 : acc), 0)
      return { doc, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.doc)
}
