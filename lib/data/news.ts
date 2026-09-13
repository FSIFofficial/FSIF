import type { NewsItem, NewsCategory } from '@/lib/types'

export const newsCategories: NewsCategory[] = [
  'PRESS RELEASE',
  'NEWS',
  'EVENT',
  'PARTNERSHIP',
  'MEDIA',
  'REPORT',
  'PROJECT',
]

export const newsCategoryColor: Record<NewsCategory, string> = {
  'PRESS RELEASE': 'bg-navy text-navy-foreground',
  NEWS: 'bg-fsif-blue text-primary-foreground',
  EVENT: 'bg-accent-blue text-navy',
  PARTNERSHIP: 'bg-pale-blue text-fsif-blue',
  MEDIA: 'bg-foreground text-background',
  REPORT: 'bg-[#0b3a66] text-navy-foreground',
  PROJECT: 'bg-[#123c73] text-navy-foreground',
}

export const importantNews = [
  {
    date: '2026-09-01',
    category: 'PARTNERSHIP' as NewsCategory,
    title: 'Cosmo Base、新たなパートナー団体との連携を開始',
    slug: 'cosmobase-new-partner',
  },
  {
    date: '2024-11-20',
    category: 'REPORT' as NewsCategory,
    title: '宇宙ビジネスシンポジウム2024 開催レポートを公開しました',
    slug: 'symposium-2024-report',
  },
  {
    date: '2026-08-05',
    category: 'PROJECT' as NewsCategory,
    title: 'Orbit、組織運営機能のアップデートを公開',
    slug: 'orbit-update-2026',
  },
]

