import type { Metadata } from 'next'
import { Calendar, Clock, Download, MapPin, Mic2, Ticket } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'
import { notFound } from 'next/navigation'
import { fetchEvents } from '@/lib/data/events'
import { pageOpenGraph } from '@/lib/site-url'
import { withBasePath } from '@/lib/utils'
import { PdfViewer } from '@/components/activities/pdf-viewer'

const title = '宇宙ビジネスシンポジウム2024'
const description =
  'FSIFが主催した宇宙ビジネスシンポジウム2024の開催報告。企業・研究機関・大学・学生が立場を越えて宇宙産業の未来を語り合いました。'

export async function generateMetadata(): Promise<Metadata> {
  const events = await fetchEvents()
  const item = events.find((e) => e.slug === 'SBS24')
  return {
    title,
    description,
    openGraph: pageOpenGraph(title, description, item?.image),
  }
}

const mainMessage = [
  '昨今の宇宙産業はITバブル期を思い出させるような急成長を遂げています。そして様々な宇宙ベンチャーが登場し日本の宇宙ベンチャーは100を超えると言われています。またこれまで宇宙産業に関わってこなかった企業の宇宙産業への進出により宇宙利用が増えてきています。そのような中でいまだ世界の宇宙産業の市場規模の内日本の市場は7％ほどで、50％近くある米国が世界の宇宙産業の中心になってしまっています。今後拡大していく宇宙産業で世界の市場を獲得するのは日本経済にも大きな影響をあたえると考えています。これは既存企業がこれまで以上に宇宙産業に進出し宇宙利用を拡大することが重要であることを示しています。',
  'この重要な課題に対し宇宙産業に関わっている企業の方などをお呼びして現状の宇宙開発・宇宙産業についての知識を提供する場を提供させていただきます。また今後ビジネスとして宇宙に関わる際の関わり方についても提案させていただきます。',
  '全くの基礎知識なしでもご参加いただけるように準備しておりますので宇宙にこれまで関わってこなかった方も是非ご参加ください。',
]

const concepts = ['宇宙産業の正しい知識の提供', '新しい宇宙との関わり方の提案']

const recommendedFor = [
  {
    title: '今からでも宇宙産業について勉強したい方',
    body: '現在急速に成長している宇宙産業。今回のイベントでは、様々な分野から第一線で宇宙に関わっていらっしゃる方々をお招きしており、宇宙産業の現状、展望についての意見を聞くことができます。また、宇宙産業について知ることができるだけでなく、宇宙産業との新しい関わり方についても学べます。',
  },
  {
    title: '宇宙、宇宙産業に興味のある学生、またその分野への就職に興味のある学生',
    body: '宇宙はすでに限られた企業だけが携わる狭い分野ではなくなっています。今回の講演、パネルディスカッションには様々な企業の方に登壇していただき、各社の宇宙に対するアプローチを知ることができます。今まで宇宙に関わっていなかった方にも、今後のキャリアの参考になるはずです。',
  },
]

const feeRows = [
  { label: '会場・社会人', price: '2,000円' },
  { label: '会場・学生', price: '1,000円' },
  { label: 'オンライン・社会人', price: '1,600円' },
  { label: 'オンライン・学生', price: '800円' },
  { label: 'レセプション・社会人', price: '3,000円' },
  { label: 'レセプション・学生', price: '1,500円' },
]

interface Speaker {
  name: string
  affiliation: string
}

interface Session {
  time: string
  title: string
  body?: string
  note?: string
  speakers?: Speaker[]
  muted?: boolean
}

interface ProgramDay {
  label: string
  date: string
  dow: string
  sessions: Session[]
}

