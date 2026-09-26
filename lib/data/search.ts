import type { NewsItem } from '@/lib/types'
import { projects } from '@/lib/data/projects'
import { events } from '@/lib/data/events'
import { getPublishedContents } from '@/lib/data/cosmobase'
import { workingGroups } from '@/lib/data/workinggroups'
import { jobPositions } from '@/lib/data/join'
import { leadership } from '@/lib/data/org'

export type SearchType = 'ニュース' | 'プロダクト' | 'イベント' | 'ページ'

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
  {
    title: 'プライバシーポリシー',
    excerpt: 'FSIFにおける個人情報の取り扱いについて。',
    href: '/privacy-policy',
    type: 'ページ',
    keywords: 'privacy policy プライバシーポリシー 個人情報',
  },
  {
    title: '利用規約',
    excerpt: '本サイトおよび関連サービスの利用規約。',
    href: '/terms',
    type: 'ページ',
    keywords: 'terms 利用規約 規約',
  },
  {
    title: 'ソーシャルメディアポリシー',
    excerpt: 'FSIF公式ソーシャルメディアアカウントの運用方針について。',
    href: '/social-media-policy',
    type: 'ページ',
    keywords: 'social media policy ソーシャルメディアポリシー sns 運用方針',
  },
]

export function buildSearchIndex(news: NewsItem[]): SearchDoc[] {
  return [
    ...news.map<SearchDoc>((a) => ({
      title: a.title,
      excerpt: a.excerpt,
      href: `/news/${a.slug}`,
      type: 'ニュース',
      keywords: `${a.title} ${a.excerpt} ${a.category} ${a.relatedArea ?? ''}`,
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
    ...getPublishedContents().map<SearchDoc>((c) => ({
      title: c.name,
      excerpt: c.description,
      href: `/activities/community/cosmobase#${c.id}`,
      type: 'ページ',
      keywords: `${c.name} ${c.description} ${c.category} cosmo base コスモベース`,
    })),
    ...workingGroups.map<SearchDoc>((w) => ({
      title: w.name,
      excerpt: w.theme,
      href: `/activities/working-group#${w.id}`,
      type: 'ページ',
      keywords: `${w.name} ${w.theme} ${w.discussion} ワーキンググループ WG`,
    })),
    ...jobPositions.map<SearchDoc>((j) => ({
      title: j.title,
      excerpt: j.description,
      href: `/join#${j.slug}`,
      type: 'ページ',
      keywords: `${j.title} ${j.category} ${j.description} 募集 採用 join 参加`,
    })),
    ...leadership.map<SearchDoc>((m) => ({
      title: m.name,
      excerpt: m.bio,
      href: `/about/leadership/${m.id}`,
      type: 'ページ',
      keywords: `${m.name} ${m.nameEn} ${m.role} ${m.area} 経営 執行 メンバー`,
    })),
    ...staticPages,
  ]
}

export function searchDocs(query: string, index: SearchDoc[]): SearchDoc[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/).filter(Boolean)
  return index
    .map((doc) => {
      const title = doc.title.toLowerCase()
      const keywords = doc.keywords.toLowerCase()
      // Title matches rank a doc higher than a hit found only in its keywords.
      const score = terms.reduce((acc, t) => {
        if (title.includes(t)) return acc + 3
        if (keywords.includes(t)) return acc + 1
        return acc
      }, 0)
      return { doc, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.doc)
}
