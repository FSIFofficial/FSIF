import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'cosmobase',
    name: 'Cosmo Base',
    tagline: '宇宙への一歩を、ここから。',
    summary:
      '学ぶ・つながる・体験する。専攻や立場を問わず、誰もが宇宙とかかわれる入口となるコミュニティです。勉強会やミートアップ、体験プログラムを通じて、宇宙を身近にします。',
    image: '/images/cosmobase.png',
    imageAlt: 'Cosmo Baseの活動風景',
    href: '/activities/community/cosmobase',
    external: { label: 'Cosmo Base公式サイト', href: 'https://fsifofficial.github.io/CosmoBase/' },
    kind: 'community',
  },
  {
    slug: 'orbit',
    name: 'Orbit',
    tagline: 'タスクを打ち上げ、組織を軌道に乗せる。',
    summary:
      'タスク管理・人材管理・人材育成をつなぐ、FSIF発の組織運営プラットフォーム。遂行履歴と要求スキル、担当者の成長を一つの流れとして扱います。',
    image: '/images/orbit-team.png',
    imageAlt: 'Orbitを開発・活用するチーム',
    href: '/product/orbit',
    external: { label: 'Orbit公式サイト', href: '' },
    kind: 'product',
  },
  {
    slug: 'space-business-symposium-2024',
    name: '宇宙ビジネスシンポジウム2024',
    tagline: '立場を越え、宇宙産業の未来を語る。',
    summary:
      '企業・研究機関・大学・学生が一堂に会し、宇宙産業の未来を語り合った開催実績。基調講演やパネル、学生ピッチ、交流会を通じて共創が生まれました。',
    image: '/images/SBS24.png',
    imageAlt: '宇宙ビジネスシンポジウム2024の会場',
    href: '/activities/event/SBS24',
    kind: 'event',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** PRODUCT section: FSIF発の自主開発ツールで、外部提供を想定するもの。現在はOrbitのみ。 */
export const products: Project[] = projects.filter((p) => p.kind === 'product')

// Orbit の課題・機能（詳細ページ用）
export const orbitProblems = [
  {
    title: '誰が何をしているか分からない',
    description: 'メンバーが増えるほど、いま誰がどのタスクを担っているかが見えにくくなります。',
  },
  {
    title: '確認待ちが見えない',
    description: 'レビューや承認の待ち状態が可視化されず、進行が静かに止まってしまいます。',
  },
  {
    title: '成果物の場所が分からない',
    description: '資料やアウトプットが各所に散らばり、必要なときに辿り着けません。',
  },
  {
    title: '適任者を判断できない',
    description: '誰にどのタスクを任せるべきか、経験やスキルの情報が揃っていません。',
  },
]

export const orbitFeatures = [
  {
    name: 'Task Management',
    labelJa: 'タスク管理',
    description:
      'タスクの状態、担当、期限、確認待ちを一覧で可視化。単なるToDoではなく、遂行の履歴として蓄積されます。',
  },
  {
    name: 'Talent Management',
    labelJa: '人材管理',
    description:
      'メンバーの担当領域や要求スキルを整理し、タスクと人を適切に結びつけます。適任者の判断を支援します。',
  },
  {
    name: 'Human Development',
    labelJa: '人材育成',
    description:
      '遂行履歴から一人ひとりのスキルの伸びを可視化。成果と成長を同じ場所で扱い、次の挑戦につなげます。',
  },
]
