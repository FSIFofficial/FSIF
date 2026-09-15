'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { brand, footerSitemap, legalLinks, socialLinks } from '@/lib/data/site'
import { Accordion } from '@/components/ui/accordion'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <div>
      <p className="section-label text-accent-blue">NEWSLETTER</p>
      <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
        メールニュースに登録して、FSIFの最新の活動やイベント情報を受け取る。
      </p>
      {done ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-accent-blue">
          <Check className="size-4" /> 登録ありがとうございます（デモ）。
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            if (email) setDone(true)
          }}
        >
          <label htmlFor="footer-email" className="sr-only">
            メールアドレス
          </label>
          <input
            id="footer-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@example.com"
            className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-navy-foreground/40 focus:border-accent-blue focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-fsif-blue px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#0057c4]"
          >
            登録
          </button>
        </form>
      )}
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-wide py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.5fr]">
          <div className="max-w-sm">
            <span className="font-mono text-2xl font-bold tracking-[0.12em] text-white">FSIF</span>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/75">
              {brand.name}（{brand.nameEn}）。{brand.description}
            </p>
            {/* Newsletter signup — no backend wired up yet, may come later.
            <div className="mt-8">
              <Newsletter />
            </div>
            */}
          </div>

          {/* Sitemap - desktop */}
          <div className="hidden grid-cols-4 gap-8 md:grid">
            {footerSitemap.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <p className="section-label text-navy-foreground/50">{group.heading}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label + link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-navy-foreground/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Sitemap - mobile accordion */}
          <div className="md:hidden">
            <Accordion
              onDark
              items={footerSitemap.map((group) => ({
                title: <span className="font-mono text-sm tracking-wide">{group.heading}</span>,
                content: (
                  <ul className="flex flex-col gap-3">
                    {group.links.map((link) => (
                      <li key={link.label + link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-navy-foreground/80 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ),
              }))}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-navy-foreground/80 transition-colors hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs text-navy-foreground/60 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-navy-foreground/50">
          © {new Date().getFullYear()} Future Space Industry Forum. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
