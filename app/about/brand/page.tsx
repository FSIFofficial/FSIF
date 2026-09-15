import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { Logo } from '@/components/layout/logo'

export const metadata: Metadata = {
  title: 'ブランド',
  description: 'FSIFのブランドコンセプト、名称の意味、ロゴ、ブランドカラー、書体、使用ガイドラインと素材ダウンロード。',
}

const colors = [
  { name: 'FSIF Blue', value: '#0068E8', varName: '--fsif-blue' },
  { name: 'Accent Blue', value: '#28A8FF', varName: '--accent-blue' },
  { name: 'Navy', value: '#061A33', varName: '--navy' },
  { name: 'Pale Blue', value: '#EAF4FF', varName: '--pale-blue' },
  { name: 'Foreground', value: '#071526', varName: '--foreground' },
]

const downloads = [{ label: 'ロゴ（PNG）', note: 'RGB / 透過', href: '/FSIF_logo.png' }]

const comingSoonDownloads = [{ label: 'ブランドガイドライン（PDF）', note: '準備中' }]

export default function BrandPage() {
  return (
    <>
      <PageHero
        labelEn="BRAND"
        title="ブランドガイドライン"
        description="FSIFのブランドを正しく、一貫して届けるための考え方と素材をまとめています。"
        breadcrumbs={[{ label: 'ABOUT', href: '/about' }, { label: 'BRAND' }]}
      />

      {/* Concept */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading labelEn="BRAND CONCEPT" title="宇宙と社会をつなぐ、端正で開かれた表現。" />
          <div className="space-y-5 leading-[1.9] text-muted-foreground">
            <p>
              FSIFのブランドは「SPACE × CORPORATE × INNOVATION × STUDENTS」を掛け合わせた表現です。
              信頼感を土台にしながら、宇宙の未来感と、挑戦する熱量を過不足なく伝えます。
            </p>
            <p>
              白を主役にした明るく端正なデザインを基本とし、濃紺とブルーのアクセントで宇宙産業組織らしさを表現します。
            </p>
          </div>
        </div>
      </section>

      {/* Name meaning + logo */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading labelEn="THE NAME" title="名称の意味" />
            <p className="mt-6 leading-[1.9] text-muted-foreground">
              Future Space Industry Forum（未来宇宙産業フォーラム）。宇宙産業の「未来」を、立場を越えた人々が集う
              「フォーラム（対話の場）」からつくる、という意志を名前に込めています。略称のFSIFは、その頭文字です。
            </p>
          </div>
          <div>
            <SectionHeading labelEn="LOGO" title="ロゴ" />
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-xl border border-border bg-surface p-10">
                <Logo />
              </div>
              <div className="flex items-center justify-center rounded-xl bg-navy p-10">
                <Logo variant="light" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              円は宇宙（コア）を、傾いた楕円は軌道を表します。軌道が交わることで、人と分野が出会う場を象徴します。
            </p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="BRAND COLORS" title="ブランドカラー" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((c) => (
              <li key={c.name} className="overflow-hidden rounded-xl border border-border">
                <div className="h-24" style={{ backgroundColor: c.value }} />
                <div className="p-4">
                  <p className="font-bold text-foreground">{c.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Typography */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="TYPOGRAPHY" title="書体" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-8">
              <p className="section-label text-fsif-blue">JAPANESE</p>
              <p className="mt-3 text-3xl font-bold text-foreground">未来宇宙産業フォーラム</p>
              <p className="mt-2 text-sm text-muted-foreground">Noto Sans JP — 見出しから本文まで</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-8">
              <p className="section-label text-fsif-blue">ALPHANUMERIC</p>
              <p className="mt-3 font-mono text-3xl font-bold text-foreground">FSIF 2023</p>
              <p className="mt-2 text-sm text-muted-foreground">Geist / Geist Mono — 英数字・ラベル</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="DO NOT" title="禁止例" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'ロゴの比率を変えて拡大・縮小する',
              'ブランドカラー以外で着色する',
              'ロゴを回転・変形させる',
              '視認性の低い背景に配置する',
              '影や光彩などの装飾を加える',
              '文字と円の間隔を変更する',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-xs font-bold text-destructive">
                  ×
                </span>
                <span className="text-sm text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-navy py-16 text-navy-foreground md:py-20">
        <div className="container-fsif">
          <SectionHeading labelEn="DOWNLOADS" title="素材ダウンロード" onDark />
          <ul className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            {downloads.map((d) => (
              <li key={d.label}>
                <a
                  href={d.href}
                  download
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-accent-blue"
                >
                  <span>
                    <span className="block font-medium text-white">{d.label}</span>
                    <span className="mt-0.5 block text-xs text-navy-foreground/60">{d.note}</span>
                  </span>
                  <Download className="size-5 text-accent-blue" />
                </a>
              </li>
            ))}
            {comingSoonDownloads.map((d) => (
              <li key={d.label}>
                <div className="flex cursor-not-allowed items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 opacity-50">
                  <span>
                    <span className="block font-medium text-white">{d.label}</span>
                    <span className="mt-0.5 block text-xs text-navy-foreground/60">{d.note}</span>
                  </span>
                  <Download className="size-5 text-navy-foreground/40" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