export const news: NewsItem[] = [
  {
    slug: 'monozukuri-expo-report',
    date: '2026-02-20',
    category: 'REPORT',
    title: '全日本学生ものづくりEXPOに出展しました',
    excerpt:
      '学生の挑戦が集まる全日本学生ものづくりEXPOに出展し、FSIFのプロダクトと宇宙コミュニティの取り組みを紹介しました。',
    thumbnail: '/images/expo-booth.png',
    thumbnailAlt: '全日本学生ものづくりEXPOのFSIFブース',
    relatedArea: 'community',
    relatedTag: 'orbit',
    featured: true,
    lead: '2026年2月、全国の学生が自らの制作物を持ち寄る「全日本学生ものづくりEXPO」に出展。3日間で多くの来場者にFSIFの活動を体験いただきました。',
    body: [
      {
        heading: '宇宙を「つくる」体験を届ける',
        paragraphs: [
          '今回の出展では、FSIF発の組織運営プラットフォーム「Orbit」のデモと、宇宙コミュニティ「Cosmo Base」の活動紹介を中心にブースを構成しました。',
          '来場した学生からは「宇宙の仕事は遠いと思っていたが、関わり方はいくつもあると知れた」といった声が寄せられ、私たちが掲げる「選択肢をつくる」という考え方への手応えを得られました。',
        ],
      },
      {
        heading: '来場者との対話から見えたもの',
        paragraphs: [
          '3日間で200名を超える方とお話しし、専攻や学年を問わず宇宙への関心が広がっていることを実感しました。展示した衛星モデルの前では、技術的な質問だけでなく、進路やキャリアに関する相談も多く寄せられました。',
        ],
        image: '/images/exhibition.png',
        imageAlt: '展示ブースで来場者と対話するメンバー',
      },
    ],
    pdf: { label: '出展レポート（PDF）', href: '#' },
  },
  {
    slug: 'cosmobase-new-partner',
    date: '2026-09-01',
    category: 'PARTNERSHIP',
    title: 'Cosmo Base、新たなパートナー団体との連携を開始',
    excerpt: '宇宙コミュニティCosmo Baseが、新たに教育・研究分野のパートナー団体との連携を開始しました。',
    thumbnail: '/images/cosmobase.png',
    thumbnailAlt: 'Cosmo Baseの活動風景',
    relatedArea: 'community',
    lead: 'Cosmo Baseは、宇宙教育に取り組む複数の団体と連携し、より多様な学びの機会を提供していきます。',
    body: [
      {
        paragraphs: [
          '今回の連携により、Cosmo Baseの参加者は、パートナー団体が主催する勉強会やフィールドプログラムに参加できるようになります。',
          '私たちは今後も、立場や地域を越えて宇宙とかかわれる選択肢を増やしてまいります。',
        ],
      },
    ],
    externalUrl: { label: 'Cosmo Base公式サイト', href: 'https://example.com' },
  },
  {
    slug: 'symposium-2024-report',
    date: '2024-11-20',
    category: 'REPORT',
    title: '宇宙ビジネスシンポジウム2024 開催レポートを公開しました',
    excerpt: '立場と分野を越えて宇宙産業の未来を語り合った、宇宙ビジネスシンポジウム2024の開催記録を公開しました。',
    thumbnail: '/images/symposium.png',
    thumbnailAlt: '宇宙ビジネスシンポジウム2024の会場',
    relatedArea: 'event',
    lead: '2024年11月16日に開催した宇宙ビジネスシンポジウム2024には、企業・研究機関・大学・学生が集い、宇宙産業の未来を語り合いました。',
    body: [
      {
        paragraphs: [
          '「はじまりの一歩 — 立場を越えて宇宙産業を語る」をテーマに、基調講演、パネルディスカッション、学生ピッチ、交流会を実施しました。',
          '専攻や立場を越えて宇宙に関わる人が出会い、新しい共創のきっかけが生まれた一日となりました。',
        ],
      },
    ],
    relatedLink: { label: '開催記録を見る', href: '/activities/event/space-business-symposium-2024' },
  },
  {
    slug: 'orbit-update-2026',
    date: '2026-08-05',
    category: 'PROJECT',
    title: 'Orbit、組織運営機能のアップデートを公開',
    excerpt: 'FSIF発のプロダクトOrbitが、タスクの遂行履歴と人材育成をつなぐ新機能を公開しました。',
    thumbnail: '/images/orbit-team.png',
    thumbnailAlt: 'Orbitを開発するチーム',
    relatedTag: 'orbit',
    lead: 'Orbitは、タスク管理・人材管理・人材育成を一つにつなぐ組織運営プラットフォームです。',
    body: [
      {
        paragraphs: [
          '今回のアップデートでは、タスクの遂行履歴からメンバーのスキルの伸びを可視化する機能を追加しました。',
          '「誰が何をしているか分からない」という組織課題に対し、成果と成長を同じ場所で扱えるようにしています。',
        ],
      },
    ],
  },
  {
    slug: 'press-release-establishment',
    date: '2026-07-10',
    category: 'PRESS RELEASE',
    title: 'FSIFの活動体制と2026年度の重点方針を発表',
    excerpt: '2026年度の事業体制と重点方針を発表しました。4つの事業領域を軸に活動を拡大します。',
    thumbnail: '/images/group.png',
    thumbnailAlt: 'FSIFメンバーの集合写真',
    lead: 'FSIFは2026年度、コミュニティ・ワーキンググループ・イベント・シンクタンクの4事業を軸に活動を強化します。',
    body: [
      {
        paragraphs: [
          '2026年度は、コミュニティの拡大とプロダクト開発の両輪で活動を進めます。',
          '企業・行政・大学との連携をさらに深め、宇宙とかかわる選択肢を社会に広げてまいります。',
        ],
      },
    ],
    pdf: { label: 'プレスリリース（PDF）', href: '#' },
  },
  {
    slug: 'media-appearance-web',
    date: '2026-06-22',
    category: 'MEDIA',
    title: 'Webメディアに代表インタビューが掲載されました',
    excerpt: '宇宙産業を扱うWebメディアに、FSIF代表のインタビューが掲載されました。',
    thumbnail: '/images/representative.png',
    thumbnailAlt: 'FSIF代表のポートレート',
    lead: '「一番身近な宇宙の専門家」を掲げる背景について、代表が語りました。',
    body: [
      {
        paragraphs: [
          'インタビューでは、学生が主体となって宇宙産業に関わる意義や、肯定を土台とした組織づくりについて紹介されました。',
        ],
      },
    ],
    externalUrl: { label: '掲載記事���読む', href: 'https://example.com' },
  },
  {
    slug: 'community-1000-responses',
    date: '2026-05-30',
    category: 'NEWS',
    title: 'コミュニティコンテンツの総回答者が1,000名を突破',
    excerpt: 'Cosmo Baseで実施しているアンケートやワークの総回答者が累計1,000名を超えました。',
    thumbnail: '/images/cosmobase.png',
    thumbnailAlt: 'コミュニティの活動風景',
    relatedArea: 'community',
    lead: '多くの方の参加により、コミュニティの声を活動に反映できる基盤が育っています。',
    body: [
      {
        paragraphs: [
          '寄せられた声は、イベント企画やプロダクト開発の方向性を決める貴重な材料になっています。',
          'ご参加いただいたみなさまに、改めて御礼申し上げます。',
        ],
      },
    ],
  },
  {
    slug: 'university-collaboration-seminar',
    date: '2026-05-12',
    category: 'EVENT',
    title: '大学連携セミナーに登壇しました',
    excerpt: '大学と連携したキャリアセミナーに登壇し、宇宙産業への多様な関わり方を紹介しました。',
    thumbnail: '/images/presentation.png',
    thumbnailAlt: 'セミナーで登壇するメンバー',
    relatedArea: 'event',
    lead: '専攻を問わず宇宙に関われることを、実際の活動事例とともにお伝えしました。',
    body: [
      {
        paragraphs: ['参加した学生からは、活動への参加希望が多数寄せられました。'],
      },
    ],
  },
  {
    slug: 'thinktank-report-2026',
    date: '2026-04-18',
    category: 'REPORT',
    title: '宇宙産業の裾野拡大に関する調査レポートを公開',
    excerpt: 'シンクタンク事業として、宇宙産業への参入意向に関する調査レポートを公開しました。',
    thumbnail: '/images/research.png',
    thumbnailAlt: 'リサーチの様子',
    relatedArea: 'thinktank',
    lead: '学生と社会人を対象にした調査から、宇宙産業への関心の広がりが見えてきました。',
    body: [
      {
        paragraphs: ['調査の詳細と分析は、MEDIAのレポートとしても公開しています。'],
      },
    ],
    pdf: { label: '調査レポート（PDF）', href: '#' },
  },
  {
    slug: 'kickoff-2026',
    date: '2026-04-01',
    category: 'NEWS',
    title: '2026年度の活動をスタートしました',
    excerpt: '新メンバーを迎え、2026年度の活動が始まりました。',
    thumbnail: '/images/group.png',
    thumbnailAlt: 'キックオフの集合写真',
    lead: '新たな仲間とともに、今年度も宇宙とかかわる選択肢を広げていきます。',
    body: [
      {
        paragraphs: ['キックオフでは、各事業の年間計画を共有し、チームの目標を確認しました。'],
      },
    ],
  },
  {
    slug: 'design-workshop-report',
    date: '2026-03-15',
    category: 'REPORT',
    title: 'デザインワーキンググループの成果発表会を実施',
    excerpt: 'デザインWGが半年間の活動成果を発表しました。',
    thumbnail: '/images/design-session.png',
    thumbnailAlt: 'デザインセッションの様子',
    relatedArea: 'working-group',
    lead: '広報物やプロダクトUIのデザインに取り組んだ成果を共有しました。',
    body: [
      {
        paragraphs: ['未経験から参加したメンバーも、実践を通じてスキルを伸ばしました。'],
      },
    ],
  },
  {
    slug: 'corporate-partnership-signed',
    date: '2026-03-02',
    category: 'PARTNERSHIP',
    title: '宇宙関連企業とのパートナーシップを締結',
    excerpt: '宇宙関連企業とパートナーシップを締結し、共同での人材育成に取り組みます。',
    thumbnail: '/images/event-networking.png',
    thumbnailAlt: '企業との交流風景',
    relatedArea: 'community',
    lead: '企業の知見とFSIFのコミュニティを掛け合わせ、実践的な学びの場をつくります。',
    body: [
      {
        paragraphs: ['今後、共同イベントやメンタリングプログラムを展開予定です。'],
      },
    ],
  },
  {
    slug: 'workshop-satellite-model',
    date: '2026-02-05',
    category: 'EVENT',
    title: '衛星モデル制作ワークショップを開催しました',
    excerpt: '手を動かして宇宙を学ぶワークショップを開催し、多くの参加者が集まりました。',
    thumbnail: '/images/workshop.png',
    thumbnailAlt: 'ワークショップの様子',
    relatedArea: 'working-group',
    lead: '座学だけでなく、実際に手を動かすことで宇宙をより身近に感じてもらいました。',
    body: [
      {
        paragraphs: ['参加者はチームに分かれ、衛星モデルの制作に挑戦しました。'],
      },
    ],
  },
]

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug)
}

export function getFeaturedNews(): NewsItem {
  return news.find((n) => n.featured) ?? news[0]
}

export function getLatestNews(count = 6): NewsItem[] {
  return [...news]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((n) => !n.featured)
    .slice(0, count)
}

export function getRelatedNews(slug: string, count = 3): NewsItem[] {
  const current = getNewsBySlug(slug)
  return news
    .filter((n) => n.slug !== slug)
    .sort((a, b) => {
      const aMatch = current && a.relatedArea === current.relatedArea ? 1 : 0
      const bMatch = current && b.relatedArea === current.relatedArea ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, count)
}
