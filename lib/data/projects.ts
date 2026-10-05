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
    slug: 'ohsumi',
    name: 'Ohsumi',
    tagline: '仕事を進めるほど、組織が見えてくる。',
    summary: '仕事を中心に、人・プロジェクト・組織・知識をつなぐ組織運営プラットフォームです。',
    image: '/images/ohsumi-team.png',
    imageAlt: 'Ohsumiのサンプル画面',
    href: '/product/ohsumi',
    external: { label: 'Ohsumi公式サイト', href: 'https://ohsumi.fsif.jp' },
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

/** PRODUCT section: FSIF発の自主開発ツールで、外部提供を想定するもの。現在はOhsumiのみ。 */
export const products: Project[] = projects.filter((p) => p.kind === 'product')

// Ohsumi の課題・軸(詳細ページ用)
export const ohsumiProblems = [
  {
    title: '誰が何をしているか見えない',
    description: '人が増えるほど、担当や進み具合、確認待ちの仕事が見えにくくなります。',
  },
  {
    title: '経験が人と一緒に抜けていく',
    description: '代替わりや卒業のたびに、仕事のやり方や判断の理由が失われます。',
  },
  {
    title: '任せる相手を決める材料がない',
    description: '誰がどんなスキルや経験を持っているかが分からず、仕事が一部の人に偏ります。',
  },
  {
    title: '頑張りが成長として残らない',
    description: 'タスクを終えても、その経験がスキルや次の挑戦につながりません。',
  },
]

export const ohsumiFeatures = [
  {
    name: 'WORK',
    labelJa: '仕事を進める',
    description:
      'タスクの担当・期限・確認待ちを、一覧・カンバン・カレンダー・ガントで見える化。承認や確認の流れも、そのまま記録に残ります。',
  },
  {
    name: 'PEOPLE',
    labelJa: '人を知る',
    description:
      '完了した仕事が、一人ひとりのスキルと経験として積み上がります。仕事を任せる前の判断の材料がそろいます。',
  },
  {
    name: 'ORGANIZATION',
    labelJa: '組織に残す',
    description:
      '成果物・振り返り・判断の記録が組織に残り、代替わりの後も次の担当者の手がかりになります。',
  },
]
