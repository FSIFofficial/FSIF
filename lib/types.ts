/**
 * Shared domain types for FSIF mock data.
 * Structured so each collection can later be replaced by a Supabase table
 * or a headless CMS collection with minimal changes to the UI layer.
 */

export type NewsCategory =
  | 'PRESS RELEASE'
  | 'NEWS'
  | 'EVENT'
  | 'PARTNERSHIP'
  | 'MEDIA'
  | 'REPORT'
  | 'PROJECT'

/** The 4 FSIF activity areas. Orbit/Cosmo Base are products/community, not activity areas. */
export type BusinessArea = 'community' | 'working-group' | 'event' | 'thinktank'

/** Non-activity related tags kept separate from the 4 activities. */
export type RelatedTag = 'cosmobase' | 'orbit'

export interface NewsBody {
  heading?: string
  paragraphs: string[]
  image?: string
  imageAlt?: string
}

export interface NewsItem {
  slug: string
  date: string // ISO yyyy-mm-dd
  category: NewsCategory
  title: string
  excerpt: string
  thumbnail: string
  thumbnailAlt: string
  relatedArea?: BusinessArea
  relatedTag?: RelatedTag
  featured?: boolean
  lead: string
  body: NewsBody[]
  externalUrl?: { label: string; href: string }
  /** Internal link to a related page within the site (e.g. an event record). */
  relatedLink?: { label: string; href: string }
  pdf?: { label: string; href: string }
}

export type MediaCategory =
  | 'Article'
  | 'Interview'
  | 'Report'
  | 'Column'
  | 'Research'
  | 'Event Report'
  | 'Project Story'

export interface MediaItem {
  slug: string
  date: string
  category: MediaCategory
  title: string
  excerpt: string
  thumbnail: string
  thumbnailAlt: string
  author?: string
  readingTime?: number
  relatedProject?: string
  popular?: boolean
  featured?: boolean
  lead: string
  body: NewsBody[]
  pdf?: { label: string; href: string; cover?: string; publishedAt?: string }
}

export interface Activity {
  id: BusinessArea
  number: string
  labelEn: string
  labelJa: string
  description: string
  image: string
  imageAlt: string
  href: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  summary: string
  image: string
  imageAlt: string
  href: string
  external?: { label: string; href: string }
  kind: 'community' | 'product' | 'event'
}

export interface EventItem {
  slug: string
  title: string
  /** ISO date (event's first day). Drives sorting/display on the card grid. */
  date: string
  type: '主催' | '共催' | '運営支援' | '出展' | '登壇' | 'ワークショップ'
  venue: string
  summary: string
  image: string
  imageAlt: string
  href: string
  /** Optional fields for a dedicated report detail page. */
  subtitle?: string
  /** 種類（例: イベント報告書、常設活動報告書、ブース出展報告書） */
  reportType?: string
  /** ISO date the report was published. */
  publishedDate?: string
  /** 日時（複数日にまたがる場合はそのまま表示用テキストとして保持） */
  eventDateDisplay?: string
  /** 場所（カード表示の venue より詳しい表示用テキスト） */
  venueDisplay?: string
  /** 内容 */
  content?: string
  externalLinks?: { label: string; href: string }[]
}

export interface Partner {
  name: string
  category: '企業' | '大学' | '学生団体' | '行政・研究機関' | '一般社団法人' | ''
  href: string
}

export interface LeadershipMember {
  id: string
  name: string
  nameEn: string
  role: string
  area: string
  image: string
  bio: string
  message?: string
  /** 経歴（年月とできごと）。新しい順ではなく年代順で保持する。 */
  career?: { date: string; text: string }[]
}

export interface HistoryEntry {
  year: string
  date: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export type JobCategory =
  | 'イベント企画'
  | 'コミュニティ運営'
  | 'デザイン'
  | '広報'
  | 'Web開発'
  | 'AI活用'
  | '企業連携'
  | '新規事業'
  | '調査研究'
  | 'PM'

export interface JobPosition {
  slug: string
  title: string
  category: JobCategory
  status: '募集中' | '若干名' | '募集終了'
  commitment: string
  location: string
  description: string
  responsibilities: string[]
  welcome: string[]
}

export interface Faq {
  question: string
  answer: string
}

export interface HeroSlide {
  id: string
  eyebrow: string
  copy: string
  sub: string
  cta: { label: string; href: string }
  image: string
  imageAlt: string
}

export interface Philosophy {
  key: 'mission' | 'vision' | 'value' | 'purpose'
  labelEn: string
  labelJa: string
  statement: string
  description: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  labelEn: string
}