const program: ProgramDay[] = [
  {
    label: '1日目',
    date: '9月28日',
    dow: '土',
    sessions: [
      {
        time: '10:00–10:30',
        title: '開会式',
        note: 'ビデオメッセージ：衆議院議員、元宇宙政策担当大臣　井上 信治 様',
      },
      {
        time: '10:30–11:25',
        title: 'なぜ宇宙が話題なのか',
        body: '米国のSpaceXを筆頭に宇宙産業における民間企業の存在が大きくなっています。民間企業には、宇宙産業から生まれたスタートアップはもちろんのこと、これまで宇宙産業に関わってこなかった企業や関わりの増加が顕著に表れてきています。ではなぜ宇宙産業はこれほどまでに盛り上がりを見せているのでしょうか？本セクションでは宇宙産業に関し全く知識が無くてもご参加いただけるようにベンチャーキャピタリストの小松様をお招きし後のセクションにもつながる宇宙産業の基本をご講演いただきます。',
        speakers: [
          { name: '小松 伸多佳 様', affiliation: '『宇宙ベンチャーの時代 経営の視点で読む宇宙開発』著者／イノベーション・エンジン株式会社 ベンチャーキャピタリスト' },
          { name: '後藤 大亮 様', affiliation: 'JAXA 主任研究開発員' },
        ],
      },
      {
        time: '11:35–12:30',
        title: '未来の日本を担うリーダーたち',
        body: '宇宙産業はこれから更なる拡大が確実視されています。そのような中で今後の宇宙産業は現在の学生が担うことは十分考えられます。現在、宇宙分野の学生団体の代表は今の宇宙産業をどのように感じているのでしょうか。歴史ある学生団体と新生の学生団体の代表が大集合し宇宙産業に関わることについてディスカッションしていきます。',
        speakers: [
          { name: '待田 凌 様', affiliation: '宇宙開発フォーラム実行委員会' },
          { name: '千葉 俊彦 様', affiliation: '宇宙広報団体 TELSTAR' },
          { name: '早川 明日香 様', affiliation: 'AstroNOTE' },
          { name: '眞鍋 和士', affiliation: '未来宇宙産業フォーラム' },
        ],
      },
      {
        time: '13:30–14:55',
        title: '宇宙港が変える地方',
        body: '宇宙港構想は全国で発表されつつあります。その構想を発表することによって、現在では観光地として需要が生まれています。宇宙開発が進むにつれ、飛行機の代わりにロケットが地球間輸送に使われるようになると、宇宙港は現在の空港のように交通の要としてさらに需要が生まれます。もちろん宇宙港ができるには数多くの労力を要しますが、宇宙港構想によって現在多くの自治体が抱える過疎化の問題の解決にもつながるのではないかと考えます。宇宙港はどのような効果を地方に生むのでしょうか。宇宙港によって地方はどのように関わるのかについてディスカッションしていきます。',
        speakers: [
          { name: '蔵本 順 様', affiliation: '一般社団法人 SPACETIDE' },
          { name: '吉田 圭吾 様', affiliation: '和歌山県' },
          { name: '守光 正 様', affiliation: '大分県' },
        ],
      },
      {
        time: '15:05–16:00',
        title: '星を駆けるローバー達～月や火星でのローバー開発～',
        body: 'SLIMの月へのピンポイント着陸をはじめ、各国の探査機が月へ向かっています。またNASAのアルテミス計画により、有人の月探査が手の届くところとなってきています。JAXAが月・火星探査に力を入れている今、月や火星のローバーを開発している企業・団体から人を招き、現在のローバー開発についてディスカッションしていきます。',
        speakers: [
          { name: '辻 紅那 様', affiliation: 'KARURAプロジェクト' },
          { name: '古友 大輔 様', affiliation: '株式会社たすく' },
          { name: '金子 颯汰 様', affiliation: 'ARLISS運営／UNISON代表' },
        ],
      },
      { time: '16:00–19:00', title: 'レセプション', muted: true },
    ],
  },
  {
    label: '2日目',
    date: '9月29日',
    dow: '日',
    sessions: [
      {
        time: '10:00–11:25',
        title: '「きぼう」から民間宇宙ステーションへ',
        body: '現在、ISSの「きぼう」実験棟は民間の利用も可能となっています。しかし、民間利用を推進する制度はありますが、特定の業界でのみに利用されており、活用しきれていない現状にあります。2023年のISS運用終了を見据え、ISSに代わる民間企業による商用宇宙ステーションの開発や、その利用に向けた様々な事業が活発になっています。そのような現状を踏まえ、ISS利用、民間ISS開発を進める方々をお招きし、急速に拡大しているISSビジネスとその展望についてディスカッションしていきます。',
        speakers: [
          { name: '村上 一馬 様', affiliation: '三菱商事' },
          { name: '森 徹 様', affiliation: 'digital blast' },
          { name: '岡田 久仁子 様', affiliation: '有人宇宙システム株式会社' },
          { name: '角田 恭平 様', affiliation: '株式会社ビー・シー・シー' },
        ],
      },
      {
        time: '11:35–12:30',
        title: '旅行先は"宇宙"。宇宙への旅拡大中',
        body: '2021年に職業宇宙飛行士が宇宙に行った人数を民間宇宙飛行士が上回りました。これにより2021年は"宇宙旅行元年"と呼ばれています。その後も宇宙旅行は度々行われておりますが、人数の面で2021年を上回った年はまだありません。一方で日本国内で宇宙旅行はもとより有人の打ち上げは行われたことがありません。このような背景の中で宇宙旅行はどのように成長していくのでしょうか。そして今後どのような宇宙旅行が計画されているのでしょうか。宇宙旅行に携わる方にご登壇いただき宇宙旅行をテーマにディスカッションしていきます。',
        speakers: [
          { name: '稲波 紀明 様', affiliation: '宇宙旅行予定者' },
          { name: '中島 修 様', affiliation: '株式会社日本旅行' },
          { name: '加藤 優成', affiliation: '未来宇宙産業フォーラム' },
        ],
      },
      {
        time: '13:30–14:55',
        title: '日本の宇宙戦略～民間企業の展望と挑戦～',
        body: '現在、多くの民間企業が宇宙産業に関心を寄せており、さらには10年間で1兆円規模の支援を行う宇宙戦略基金の計画も進行中です。宇宙産業の最前線で活動している企業の方々はどのような展望を持っているのでしょうか。日本における宇宙産業の今後の展望や、各企業の取り組みに焦点を当てディスカッションしていきます。また、参加者に各企業の取り組みについてより深く理解していただくことも目標とします。',
        speakers: [
          { name: '斉木 敦史 様', affiliation: '株式会社ispace' },
          { name: '吉原 学 様', affiliation: '株式会社マナビクリエーション／慶應義塾大学非常勤講師' },
        ],
      },
      {
        time: '15:05–16:30',
        title: 'スタートアップに引けを取らない大学のロケット開発',
        body: 'SpaceXを中心にアメリカでは大型ロケットの開発が進んでいる。しかし日本の民間企業の宇宙輸送はいまだに衛星を軌道に乗せた実績が無く遅れをとっているように感じられる。そのような中で学生のロケット開発も盛んにおこなわれている。スタートアップではあまり見られない開発は順々に開発していくスタンスで開発している。そのため打ち上げ実績を見ると学生ロケットもスタートアップも混在している。そのため今回は日本で大学ロケットとしては大きなロケットを開発している学生を呼びディスカッションを行う。',
        speakers: [
          { name: '鈴木 悠介 様', affiliation: '神奈川大学 高野研・宇宙ロケット部' },
          { name: '松井 祐磨 様', affiliation: '千葉工業大学 和田研究室' },
          { name: '幡野 慎太郎 様', affiliation: '神奈川大学 高野研究室' },
          { name: '宇推 くりあ 様', affiliation: 'ロケットアイドルVTuber' },
        ],
      },
      {
        time: '16:40–17:35',
        title: '他産業や異分野との共創で拡がる宇宙産業の現状と未来～宇宙旅行・月探査時代の到来と国内外の宇宙産業の動向や事例紹介～',
        body: '宇宙産業は現在急速に発展しており、今まで宇宙に関わりのなかった企業も参入に繰り出している。しかしながら、宇宙や宇宙産業が馴染みのないものであるため、そもそも宇宙産業と一纏めに言っても、イメージがつきにくいといった声が挙げられている。そこで、このセッションでは、現在の宇宙産業の動向に加え、事例を紹介していただく。',
        speakers: [{ name: '菊池 優太 様', affiliation: 'JAXA 新事業促進部' }],
      },
      { time: '17:35–18:00', title: '閉会式', muted: true },
    ],
  },
]

