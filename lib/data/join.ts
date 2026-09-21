import type { JobPosition, Faq, JobCategory } from '@/lib/types'

export const jobCategories: JobCategory[] = [
  'イベント企画',
  'コミュニティ運営',
  'デザイン',
  '広報',
  'Web開発',
  'AI活用',
  '企業連携',
  '新規事業',
  '調査研究',
  'PM',
]

export const canDoAreas = [
  { title: 'イベント企画', description: 'シンポジウムやワークショップを企画・運営する。' },
  { title: 'コミュニティ運営', description: 'Cosmo Baseで人と人をつなぎ、場を育てる。' },
  { title: 'デザイン', description: '広報物やプロダクトUIをデザインする。' },
  { title: '広報', description: 'SNSやメディアを通じてFSIFの活動を発信する。' },
  { title: 'Web開発', description: '公式サイトやプロダクトの開発に携わる。' },
  { title: 'AI活用', description: '業務やコンテンツにAIを取り入れ効率化する。' },
  { title: '企業連携', description: '企業・団体との連携やパートナーシップを推進する。' },
  { title: '新規事業', description: '新しいプロジェクトを立ち上げ、形にする。' },
  { title: '調査研究', description: '宇宙産業の動向を調べ、レポートにまとめる。' },
  { title: 'PM', description: 'プロジェクトの進行と成果に責任を持つ。' },
]

export const jobPositions: JobPosition[] = [
  {
    slug: 'event-planner',
    title: 'イベント企画メンバー',
    category: 'イベント企画',
    status: '募集中',
    commitment: '週3〜5時間 / オンライン中心',
    location: 'オンライン（都内で対面あり）',
    description: '宇宙ビジネスシンポジウムをはじめ、共創が生まれるイベントを企画・運営します。',
    responsibilities: ['企画立案と運営', '登壇者・参加者との調整', '当日運営とふりかえり'],
    welcome: ['人と話すのが好きな方', '段取りを考えるのが得意な方'],
  },
  {
    slug: 'community-manager',
    title: 'コミュニティ運営メンバー',
    category: 'コミュニティ運営',
    status: '募集中',
    commitment: '週2〜4時間 / オンライン中心',
    location: 'オンライン',
    description: 'Cosmo Baseで参加者が交流しやすい場をつくり、コミュニティを育てます。',
    responsibilities: ['ミートアップの運営', '参加者フォロー', 'コンテンツ企画'],
    welcome: ['場づくりに関心がある方', '継続的に関われる方'],
  },
  {
    slug: 'designer',
    title: 'デザインメンバー',
    category: 'デザイン',
    status: '若干名',
    commitment: '案件ベース',
    location: 'オンライン',
    description: '広報物やイベントビジュアル、プロダクトUIのデザインを担当します。',
    responsibilities: ['グラフィック / UIデザイン', 'ブランドの一貫性の担保'],
    welcome: ['FigmaなどのツールをさわれるとGOOD', '未経験でも学ぶ意欲があれば歓迎'],
  },
  {
    slug: 'web-engineer',
    title: 'Web開発メンバー',
    category: 'Web開発',
    status: '募集中',
    commitment: '週3〜6時間',
    location: 'オンライン',
    description: '公式サイトやプロダクトOrbitの開発に携わります。',
    responsibilities: ['フロントエンド / バックエンド開発', '機能改善と保守'],
    welcome: ['HTML/CSS/JSの基礎がある方', 'React / Next.js経験者は歓迎'],
  },
  {
    slug: 'pr-member',
    title: '広報メンバー',
    category: '広報',
    status: '募集中',
    commitment: '週2〜4時間',
    location: 'オンライン',
    description: 'SNSやメディアを通じて、FSIFの活動を社会に届けます。',
    responsibilities: ['SNS運用', '記事・レポートの編集', 'メディア対応'],
    welcome: ['文章を書くのが好きな方', 'SNS運用に関心がある方'],
  },
  {
    slug: 'researcher',
    title: '調査研究メンバー',
    category: '調査研究',
    status: '若干名',
    commitment: '案件ベース',
    location: 'オンライン',
    description: 'シンクタンク事業で宇宙産業の動向を調査・分析し、レポートにまとめます。',
    responsibilities: ['調査設計とデータ収集', '分析とレポート執筆'],
    welcome: ['調べてまとめるのが得意な方', '専攻は問いません'],
  },
  {
    slug: 'project-manager',
    title: 'プロジェクトマネージャー',
    category: 'PM',
    status: '募集中',
    commitment: '週4〜6時間',
    location: 'オンライン',
    description: '複数のメンバーをまとめ、プロジェクトを成果まで導きます。',
    responsibilities: ['進行管理', 'メンバーのアサインと調整', '成果のふりかえり'],
    welcome: ['リーダー経験のある方', 'Orbitを活用した運営に関心がある方'],
  },
]

