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
    date: '2026-08-20',
    category: 'PARTNERSHIP' as NewsCategory,
    title: 'LYNCS様とのパートナーシップ締結',
    slug: 'cblyncs',
  },
  {
    date: '2026-08-17',
    category: 'EVENT' as NewsCategory,
    title: '全国の学生ものづくりが集結する「全日本学生ものづくりEXPO」信州・関東大会へ出展およびピッチ登壇決定',
    slug: 'mono26',
  },
  {
    date: '2026-06-18',
    category: 'PARTNERSHIP' as NewsCategory,
    title: '一般社団法人宇宙産業機構（iSIO）様とのパートナーシップ締結',
    slug: 'cbisio',
  },
]

export const news: NewsItem[] = [
  {
    slug: 'sbs24st',
    date: '2024-09-01',
    category: 'EVENT',
    title: '宇宙ビジネスシンポジウム2024申込開始',
    excerpt: '宇宙ビジネスシンポジウム2024の申込を開始しました！',
    thumbnail: '/event/SBS24.jpg',
    thumbnailAlt: '宇宙ビジネスシンポジウム2024の告知',
    relatedArea: 'event',
    lead: '宇宙ビジネスシンポジウム2024の申込を開始しました！',
    body: [
      {
        paragraphs: [
          '宇宙ビジネスシンポジウム2024の申込を開始しました！',
        ],
      }
    ],
    externalUrl: { label: '詳細・申込はこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/0928' },
  },
  {
    slug: 'isio',
    date: '2025-02-01',
    category: 'PARTNERSHIP',
    title: 'iSIOに加入しました',
    excerpt: 'この度FSIFはiSIO宇宙産業機構の学生団体会員として入会いたしました。',
    thumbnail: '/news/iSIO会員証.png',
    thumbnailAlt: 'iSIO宇宙産業機構への加入認定証',
    lead: 'この度FSIFはiSIO宇宙産業機構の学生団体会員として入会いたしました。',
    body: [
      {
        paragraphs: [
          'この度FSIFはiSIO宇宙産業機構の学生団体会員として入会いたしましたことをご報告させていただきます。',
          '学生団体会員として入会を通して更なる宇宙産業の拡大に努めていく所存です。',
          'FSIFは引き続き他産業の宇宙産業進出を学生視点でアプローチすべく活動を進めてまいります。',
          'iSIO宇宙産業機構',
          '日本の技術で宇宙を拓く。ワクワクする未来へをミッションに掲げ活動する非営利の一般社団法人。月2回の宇宙大学を開催するなど宇宙分野の発展に取り組んでおります。2025年からは宇宙検定も始まりより一層活動の幅を広げている。',
          'https://isio-space.my.canva.site/',
          '未来宇宙産業フォーラム',
          '他産業の宇宙産業進出を学生視点でアプローチすべく活動している学生団体。2023年に発足以降イベント活動、常設活動、報告書作成を通して他産業の宇宙進出について理解促進やアイディア創出を行う。',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/isio' },
  },
  {
    slug: 'cbastrokit',
    date: '2026-04-02',
    category: 'PARTNERSHIP',
    title: 'AstroKIT様とのパートナーシップ締結',
    excerpt: 'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する天文プロジェクト「AstroKIT」様とパートナーシップを締結したことをお知らせいたします。 ',
    thumbnail: '/CB/AstroKIT_PR.png',
    thumbnailAlt: 'Cosmo BaseとAstroKITのパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する天文プロジェクト「AstroKIT」様とパートナーシップを締結したことをお知らせいたします。 ',
    body: [
      {
        paragraphs: [
          'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する天文プロジェクト「AstroKIT（アストロキット）」様とパートナーシップを締結したことをお知らせいたします。 ',
        ],
      },
      {
        heading: 'AstroKIT 様の紹介',
        paragraphs: [
          'AstroKIT は、九州工業大学の学生が「工学で天文を探求する」ことを理念に活動する天文プロジェクトです。観望会や講演会などの対外活動に加え、掩蔽観測や UV 観測装置の開発など、学術的価値のある研究にも挑戦しています。学生自らがテーマを立案し、主体性を重視したプロジェクト運営を実施しており、探究活動を通じて、理学的疑問を工学的手法で解決できる人材育成を目指しています。',
          ' 本パートナーシップは、Cosmo Base の「宇宙をもっと身近にする」という理念に AstroKIT 様がご共感くださったことにより実現いたしました。',
          '今後、Cosmo Base は AstroKIT 様のご協力をいただきながら、宇宙をさらに身近にするための取り組みを共に進めてまいります。',
        ],
      },
      {
        heading: 'AstroKIT 団体概要',
        paragraphs: [
          '団体名：AstroKIT(アストロキット)',
          '活動内容：',
          '➢定常活動',
          '天文ゼミ、観望会・講演会などのイベント運営',
          '➢探究活動(現在テーマ 5 つ）',
          '「掩蔽観測・装置開発」',
          '「小型 UV 観測機器開発」',
          '「シーイング測定装置開発」',
          '「望遠鏡の遠隔操作化」',
          '「屋上望遠鏡の改修」',
          'AstroKIT ホームページ',
        ],
      },
      {
        heading: 'Cosmo Base 運営紹介',
        paragraphs: [
          '運営団体：未来宇宙産業フォーラム(ミライウチュウサンギョウフォーラム)',
          '代表者：共同設立者兼代表,眞鍋 和士(マナベ カズト)',
          '設立：2023 年 9 月 10 日',
          '活動内容：イベントの開催、コミュニティーの運営 他',
          '未来宇宙産業フォーラム(FSIF)ホームページ',
        ],
      },
      {
        heading: 'Cosmo Base コミュニティー紹介',
        paragraphs: [
          '事業名：Cosmo Base(コスモベース)',
          '代表者：Cosmo Base 事業責任者,後藤 槻成(ゴトウ キナリ)',
          '設立：2026 年 4 月 1 日',
          'サービス内容：メディア、イベント紹介 他',
          'Cosmo Baseホームページ',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFAKIT' },
  },
  {
    slug: 'jssw',
    date: '2025-06-04',
    category: 'NEWS',
    title: 'モノづくり団体・研究室を募集',
    excerpt: '学生の宇宙開発団体の認知度向上などを目的としてJapan Students Space Weekを開催する運びとなりました。詳細はお気軽にご連絡ください。',
    thumbnail: '/images/SBS24R.png',
    thumbnailAlt: '学生団体同士の交流の様子',
    lead: '学生の宇宙開発団体の認知度向上などを目的としてJapan Students Space Weekを開催する運びとなりました。詳細はお気軽にご連絡ください。',
    body: [
      {
        paragraphs: [
          '　FSIFではこの度学生の宇宙開発団体の認知度向上などを目的としてJapan Students Space Weekを開催する運びとなりました。',
          '　全国には多数の学生宇宙開発団体が存在しますが、各団体が個別に広報を行っているため、業界全体としてのプロモーション効果には限界があります。このため、学生宇宙開発活動の社会的認知度は低く、企業からの協賛獲得や新規メンバーの勧誘において課題を抱えています。',
          '　この状況を打開するには、全国の学生団体が連携し、統一的かつ集中的に広報活動を展開することによりメディアからの注目を集めることが大きな役割を果たすと考えます。その結果普段アプローチできない層への広報活動が可能となり有効です。全国規模でのプロモーションによって認知度を高めることで、協賛企業の獲得や学生参加者の増加につながると期待されます。',
          '　さらに、拡大を続ける宇宙産業においては宇宙戦略基金をはじめ資金面では潤ってきたが人材不足が深刻です。本企画で資金調達ができれば活動資金の確保に伴うバイトの時間等を短縮でき学生団体の技術力向上につながると考えます。その結果学生の技術力向上は優秀な人材の輩出につながるため人材不足対策の一役を担えます。したがって、広報強化は単なる認知拡大にとどまらず、宇宙産業全体の人材基盤の強化にも資するものです。',
          '　興味をお持ちいただけたものづくり団体、研究室はお気軽にご連絡ください。詳細を送らせていただきます。',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/jssw' },
  },
  {
    slug: 'mvvp',
    date: '2025-11-11',
    category: 'PRESS RELEASE',
    title: 'MVVPを改訂しました。',
    excerpt: '団体の原点である「他産業の宇宙産業進出を学生視点でアプローチする」に戻り、MVVPを改訂しました。',
    thumbnail: '/news/MVVP.png',
    thumbnailAlt: 'MVVP改訂のイメージ',
    lead: '団体の原点である「他産業の宇宙産業進出を学生視点でアプローチする」に戻り、MVVPを改訂しました。',
    body: [
      {
        paragraphs: [
          '　未来宇宙産業フォーラム(FSIF)はJSSWの取り組みを通じ活動の原点である「他産業の宇宙産業進出を学生視点でアプローチする」に立ち返りmission、visionを改定いたしました。また同時にvalue、purposeを新たに設置することとなりました。未来宇宙産業フォーラムは初心に戻り様々な取り組みを続けてまいります。',
        ],
      },
      {
        heading: 'Mission（存在意義）',
        paragraphs: [
          '「すべての人に“宇宙とかかわる選択肢”をつくる」',
          '　宇宙を“遠い夢”から“日常の選択”へ。学ぶ・作る・観る・遊ぶ・働くなど関わり方を多様化し色々な形で宇宙とかかわる機会を提供します。',
        ],
      },
      {
        heading: 'Vision（めざす未来像）',
        paragraphs: [
          '「宇宙を、みんなのものにする」',
          '　現在の限られた人の“専用空間”から、誰もがアクセスできる“共有インフラ”へ。宇宙が教育・産業・文化の基盤として機能する社会を目指していきます。',
        ],
      },
      {
        heading: 'Value（価値観）',
        paragraphs: [
          '「肯定の組織で、すべてに挑戦する」',
          '　挑戦の精神を忘れず、宇宙系学生団体として初めての企画やプロジェクトの立ち上げや参画する。この挑戦の精神によりmission、visionの達成を目指します。',
        ],
      },
      {
        heading: 'Purpose（存在の理由）',
        paragraphs: [
          '「一番身近な“宇宙の専門家”」',
          '　初めて宇宙に触れる人の隣にいる案内人。難解さをほぐし、面白さと意義を翻訳して届ける。',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/mvvp' },
  },
  {
    slug: 'cbop',
    date: '2026-04-01',
    category: 'PRESS RELEASE',
    title: 'Cosmo Base 正式オープンのお知らせ',
    excerpt: '2026年4月1日より、新たな宇宙コミュニティ「Cosmo Base」を正式にオープンいたしましたのでお知らせいたします。',
    thumbnail: '/CB/CBopen.png',
    thumbnailAlt: 'Cosmo Base開設のお知らせ',
    featured: true,
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: '2026年4月1日より、新たな宇宙コミュニティ「Cosmo Base」を正式にオープンいたしましたのでお知らせいたします。',
    body: [
      {
        paragraphs: [
          '未来宇宙産業フォーラム（FSIF）は、2026年3月31日より、新たな宇宙コミュニティ「Cosmo Base」を正式にオープンいたしましたのでお知らせいたします。',
        ],
      },
      {
        heading: '設立の背景と目的',
        paragraphs: [
          '近年、宇宙開発や宇宙ビジネスへの注目が急速に高まる中、産業界と一般層、そして次世代を担う学生をつなぐ「場」の重要性が増しています。FSIFは、業界の垣根を越えて宇宙に関する知識を共有し、新たな共創を生み出すプラットフォームとして「Cosmo Base」を設立いたしました。本コミュニティを通じて、宇宙産業全体の裾野拡大と、新たな価値創造に貢献してまいります。',
          'FSIFは今後も「Cosmo Base」の運営を通じて、誰もが宇宙にアクセスし、挑戦できる環境の構築を目指してまいります。',
        ],
      },
      {
        heading: 'Cosmo Base 公式サイト',
        paragraphs: [
          'https://fsifofficial.github.io/CosmoBase/',
          '本件に関するお問い合わせや、コミュニティとの協業・スポンサーシップにご興味のある企業様は、当サイトのお問い合わせフォームよりご連絡ください。',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=Referral&utm_campaign=FSIFHP' },
  },
  {
    slug: 'mono26',
    date: '2026-08-17',
    category: 'EVENT',
    title: '全国の学生ものづくりが集結する「全日本学生ものづくりEXPO」信州・関東大会へ出展およびピッチ登壇決定',
    excerpt: '「2人半年で10万行」を支えた生成AI活用によるデジタルコンテンツ開発プロセスを公開',
    thumbnail: '/news/mono26.png',
    thumbnailAlt: '全日本学生ものづくりEXPOのブース',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: '「2人半年で10万行」を支えた生成AI活用によるデジタルコンテンツ開発プロセスを公開',
    body: [
      {
        paragraphs: [
          '未来宇宙産業フォーラムは、2026年8月20日に開催される「全日本学生ものづくりEXPO＠信州」および、同年8月28日に開催される「全日本学生ものづくりEXPO＠関東」に、運営するコミュニティ「Cosmo Base」とともにブース出展およびピッチ登壇することをお知らせいたします。',
          '出展の背景：全国の情熱ある学生・企業と交わる場へ',
          '「全日本学生ものづくりEXPO」は、ものづくりに情熱を注ぐ全国の学生団体や高専・大学、そして企業が一堂に会し、技術やプロジェクトの垣根を超えて熱い交流と共創を生み出す国内最大級の分野横断型で開催されるものづくりイベントです。',
          '未来宇宙産業フォーラムは本イベントを通じ、多様な分野でモノづくりに励む学生や企業の皆様に向けて、「宇宙」という領域をいかにデジタルとものづくりで身近なものにしているか、その挑戦を発信いたします。',
          'ピッチおよびブースで公開する内容：新しい時代のものづくり手法',
          '未来宇宙産業フォーラムが運営するCosmo Baseでは、「ものづくりが主の活動ではない」としながらも、少数精鋭の限られたリソースの中で「宇宙タイプ診断」や各種データベース（Museum Database、Event Database）、運営支援ダッシュボードなどのデジタルコンテンツを自らの手で高速に開発・展開してきました。',
          '今回のピッチおよびブース展示では、「2人半年で10万行」のコードを生み出した、次世代の開発プロセスを共有します。',
          '生成AIを活用した超高速開発サイクル',
          '企画・要件定義からUI/UX作成、コーディングに至るまで、GeminiやClaude、ChatGPT、v0などの生成AIを適材適所で活用し、開発スピードと品質を最大化。',
          'データ駆動型の改善と自動化',
          'ダッシュボードによる運用データの可視化を徹底し、クイズ等の運用で自動化率54%を達成。データに基づく即時改善の仕組みを構築。',
          '応援される力と熱量の共有',
          '単なる技術の披露にとどまらず、プロジェクトを推進する組織マネジメントや、多様なステークホルダーを巻き込む発信・共創のプロセスを提示。',
          'ものづくりに挑む学生やパートナー企業の皆様との対話を通じて、宇宙産業のすそ野を広げ、次世代のイノベーションを加速させる契機といたします。',
          '開催概要',
          '主催：株式会社Alumnote',
        ],
      },
      {
        heading: '全日本学生ものづくりEXPO ＠信州',
        paragraphs: [
          '開催日：2026年8月20日（木）13:30開始・19:00ごろ終了予定',
          '会場：ホテルメトロポリタン長野',
          '内容：ブース出展およびピッチ登壇',
        ],
      },
      {
        heading: '全日本学生ものづくりEXPO ＠関東',
        paragraphs: [
          '開催日：2026年8月28日（金）13:30開始・19:00ごろ終了予定',
          '会場：東京都立産業貿易センター台東館',
          '内容：ブース出展およびピッチ登壇',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/mono26' },
  },
  {
    slug: 'sgsw25',
    date: '2025-01-30',
    category: 'EVENT',
    title: '学生団体サミット2025 Winter に参加します',
    excerpt: '未来宇宙産業フォーラムは2025年2月10日に開催される学生団体サミット2025 Winterに参加いたします。',
    thumbnail: '/news/学生団体サミット .jpg',
    thumbnailAlt: '学生団体サミット2025 Winterの告知',
    lead: '未来宇宙産業フォーラムは2025年2月10日に開催される学生団体サミット2025 Winterに参加いたします。',
    body: [
      {
        paragraphs: [
          '　未来宇宙産業フォーラムは2025年2月10日に開催される学生団体サミット 2025 Winterに参加いたします。',
          '　昨年8月に開催された同イベントでは数多くの方に宇宙産業そして私たちについてご紹介する機会を頂きました。今回は決勝への進出を果たしさらに多くの方に宇宙産業について知っていただけるよう努めます。',
          '　また宇宙ビジネスシンポジウムなどの活動をさらにより良いものにするため20万円の賞金の獲得も目指します。どうぞよろしくお願いいたします。',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/sgsw25' },
  },
  {
    slug: 'spaceuniv',
    date: '2024-11-27',
    category: 'MEDIA',
    title: '宇宙大学様HPに掲載いただきました',
    excerpt: '宇宙学生団体の紹介としてFSIFが掲載されました。',
    thumbnail: '/news/宇宙学生団体02-1024x288_edited_edited.jpg',
    thumbnailAlt: '宇宙学生団体の紹介バナー',
    lead: '宇宙学生団体の紹介としてFSIFが掲載されました。',
    body: [
      {
        paragraphs: [
          '宇宙学生団体の紹介としてFSIFが掲載されました。',
        ],
      }
    ],
    externalUrl: { label: '掲載ページはこちら', href: 'https://spaceuniversity.jp/student-group/' },
  },
  {
    slug: 'cbfuzion',
    date: '2026-04-05',
    category: 'PARTNERSHIP',
    title: 'Fuzion関東様とのパートナーシップ締結',
    excerpt: 'FSIFが運営する宇宙コミュニティー「Cosmo Base」はこのたび、「地球を、僕らの遊び場にしよう。」という理念のもと活動する学生団体「Fuzion関東」様とパートナーシップを締結したことをお知らせいたします。',
    thumbnail: '/CB/CBfuzion.png',
    thumbnailAlt: 'Cosmo BaseとFuzion関東のパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIFが運営する宇宙コミュニティー「Cosmo Base」はこのたび、「地球を、僕らの遊び場にしよう。」という理念のもと活動する学生団体「Fuzion関東」様とパートナーシップを締結したことをお知らせいたします。',
    body: [
      {
        paragraphs: [
          'FSIFが運営する宇宙コミュニティー「Cosmo Base」はこのたび、「地球を、僕らの遊び場にしよう。」という理念のもと活動する学生団体「Fuzion関東」様とパートナーシップを締結したことをお知らせいたします。',
        ],
      },
      {
        heading: 'Fuzion関東様の紹介',
        paragraphs: [
          'Fuzion関東は、沖縄・関東の2拠点で「ワクワク・夢中になることならなんでもする」をモットーに活動する学生団体です。ワークショップの実施やボードゲーム制作、さらには3ヶ月で500以上の夢を集めた「夢を集めて地図をつくる旅」など、既存の枠にとらわれない多様なプロジェクトを展開しています。OWOP学生活動大使（沖縄）にも認定されており、その圧倒的な行動力と創造性で、若者の夢を形にする活動を続けています。',
          '本パートナーシップは、Cosmo Baseの「宇宙をもっと身近にする」という理念にFuzion関東様がご共感くださったことにより実現いたしました。',
          '今後、Cosmo BaseはFuzion関東様の持つ「ワクワクを形にする力」をお借りしながら、宇宙というフィールドをさらに楽しく、身近な遊び場へと変えていく取り組みを共に進めてまいります。',
        ],
      },
      {
        heading: 'Fuzion関東 団体概要',
        paragraphs: [
          'Fuzion ホームページ ',
        ],
      },
      {
        heading: 'Cosmo Base 運営紹介',
        paragraphs: [
          '運営団体：未来宇宙産業フォーラム(ミライウチュウサンギョウフォーラム)',
          '代表者：共同設立者兼代表,眞鍋 和士(マナベ カズト)',
          '設立：2023年9月10日',
          '活動内容：イベントの開催、コミュニティーの運営 他',
          '未来宇宙産業フォーラム(FSIF)ホームページ',
        ],
      },
      {
        heading: 'Cosmo Base コミュニティー紹介',
        paragraphs: [
          '事業名：Cosmo Base(コスモベース)',
          '代表者：Cosmo Base事業責任者,後藤 槻成(ゴトウ キナリ)',
          '設立：2026年4月1日',
          'サービス内容：メディア、イベント紹介 他',
          'Cosmo Baseホームページ',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFfuzion' },
  },
  {
    slug: 'fsid3',
    date: '2024-11-20',
    category: 'EVENT',
    title: '未来宇宙産業DAY DAY3開催',
    excerpt: '12/20(金)19:00～21:00に未来宇宙産業DAY DAY3を開催します。',
    thumbnail: '/event/FSID3.jpg',
    thumbnailAlt: 'ワークショップの様子',
    relatedArea: 'event',
    lead: '12/20(金)19:00～21:00に未来宇宙産業DAY DAY3を開催します。',
    body: [
      {
        paragraphs: [
          '―もし宇宙旅行に行ったら、どんなことをしてみたいですか？―',
          '　そんな問いから始まるこのワークショップでは、4、5人のグループで、宇宙で〇〇してみたら…と想像して、宇宙開発について考えていただきます。',
          '　例えば、宇宙で絵を描いてみたいと考えると、無重力という環境で描けるのだろうか、そもそも絵具を使うことができるのだろうかと様々な問題が浮かび上がってきます。',
          '　そんな課題の解決策をグループで考えていただきます。',
          '　宇宙旅行も夢物語ではない今、実際に宇宙に行ってみたらどうなるのか考えてみませんか？',
          'こんな方におすすめ！',
          '・宇宙が好きで、いつか宇宙旅行をしてみたい方！',
          '・宇宙について詳しくないけど、これから学んでみたい方！',
          '・宇宙に関わる仕事に就いてみたいと考えている方！',
          '　少しでも宇宙について知りたいな、宇宙に行ってみたいなと思う方は是非お越しください。',
        ],
      },
      {
        heading: 'イベント概要',
        paragraphs: [
          '★開催日　2024年12月20日（金）',
          '★開催時間',
          '　19時00分～21時00分（受付開始は18時40分）',
          '★申込期限　12月19日',
          '★会場　宇宙の店（JR浜松町駅南口直結）',
          '★アクセス　https://spacegoods.net/file/access-map.pdf',
          '★定員　15名',
          '★参加費　無料！',
          '★主催　宇宙の店',
          '★お願い　',
          '　本イベントはワークショップ形式のため、当日の参加人数を前もって把握したいと考えています。',
          '　申し込み後、ご参加が難しくなった場合は、以下のメールアドレスにご連絡ください。',
          'fsif.official@gmail.com',
        ],
      },
      {
        heading: '宇宙の店とは',
        paragraphs: [
          '　宇宙食から宇宙雑貨、マニアックなグッズまで多様な宇宙関連商品を販売している店です。',
          '　「宇宙を身近に」をコンセプトに、商品販売だけでなく、イベントスペースを設け宇宙関連の展示、ワークショップ、講演会等も実施しています。',
        ],
      },
      {
        heading: '注意事項',
        paragraphs: [
          '・本イベントはワークショップ形式のため、当日の参加人数を前もって把握したいと考えています。',
          '　申し込み後、ご参加が難しくなった場合は、以下のメールアドレスにご連絡ください。',
          'fsif.official@gmail.com',
          '・当日の検温で37.5度以上の発熱が見られる場合は、参加をご遠慮いただきたくお願い申し上げます。',
          '・参加お申込み後、体調不良等によりキャンセルする場合は前日までに必ずご連絡ください。',
          '・イベントの様子を記録用に撮影させていただきます。',
          '・その他、お問い合わせはPeatixのメッセージよりご連絡ください',
        ],
      }
    ],
    externalUrl: { label: '申込はこちら', href: 'https://spacegoodstokyo20241220.peatix.com/view' },
    relatedLink: { label: '開催実績（報告書）を見る', href: '/activities/event/FSID3' },
  },
  {
    slug: 'cblyncs',
    date: '2026-08-20',
    category: 'PARTNERSHIP',
    title: 'LYNCS様とのパートナーシップ締結',
    excerpt: 'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、慶應義塾大学公認学生団体「宇宙科学総合研究会 LYNCS」様とパートナーシップを締結したことをお知らせいたします。',
    thumbnail: '/CB/CBLYNCS.png',
    thumbnailAlt: 'Cosmo BaseとLYNCSのパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、慶應義塾大学公認学生団体「宇宙科学総合研究会 LYNCS」様とパートナーシップを締結したことをお知らせいたします。',
    body: [
      {
        paragraphs: [
          'FSIF が運営する宇宙コミュニティー「Cosmo Base」はこのたび、慶應義塾大学公認学生団体「宇宙科学総合研究会 LYNCS（リンクス）」様とパートナーシップを締結したことをお知らせいたします。',
        ],
      },
      {
        heading: '宇宙科学総合研究会 LYNCS 様の紹介',
        paragraphs: [
          '宇宙科学総合研究会 LYNCS（Laboratory of sYNnthetic Cosmic Science、リンクス）は、宇宙についてさまざまな側面から研究・アプローチする学生団体です。天文・工学・理学・先進技術の 4 本部に分かれ、研究や観測、遠征などに取り組んでいます。活動分野ごとに小規模なセクションを設け、フットワークの軽さを生かした活動を展開していることも特徴です。また、団体活動に加え、ゲームや数理科学、物理学、デザインなど共通の趣味や関心を持つ会員同士が集まり、議論や交流を深めています。',
          ' 本パートナーシップは、宇宙に関心を持つ人々の学びと交流の機会を広げ、宇宙をより身近に感じられる環境を共につくることを目的として実現いたしました。',
          ' 今後、Cosmo Base は LYNCS 様と連携し、それぞれの活動や知見を生かしながら、宇宙をさらに身近にするための取り組みを進めてまいります。 ',
        ],
      },
      {
        heading: '宇宙科学総合研究会 LYNCS 団体概要',
        paragraphs: [
          '団体名：宇宙科学総合研究会 LYNCS（リンクス）',
          '正式英語名：Laboratory of sYNnthetic Cosmic Science',
          '設立：2014 年 6 月',
          '所属：2015 年より慶應義塾大学公認学生団体、2016 年より慶應義塾大学文化団体連盟所属',
          '活動内容：天文・工学・理学・先進技術の 4 本部を中心とした研究、観測、遠征、分野別セクション活動、会員同士の交流・議論',
          '公式サイト：https://lyncs-keio.net/',
          'X：https://x.com/keio_LYNCS',
          'Instagram：https://instagram.com/keio_lyncs',
        ],
      },
      {
        heading: 'Cosmo Base 運営紹介',
        paragraphs: [
          '運営団体：未来宇宙産業フォーラム(ミライウチュウサンギョウフォーラム)',
          '代表者：共同設立者兼代表 眞鍋 和士(マナベ カズト)',
          '設立：2023 年 9 月 10 日',
          '活動内容：イベントの開催、コミュニティ－の運営 他',
        ],
      },
      {
        heading: 'Cosmo Base コミュニティ－紹介',
        paragraphs: [
          '事業名：Cosmo Base(コスモベース)',
          '代表者：Cosmo Base 事業責任者,後藤 槻成(ゴトウ キナリ)',
          '設立：2026 年 4 月 1 日',
          'サービス内容：メディア、イベント紹介 他',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFAKIT' },
  },
  {
    slug: 'hp',
    date: '2024-07-04',
    category: 'NEWS',
    title: 'HPリニューアル',
    excerpt: 'HPをリニューアルいたしました。',
    thumbnail: '/images/member.png',
    thumbnailAlt: '宇宙ビジネスシンポジウム2024でのメンバーの集合写真',
    lead: 'HPをリニューアルいたしました。',
    body: [
      {
        paragraphs: [
          'FSIFでは2024年7月4日にHPをリニューアルいたしました。新しいHPではこれまで以上に詳しいFSIFの情報を掲載すると共に「見やすく」「分かりやすい」HPを目指して制作いたしました。今後もアップデートを重ね他産業の宇宙産業進出に寄与できる情報を分かりやすく提供できるように努めてまいります。',
        ],
      }
    ],
  },
  {
    slug: 'owop',
    date: '2025-10-16',
    category: 'PRESS RELEASE',
    title: '大阪・関西万博 学生活動大使に就任',
    excerpt: '大阪・関西万博における公式公式催事のOne World, One Planet.のWish Partner 学生共感企画実行委員会より学生活動大使に任命されました。',
    thumbnail: '/news/owop_TOP.png',
    thumbnailAlt: '大阪・関西万博One World, One Planet.のドローンショー',
    lead: '大阪・関西万博における公式公式催事のOne World, One Planet.のWish Partner 学生共感企画実行委員会より学生活動大使に任命されました。',
    body: [
      {
        paragraphs: [
          '未来宇宙産業フォーラム（以下FSIF）は、2025年日本国際博覧会（大阪・関西万博）における公式公式催事のOne World, One Planet.のWish Partner 学生共感企画実行委員会より学生活動大使に任命されました。',
          '「学生活動大使」は、全国の学生がそれぞれの分野や地域で抱く“願い”をもとに、社会課題の解決や未来づくりに向けた活動を共創するプロジェクトです。全国47都道府県・グローバル・バーチャル・スペースの計4カテゴリーで展開され、今回、全国から56団体が選ばれました。',
          'FSIFは、「宇宙を日常にする」をテーマに、宇宙産業と社会をつなぐ学生主体のコミュニティとして活動を続けてきました。今回の選出は、宇宙という新たなフロンティアを通して、次世代が“より良い未来を共に描く場”を生み出していくという私たちの想いが評価されたものです。',
          '今後は、学生活動大使として、宇宙と人々の距離を縮めるイベントや発信活動を通じて、「One World, One Planet.」の理念である“すべての人の願いがつながる未来”を実現することを目指します。',
          'プレスリリース',
          'https://prtimes.jp/main/html/rd/p/000000001.000155638.html',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/owop' },
  },
  {
    slug: 'newfacesmonth11',
    date: '2024-11-01',
    category: 'NEWS',
    title: 'New Faces Month 開幕！',
    excerpt: '11月はメンバー募集強化月間 是非一緒に活動しましょう！',
    thumbnail: '/news/NewFacesMonth2411Date.jpg',
    thumbnailAlt: '11月の説明会開催告知',
    lead: '11月はメンバー募集強化月間 是非一緒に活動しましょう！',
    body: [
      {
        paragraphs: [
          '11月は新メンバー募集強化期間と設定いたしました。',
          '未来宇宙産業フォーラムは他産業の宇宙産業進出を学生視点でアプローチするということを目標に活動をしている学生団体です。',
          '現在までに21名のメンバーが11の大学から集まっています。ほとんどが関東圏のメンバーですが京都、大阪、愛知など全国様々な所から参加してるメンバーもいます。',
          '来年には大阪での常設活動を控えるなどさらに活動が広がっていく今、一緒に活動してみませんか？',
          '2年生を中心として活動していますが1年生のメンバーや4年生のメンバーも在籍しております。',
          '現在はHPのHTML化や宇宙分野についてメンバー理解促進ができるような勉強会の開催など様々なプロジェクトが発足しています。',
          '今の力を試すもよし、成長の場として利用するのもよし、是非皆さんの力を成長できる場として利用してください。',
          '11月中に10回の説明会の実施を予定しています。',
          '是非下記フォームを回答していただけますと幸いです。',
          '宇宙への架け橋を一緒に作っていきましょう！！',
          'メンバーになりたい方はContactから連絡してください。',
        ],
      }
    ],
    externalUrl: { label: 'メンバーになる', href: 'https://forms.gle/RtD4v93fPVcER7tZ9' },
  },
  {
    slug: 'karura',
    date: '2024-10-31',
    category: 'PARTNERSHIP',
    title: 'KARURAプロジェクトとスチューデントパートナー締結',
    excerpt: 'KARURAプロジェクトとスチューデントパートナーを締結いたしました。',
    thumbnail: '/news/KARRARFSIF.png',
    thumbnailAlt: 'KARURAプロジェクトとFSIFのスチューデントパートナー締結',
    lead: 'KARURAプロジェクトとスチューデントパートナーを締結いたしました。',
    body: [
      {
        paragraphs: [
          '未来宇宙産業フォーラム(代表：眞鍋和士、以下FSIF)はKARURAプロジェクト(中心拠点：信州大学、代表：辻紅那、以下KARURA)のスチューデントパートナーを締結いたしましたことをご報告させていただきます。',
          '　FSIFとKARURAは互いに活動の拡大及び宇宙分野の拡大に向け協力してまいります。',
          '　FSIFとしましてはKARURAを軸としたイベント開発やSNS等を用いた広報活動、常設活動等を通して宇宙分野の議論等を行ってまいりたいと思います。',
          '　今後の続報をお待ちください。',
        ],
      },
      {
        heading: 'KARURAプロジェクト',
        paragraphs: [
          '　「学生による国際宇宙開発」というキーワードを軸にUniversity Rover Challange(世界最高峰の火星ローバーの大会)に挑戦している、2022年に結成した日米合同チーム。',
          'mission',
          '　学生の宇宙開発の技術力を底上げし、国際開発が当たり前となる社会を目指す',
        ],
      },
      {
        heading: 'FSIF',
        paragraphs: [
          '　他産業の宇宙産業進出を学生視点でアプローチすることを目標に活動を行っている学生団体。',
          'mission',
          '　全ての産業の宇宙産業進出',
          'vision',
          '　宇宙への架け橋を ～誰もが宇宙に挑戦する時代へ～',
        ],
      }
    ],
    externalUrl: { label: '詳しくはこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/news/karura' },
  },
  {
    slug: 'cbisio',
    date: '2026-06-18',
    category: 'PARTNERSHIP',
    title: '一般社団法人宇宙産業機構（iSIO）様とのパートナーシップ締結',
    excerpt: 'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、学びと出会いのプラットフォームを通じて宇宙産業の人を応援する非営利団体「一般社団法人宇宙産業機構（iSIO）」様とパートナーシップを締結したことをお知らせいたします。',
    thumbnail: '/CB/CBiSIO.png',
    thumbnailAlt: 'Cosmo BaseとiSIOのパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、学びと出会いのプラットフォームを通じて宇宙産業の人を応援する非営利団体「一般社団法人宇宙産業機構（iSIO）」様とパートナーシップを締結したことをお知らせいたします。',
    body: [
      {
        paragraphs: [
          'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、学びと出会いのプラットフォームを通じて宇宙産業の人を応援する非営利団体「一般社団法人宇宙産業機構（iSIO）」様とパートナーシップを締結したことをお知らせいたします。',
        ],
      },
      {
        heading: '一般社団法人宇宙産業機構（iSIO）様の紹介',
        paragraphs: [
          '一般社団法人宇宙産業機構（iSIO）様は、日本の卓越した技術とノウハウを結集し、世界をリードする宇宙産業の構築を目指す非営利団体です。教育や学びの機会、新たな出会いの場を通じて、宇宙産業に挑戦する人や宇宙人材を増やす活動を展開されています。',
          '毎月開催されるオンラインセミナー「気づくセミナー宇宙大学」や「宇宙検定シリーズ」、産業の裾野を広げる「iSIO 会員制度」など、宇宙産業に興味のある方や参入を目指す個人・企業を応援する包括的なプラットフォームを運営されています。',
          '本パートナーシップは、Cosmo Base の掲げる「宇宙をもっと身近にする」という理念に宇宙大学（iSIO）様が深く共感くださったことにより実現いたしました。今後、FSIF および Cosmo Base は宇宙大学（iSIO）様と協力し、学びとコミュニティ－の力を融合させた新たな価値創造と宇宙人材の育成に努めてまいります。',
        ],
      },
      {
        heading: '一般社団法人宇宙産業機構団体概要',
        paragraphs: [
          '法人名：一般社団法人宇宙産業機構',
          '主な活動内容：',
          '主な実績：',
          '公式サイト：https://spaceuniversity.jp/',
          '公式 X：@spaceuni_isio',
          '公式 Instagram：@spaceuniversity.jp ',
        ],
      },
      {
        heading: 'Cosmo Base 運営紹介',
        paragraphs: [
          '• 運営団体：未来宇宙産業フォーラム（FSIF）',
          '• 代表者：共同設立者兼代表 眞鍋 和士',
          '• 設立：2023 年 9 月 10 日',
          '• 活動内容：イベントの開催、コミュニティ－の運営 他',
          '• 公式サイト：https://fsifofficial.wixsite.com/home',
        ],
      },
      {
        heading: 'Cosmo Base コミュニティ－紹介',
        paragraphs: [
          '• 事業名：Cosmo Base（コスモベース）',
          '• 代表者：Cosmo Base 事業責任者 後藤 槻成',
          '• 設立：2026 年 4 月 1 日',
          '• サービス内容：メディア、イベント紹介 他',
          '• 公式サイト：https://fsifofficial.github.io/cosmobase/',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFcometree' },
  },
  {
    slug: 'cbkitsurora',
    date: '2026-06-01',
    category: 'PARTNERSHIP',
    title: 'KIT-AURORA様とのパートナーシップ締結',
    excerpt: 'FSIFが運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する火星探査機開発プロジェクト「KIT-AURORA」様とパートナーシップを締結したことをお知らせいたします。',
    thumbnail: '/CB/CBKITAURORA.png',
    thumbnailAlt: 'Cosmo BaseとKIT-AURORAのパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIFが運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する火星探査機開発プロジェクト「KIT-AURORA」様とパートナーシップを締結したことをお知らせいたします。',
    body: [
      {
        paragraphs: [
          'FSIF（未来宇宙産業フォーラム）が運営する宇宙コミュニティー「Cosmo Base」はこのたび、九州工業大学の学生を中心に活動する火星探査機開発プロジェクト「KIT-AURORA（キット・オーロラ）」様とパートナーシップを締結したことをお知らせいたします。',
        ],
      },
      {
        heading: 'KIT-AURORA様の紹介',
        paragraphs: [
          'KIT-AURORAは、九州工業大学の学生が天体探査機を創るプロジェクトです。「構造・制御・電装・火星探査」の4つの専門分野を中心に、国際大会に向けた火星探査機の高度な研究開発を行っています。',
          '同プロジェクトは、西日本の学生団体として史上初となる火星ローバーの国際大会「University Rover Challenge（URC）」決勝大会への出場を目標に掲げています。技術開発のみならず、日本の宇宙開発の発展への寄与や、次世代を担う高度なエンジニアの育成を目指して活動されています。',
          '本パートナーシップは、Cosmo Baseの掲げる「宇宙をもっと身近にする」という理念にKIT-AURORA様が深く共感くださったことにより実現いたしました。今後、FSIFおよびCosmo BaseはKIT-AURORA様と協力し、技術とコミュニティーの力を融合させた新たな価値創造に努めてまいります。',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFKITA' },
  },
  {
    slug: 'sbs24',
    date: '2024-09-29',
    category: 'EVENT',
    title: '宇宙ビジネスシンポジウム開催',
    excerpt: '宇宙ビジネスシンポジウムご参加ありがとうございました。',
    thumbnail: '/event/SBS24.jpg',
    thumbnailAlt: '宇宙ビジネスシンポジウム2024の告知',
    relatedArea: 'event',
    lead: '宇宙ビジネスシンポジウムご参加ありがとうございました。',
    body: [
      {
        paragraphs: [
          '宇宙ビジネスシンポジウムご参加ありがとうございました。',
        ],
      }
    ],
    externalUrl: { label: '詳細はこちら', href: 'https://fsifofficial.wixsite.com/future-space-industr/0928' },
    relatedLink: { label: '開催実績（報告書）を見る', href: '/activities/event/SBS24' },
  },
  {
    slug: 'cbcometree',
    date: '2026-06-15',
    category: 'PARTNERSHIP',
    title: '株式会社 Cometree様とのパートナーシップ締結',
    excerpt: 'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、志ある若者と社会が出会い、挑戦が次の機会につながる仕組みをつくる共創カンパニー「株式会社 Cometree」様とパートナーシップを締結したことをお知らせいたします。',
    thumbnail: '/CB/CBCometree.png',
    thumbnailAlt: 'Cosmo Baseと株式会社Cometreeのパートナーシップ締結',
    relatedArea: 'community',
    relatedTag: 'cosmobase',
    lead: 'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、志ある若者と社会が出会い、挑戦が次の機会につながる仕組みをつくる共創カンパニー「株式会社 Cometree」様とパートナーシップを締結したことをお知らせいたします。',
    body: [
      {
        paragraphs: [
          'FSIF が運営する宇宙コミュニティ－「Cosmo Base」はこのたび、志ある若者と社会が出会い、挑戦が次の機会につながる仕組みをつくる共創カンパニー「株式会社 Cometree」様とパートナーシップを締結したことをお知らせいたします。',
        ],
      },
      {
        heading: '株式会社 Cometree 様の紹介',
        paragraphs: [
          '株式会社 Cometree さまは志ある若者と社会が出会い、挑戦が次の機会につながる仕組みをつくる共創カンパニーです。学生団体・企業・自治体・大学をつなぎ、イベント、プログラム、実践型プロジェクトを通じて、若者の熱量や行動を社会に届く価値へと変えていらっしゃいます。単なるマッチングではなく、一人ひとりの挑戦が可視化され、応援され、次の成長機会へ接続されるエコシステムの実現を目指されています。',
          '本パートナーシップは、Cosmo Base の掲げる「宇宙をもっと身近にする」という理念に株式会社 Cometree 様が深く共感くださったことにより実現いたしました。今後、FSIF および Cosmo Base は株式会社 Cometree 様と協力し、学びとコミュニティ－の力を融合させた新たな価値創造と宇宙人材の育成に努めてまいります。',
        ],
      },
      {
        heading: '株式会社 Cometree 法人概要',
        paragraphs: [
          '法人名：株式会社 Cometree',
          '主な活動内容：',
          '　　学生と企業・地域をつなぐ共創プログラムの企画・運営',
          '主な実績：',
          '　　学生共創フォーラム 2026 開催',
        ],
      },
      {
        heading: 'Cosmo Base 運営紹介',
        paragraphs: [
          '• 運営団体：未来宇宙産業フォーラム（FSIF）',
          '• 代表者：共同設立者兼代表 眞鍋 和士',
          '• 設立：2023 年 9 月 10 日',
          '• 活動内容：イベントの開催、コミュニティ－の運営 他',
          '• 公式サイト：https://fsifofficial.wixsite.com/home',
        ],
      },
      {
        heading: 'Cosmo Base コミュニティ－紹介',
        paragraphs: [
          '• 事業名：Cosmo Base（コスモベース）',
          '• 代表者：Cosmo Base 事業責任者 後藤 槻成',
          '• 設立：2026 年 4 月 1 日',
          '• サービス内容：メディア、イベント紹介 他',
          '• 公式サイト：https://fsifofficial.github.io/cosmobase/',
        ],
      }
    ],
    externalUrl: { label: 'Cosmo BaseHP', href: 'https://fsifofficial.github.io/CosmoBase/?utm_source=FSIF&utm_medium=referral&utm_campaign=FSIFcometree' },
  }
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
