import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { socialLinks } from '@/lib/data/site'
import { Mail, MessageSquare, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'お問い合わせ | FSIF',
  description:
    'FSIFへのお問い合わせ窓口。参加・エントリー、企業連携、取材、Orbit導入、登壇・協賛など、お気軽にご相談ください。',
}

const channels = [
  {
    icon: Users,
    title: '参加を検討している方',
    description: '専攻や立場を問わず歓迎します。まずはお気軽にエントリーください。',
  },
  {
    icon: MessageSquare,
    title: '企業・団体の方',
    description: '連携・協賛・共創プロジェクトのご相談を承っています。',
  },
  {
    icon: Mail,
    title: '取材・メディアの方',
    description: '活動や登壇者に関する取材のご依頼はこちらから。',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        lead="ご参加・ご連携・取材など、どんなご相談でもお気軽にお寄せください。"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: guidance */}
          <div>
            <Reveal>
              <h2 className="text-xl font-bold text-foreground">お問い合わせの前に</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                内容に応じて担当が対応します。数営業日以内にご返信いたします。
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <li className="flex gap-4 rounded-2xl border border-border bg-secondary p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-fsif-blue/10 text-fsif-blue">
                      <c.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <div className="mt-8 rounded-2xl border border-border p-5">
                <h3 className="text-sm font-semibold text-foreground">SNSでもつながれます</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue"
                      >
                        {s.label}
                        <span className="text-muted-foreground/60">{s.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
