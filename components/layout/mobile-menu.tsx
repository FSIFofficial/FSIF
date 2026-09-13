'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'
import { mainNav, socialLinks } from '@/lib/data/site'
import { CtaLink } from '@/components/ui/cta-link'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Reset expansion whenever the menu is closed so it never keeps stale open state.
  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-navy lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="サイトメニュー"
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-mono text-lg font-bold tracking-[0.12em] text-white">FSIF</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="メニューを閉じる"
          className="flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
        >
          <X className="size-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-5 pb-8">
        <ul>
          {mainNav.map((item) => {
            if (!item.mega) {
              return (
                <li key={item.label} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-baseline gap-2 py-5 text-white transition-colors hover:text-accent-blue"
                  >
                    <span className="font-mono text-sm tracking-wide">{item.label}</span>
                    <span className="text-sm text-navy-foreground/60">{item.labelJa}</span>
                  </Link>
                </li>
              )
            }

            const isOpen = expanded === item.label
            const panelId = `m-panel-${item.label}`
            return (
              <li key={item.label} className="border-b border-white/15">
                <div className="flex items-stretch">
                  {/* Label is a real link to the section index */}
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex flex-1 items-baseline gap-2 py-5 text-white transition-colors hover:text-accent-blue"
                  >
                    <span className="font-mono text-sm tracking-wide">{item.label}</span>
                    <span className="text-sm text-navy-foreground/60">{item.labelJa}</span>
                  </Link>
                  {/* Separate toggle button for the sub-list */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${item.label}のサブメニューを${isOpen ? '閉じる' : '開く'}`}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="flex w-12 items-center justify-center text-white/80 transition-colors hover:text-white"
                  >
                    <ChevronDown className={cn('size-5 transition-transform', isOpen && 'rotate-180')} />
                  </button>
                </div>
                {isOpen && (
                  <ul id={panelId} className="flex flex-col gap-1 pb-4 pl-1">
                    {item.mega.columns.map((col) => (
                      <li key={col.href}>
                        <Link
                          href={col.href}
                          onClick={onClose}
                          className="block rounded-md px-2 py-2.5 text-navy-foreground/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {col.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
          {/* CONTACT is the header button on desktop; expose it as a direct link here too */}
          <li className="border-b border-white/15">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-baseline gap-2 py-5 text-white transition-colors hover:text-accent-blue"
            >
              <span className="font-mono text-sm tracking-wide">CONTACT</span>
              <span className="text-sm text-navy-foreground/60">お問い合わせ</span>
            </Link>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <CtaLink href="/join" variant="primary" className="justify-center">
            FSIFに参加する
          </CtaLink>
          <CtaLink href="/contact" variant="secondary" onDark className="justify-center">
            お問い合わせ
          </CtaLink>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy-foreground/70 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