export const memberStories = [
  {
    name: 'Aさん',
    role: 'Web開発 / 大学2年',
    quote: '文系でしたが、肯定してくれる環境で挑戦でき、いまは開発チームで活躍しています。',
    image: '/images/design-session.png',
  },
  {
    name: 'Bさん',
    role: 'イベント企画 / 大学3年',
    quote: 'シンポジウムの運営を任せてもらい、企業の方と直接話せる経験ができました。',
    image: '/images/SBS24R.png',
  },
  {
    name: 'Cさん',
    role: 'コミュニティ運営 / 大学1年',
    quote: '入学してすぐでも任せてもらえる環境で、自分の視野が大きく広がりました。',
    image: '/images/cosmobase.png',
  },
]

export const joinFaqs: Faq[] = [
  {
    question: '未経験でも参加できますか？',
    answer:
      'はい。FSIFは「肯定の組織ですべてに挑戦」を掲げています。多くのメンバーが未経験から活動を始め、実践を通じてスキルを身につけています。',
  },
  {
    question: '宇宙系の専攻でなくても大丈夫ですか？',
    answer:
      '問題ありません。文系・理系・専攻を問わず、さまざまなバックグラウンドのメンバーが活躍しています。デザイン、広報、開発など関わり方は多様です。',
  },
  {
    question: 'どのくらいの頻度で活動しますか？',
    answer:
      'ポジションによりますが、週2〜6時間程度が目安です。案件ベースで関わる形もあり、学業や本業と両立している方が多数です。',
  },
  {
    question: '所属している大学は関係ありますか？',
    answer: '大学は問いません。複数の大学・地域のメンバーがオンラインを中心に協働しています。',
  },
  {
    question: '地方に住んでいても参加できますか？',
    answer:
      'できます。活動はオンラインを基本としているため、全国どこからでも参加可能です。対面イベントは任意参加です。',
  },
  {
    question: 'オンラインだけの参加も可能ですか？',
    answer: '可能です。多くのメンバーがオンライン中心で活動しています。対面での交流機会も別途用意しています。',
  },
  {
    question: '社会人でも参加できますか？',
    answer: '申し訳ございません。FSIFは学生を対象とした組織のため、社会人の方にはご参加いただけません。',
  },
  {
    question: '応募から参加までの流れを教えてください。',
    answer:
      'お問い合わせフォームからのエントリー後、オンライン面談を経て、興味のある事業・ポジションで活動を開始します。',
  },
]

export const joinFlow = [
  { step: '01', title: 'エントリー', description: 'お問い合わせフォームから関心のある領域を添えて応募します。' },
  { step: '02', title: 'オンライン面談', description: 'カジュアルにお話しし、活動内容や希望をすり合わせます。' },
  { step: '03', title: 'オリエンテーション', description: '活動の進め方やツール（Orbit）の使い方を共有します。' },
  { step: '04', title: '活動スタート', description: '興味のある事業・プロジェクトで実際の活動を始めます。' },
]

export function getJobBySlug(slug: string): JobPosition | undefined {
  return jobPositions.find((j) => j.slug === slug)
}
