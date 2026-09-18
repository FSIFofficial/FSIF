import type { MediaItem, MediaCategory } from '@/lib/types'

export const mediaCategories: MediaCategory[] = [
  'Article',
  'Interview',
  'Report',
  'Column',
  'Research',
  'Event Report',
  'Project Story',
]

export const media: MediaItem[] = [
  {
    slug: 'why-space-for-everyone',
    date: '2026-08-28',
    category: 'Column',
    title: 'なぜ「宇宙をみんなのものに」なのか',
    excerpt:
      '宇宙産業は急速に広がっている一方で、関わり方の入口はまだ限られています。FSIFがコミュニティから始める理由を綴ります。',
    thumbnail: '/images/member.png',
    thumbnailAlt: '宇宙ビジネスシンポジウム2024でのメンバーの集合写真',
    author: '編集部',
    readingTime: 6,
    featured: true,
    lead: '宇宙は誰のものか。この問いに、私たちは「みんなのもの」と答えます。その言葉に込めた意味を、活動の現場から考えます。',
    body: [
      {
        heading: '入口の数が、可能性の数になる',
        paragraphs: [
          '宇宙開発の主役はもはや国家機関だけではありません。民間企業やスタートアップ、大学、そして学生まで、関わる主体は急速に広がっています。',
          'しかし、「どう関わればいいか分からない」という声は依然として多い。だからこそFSIFは、学ぶ・つながる・体験するという複数の入口を用意することにこだわっています。',
        ],
      },
      {
        heading: '専門性と親しみやすさの両立',
        paragraphs: [
          '難しいことを難しいまま伝えるのは簡単です。私たちが目指すのは、正確さを保ちながら、はじめての人にも開かれた言葉で宇宙を語ること。それが「一番身近な宇宙の専門家」という言葉の意味です。',
        ],
      },
    ],
  },
  {
    slug: 'interview-representative',
    date: '2026-07-30',
    category: 'Interview',
    title: '代表インタビュー：肯定から始める組織のつくり方',
    excerpt: '「肯定の組織ですべてに挑戦」というバリューはどこから生まれたのか。代表に聞きました。',
    thumbnail: '/images/Manabe.jpg',
    thumbnailAlt: 'FSIF代表 眞鍋 和士',
    author: '編集部',
    readingTime: 8,
    popular: true,
    lead: '否定ではなく肯定から始める。その姿勢が、経験の有無を越えて挑戦できる組織を生んでいます。',
    body: [
      {
        paragraphs: [
          '「まずやってみよう、と言える空気があるかどうかで、人の動き方は大きく変わります」と代表は語ります。',
          '肯定を土台にすることで、学生であっても大きなプロジェクトに主体的に関われる。その積み重ねが組織の力になっています。',
        ],
      },
    ],
  },
  {
    slug: 'report-industry-survey-2026',
    date: '2026-04-18',
    category: 'Research',
    title: '調査レポート：宇宙産業への参入意向2026',
    excerpt: '学生・社会人を対象に実施した、宇宙産業への関心と参入意向に関する調査結果。',
    thumbnail: '/images/research.png',
    thumbnailAlt: 'リサーチの様子',
    author: 'シンクタンク事業部',
    readingTime: 10,
    popular: true,
    lead: '宇宙産業に「関わってみたい」と考える人は着実に増えています。一方で、具体的な行動に移す手前で止まる人も少なくありません。',
    body: [
      {
        paragraphs: ['調査の全データと分析は、PDFレポートとして公開しています。'],
      },
    ],
    pdf: {
      label: '宇宙産業への参入意向2026',
      href: '#',
      cover: '/images/research.png',
      publishedAt: '2026-04-18',
    },
  },
  {
    slug: 'project-story-cosmobase',
    date: '2026-06-10',
    category: 'Project Story',
    title: 'プロジェクトストーリー：Cosmo Baseの立ち上げ',
    excerpt: '一つのコミュニティがどのように生まれ、育っていったのか。運営メンバーが振り返ります。',
    thumbnail: '/images/cosmobase.png',
    thumbnailAlt: 'Cosmo Baseの活動',
    author: 'コミュニティ事業部',
    readingTime: 7,
    relatedProject: 'cosmobase',
    lead: '最初の参加者は数名でした。そこからどのように「誰もが参加できる場」へと広げていったのかをお伝えします。',
    body: [
      {
        paragraphs: ['小さく始めて、参加者の声を聞きながら形を変えていく。その繰り返しが今のCosmo Baseをつくりました。'],
      },
    ],
  },
  {
    slug: 'event-report-symposium-2024',
    date: '2024-11-20',
    category: 'Event Report',
    title: 'イベントレポート：宇宙ビジネスシンポジウム2024',
    excerpt: '立場を越えて宇宙産業の未来を語り合った一日を振り返ります。',
    thumbnail: '/images/panel-speakers.png',
    thumbnailAlt: 'シンポジウムのパネル',
    author: 'イベント事業部',
    readingTime: 9,
    lead: '企業、研究機関、学生が同じテーブルで語り合う。宇宙ビジネスシンポジウム2024で生まれた対話の記録です。',
    body: [
      {
        paragraphs: ['基調講演からパネル、交流会まで、共創のきっかけが数多く生まれました。'],
      },
    ],
  },
  {
    slug: 'article-orbit-design',
    date: '2026-08-01',
    category: 'Article',
    title: 'Orbitはなぜ「成長」を扱うのか',
    excerpt: 'タスク管理ツールに留まらず、人の成長を可視化するプロダクト設計の背景を解説します。',
    thumbnail: '/images/orbit-team.png',
    thumbnailAlt: 'Orbitの開発',
    author: 'プロダクト開発チーム',
    readingTime: 6,
    relatedProject: 'orbit',
    lead: 'タスクの完了だけを追うツールは多い。Orbitはその先の「誰が、何を通じて成長したか」を扱います。',
    body: [
      {
        paragraphs: ['遂行履歴と要求スキルを結びつけることで、組織運営と人材育成を一つの流れにしています。'],
      },
    ],
  },
  {
    slug: 'report-community-voice',
    date: '2026-05-30',
    category: 'Report',
    title: 'レポート：コミュニティ1,000名の声から見えたこと',
    excerpt: '累計1,000名を超えた回答から、宇宙への関心の傾向を分析しました。',
    thumbnail: '/images/cosmobase.png',
    thumbnailAlt: 'コミュニティの活動',
    author: 'シンクタンク事業部',
    readingTime: 8,
    lead: '数字の裏にある一人ひとりの関心を、活動にどう活かすかを考えます。',
    body: [
      {
        paragraphs: ['定量と定性の両面から、コミュニティの声を読み解きました。'],
      },
    ],
    pdf: {
      label: 'コミュニティの声レポート',
      href: '#',
      cover: '/images/cosmobase.png',
      publishedAt: '2026-05-30',
    },
  },
  {
    slug: 'interview-member-story',
    date: '2026-07-05',
    category: 'Interview',
    title: 'メンバーストーリー：文系からWeb開発へ',
    excerpt: '宇宙とは無縁だと思っていた学生が、開発チームで活躍するまで。',
    thumbnail: '/images/design-session.png',
    thumbnailAlt: 'デザインセッション',
    author: '編集部',
    readingTime: 5,
    lead: '専攻も経験も関係ない。挑戦を肯定する環境が、一人のキャリアを大きく動かしました。',
    body: [
      {
        paragraphs: ['「わからない」を言える場所だったから続けられた、と本人は語ります。'],
      },
    ],
  },
]

export function getMediaBySlug(slug: string): MediaItem | undefined {
  return media.find((m) => m.slug === slug)
}

export function getFeaturedMedia(): MediaItem {
  return media.find((m) => m.featured) ?? media[0]
}

export function getPopularMedia(count = 3): MediaItem[] {
  return media.filter((m) => m.popular).slice(0, count)
}

export function getLatestMedia(count = 3): MediaItem[] {
  return [...media].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, count)
}
