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
    external: { label: 'Cosmo Base公式サイト', href: 'https://cosmobase.fsif.jp/' },
    kind: 'community',
  },
  {
    slug: 'ohsumi',
    name: 'Ohsumi',
    tagline: '仕事を進めるほど、組織が見えてくる。',
    summary: '仕事を中心に、人・プロジェクト・組織・知識をつなぐ組織運営プラットフォームです。',
    image: '/images/ohsumi-hero.png',
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