export default async function SymposiumPage() {
  const events = await fetchEvents()
  const item = events.find((e) => e.slug === 'SBS24')
  if (!item) notFound()

  return (
    <>
      <PageHero
        eyebrow={`EVENT / ${item.reportType ?? '開催実績'}`}
        title={item.title}
        lead={item.subtitle}
        breadcrumbs={[
          { label: 'Activities', href: '/activities' },
          { label: 'イベント事業', href: '/activities/event' },
          { label: item.title },
        ]}
        image={item.image}
        imageAlt={item.imageAlt}
      />

      {/* 開催概要 + main message */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading labelEn="MAIN MESSAGE" title="開催概要" />
            <div className="mt-6 space-y-5 leading-[1.9] text-muted-foreground">
              {mainMessage.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-balance text-xl font-bold text-navy md:text-2xl">
              宇宙をあなたの次のビジネスに
            </p>
          </Reveal>

          <Reveal delay={80}>
            <dl className="divide-y divide-border rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 pb-4">
                <Calendar className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">日時</dt>
                  <dd className="mt-1 font-medium text-foreground">{item.eventDateDisplay}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">場所</dt>
                  <dd className="mt-1 font-medium text-foreground">{item.venueDisplay}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4">
                <Ticket className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">内容</dt>
                  <dd className="mt-1 font-medium text-foreground">{item.content}</dd>
                </div>
              </div>
            </dl>

          </Reveal>
        </div>

        {item.reportPdf && (
          <div className="container-fsif mt-10">
            <Reveal>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-bold text-foreground">{item.reportPdf.label}</p>
                  <p className="text-sm text-muted-foreground">当日の様子をまとめた報告書です。</p>
                </div>
                <a
                  href={withBasePath(item.reportPdf.href)}
                  download={item.reportPdf.downloadName}
                  className="inline-flex items-center gap-2 rounded-md bg-fsif-blue px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#0057c4]"
                >
                  <Download className="size-4" />
                  ダウンロード
                </a>
              </div>
              <PdfViewer
                src={item.reportPdf.href}
                label={item.reportPdf.label}
                downloadName={item.reportPdf.downloadName}
              />
            </Reveal>
          </div>
        )}
      </section>

      {/* concept */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="CONCEPT" title="コンセプト" />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {concepts.map((c, i) => (
              <div key={c} className="flex items-baseline gap-4 bg-surface p-6">
                <span className="font-mono text-sm text-fsif-blue">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-lg font-bold text-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* recommended for */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="RECOMMENDED FOR" title="こんな方へ" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {recommendedFor.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-4 leading-[1.9] text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* place / fee */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading labelEn="PLACE" title="会場" />
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-fsif-blue" aria-hidden />
              <div>
                <p className="font-medium text-foreground">ふれあい貸し会議室五反田 No.79 ＋ オンライン</p>
                <p className="mt-1 text-sm text-muted-foreground">東京都品川区東五反田2-2-2 松楽ビル8階</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading labelEn="FEE" title="参加費" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {feeRows.map((r, i) => (
                    <tr key={r.label} className={i % 2 === 0 ? 'bg-surface' : 'bg-card'}>
                      <td className="px-5 py-3 text-muted-foreground">{r.label}</td>
                      <td className="px-5 py-3 text-right font-mono font-bold text-foreground">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              ※料金は1日あたり。レセプションは当日会場にて現金払い。
            </p>
          </div>
        </div>
      </section>

      {/* full program */}
      <section className="bg-navy py-16 text-navy-foreground md:py-20">
        <div className="container-fsif">
          <SectionHeading onDark labelEn="PROGRAM" title="プログラム" align="center" className="mx-auto" />

          <div className="mt-12 space-y-16">
            {program.map((day) => (
              <div key={day.label}>
                <div className="flex items-baseline gap-4 border-b border-white/15 pb-4">
                  <Calendar className="size-5 text-accent-blue" aria-hidden />
                  <h3 className="text-2xl font-bold text-white">
                    {day.label}　{day.date}（{day.dow}）
                  </h3>
                </div>

                <ol className="mt-2 divide-y divide-white/10">
                  {day.sessions.map((s) => (
                    <li
                      key={s.time + s.title}
                      className={
                        s.muted
                          ? 'flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 text-navy-foreground/60'
                          : 'grid gap-4 py-8 sm:grid-cols-[136px_1fr]'
                      }
                    >
                      {s.muted ? (
                        <>
                          <span className="inline-flex items-center gap-2 font-mono text-sm">
                            <Clock className="size-4" aria-hidden />
                            {s.time}
                          </span>
                          <span>{s.title}</span>
                        </>
                      ) : (
                        <>
                          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent-blue sm:flex-col sm:items-start sm:gap-1">
                            <Clock className="size-4 sm:hidden" aria-hidden />
                            {s.time}
                          </div>
                          <div>
                            <h4 className="text-balance text-lg font-bold text-white">{s.title}</h4>
                            {s.note && (
                              <p className="mt-3 text-sm leading-[1.9] text-navy-foreground/80">{s.note}</p>
                            )}
                            {s.body && (
                              <p className="mt-3 leading-[1.9] text-navy-foreground/75">{s.body}</p>
                            )}
                            {s.speakers && s.speakers.length > 0 && (
                              <div className="mt-4">
                                <p className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-navy-foreground/50">
                                  <Mic2 className="size-3.5" aria-hidden />
                                  登壇者
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                  {s.speakers.map((sp) => (
                                    <li key={sp.name} className="text-sm">
                                      <span className="font-semibold text-white">{sp.name}</span>
                                      <span className="text-navy-foreground/60">　{sp.affiliation}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-navy-foreground md:py-20">
        <div className="container-fsif text-center">
          <Reveal>
            <SectionHeading
              align="center"
              onDark
              eyebrow="NEXT"
              title="次の開催にご参加ください"
              description="出展・協賛・登壇のご相談、そして最新の開催情報はこちらから。"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CtaLink href="/contact">開催について相談する</CtaLink>
              <CtaLink href="/activities/event" variant="secondary" onDark>
                イベント事業を見る
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
