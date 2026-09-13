'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, Menu, ChevronDown, ArrowUpRight } from 'lucide-react'
import { mainNav } from '@/lib/data/site'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import { cn } from '@/lib/utils'

const DARK_HERO_ROUTES = ['/', '/activities/event/space-business-symposium-2024']

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const overDarkHero = DARK_HERO_ROUTES.includes(pathname)
  const transparent = overDarkHero && !scrolled && !activeMenu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMenu(null)
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const textLight = transparent

  const activeItem = mainNav.find((n) => n.label === activeMenu && n.mega)

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-colors duration-300',
          transparent
            ? 'bg-transparent'
            : 'border-b border-border bg-surface/90 backdrop-blur-md',
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-20">
          <Logo variant={textLight ? 'light' : 'dark'} />

          {/* Desktop nav */}
          <nav aria-label="メインナビゲーション" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href)
                // Items with a mega panel: the label is a real link to the section
                // index, and a separate arrow button toggles the panel.
                if (item.mega) {
                  const open = activeMenu === item.label
                  return (
                    <li
                      key={item.label}
                      className="flex items-center"
                      onMouseEnter={() => setActiveMenu(item.label)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center rounded-md py-2 pl-3 pr-1.5 font-mono text-[0.8rem] font-medium tracking-wide transition-colors',
                          textLight
                            ? 'text-white/90 hover:text-white'
                            : 'text-foreground hover:text-fsif-blue',
                          active && (textLight ? 'text-white' : 'text-fsif-blue'),
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-haspopup="true"
                        aria-label={`${item.label}のメニューを${open ? '閉じる' : '開く'}`}
                        onClick={() => setActiveMenu(open ? null : item.label)}
                        className={cn(
                          'flex items-center rounded-md py-2 pr-2 transition-colors',
                          textLight ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-fsif-blue',
                        )}
                      >
                        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
                      </button>
                    </li>
                  )
                }
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActiveMenu(null)}
                      className={cn(
                        'relative flex items-center rounded-md px-3 py-2 font-mono text-[0.8rem] font-medium tracking-wide transition-colors',
                        textLight
                          ? 'text-white/90 hover:text-white'
                          : 'text-foreground hover:text-fsif-blue',
                        active && (textLight ? 'text-white' : 'text-fsif-blue'),
                      )}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-current" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/search"
              aria-label="サイト内を検索"
              className={cn(
                'flex size-10 items-center justify-center rounded-md transition-colors',
                textLight ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-pale-blue',
              )}
            >
              <Search className="size-5" />
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-md bg-fsif-blue px-4 py-2.5 font-mono text-[0.8rem] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-[#0057c4] sm:inline-flex"
            >
              CONTACT
            </Link>
            <button
              type="button"
              aria-label="メニューを開く"
              onClick={() => setMobileOpen(true)}
              className={cn(
                'flex size-10 items-center justify-center rounded-md transition-colors lg:hidden',
                textLight ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-pale-blue',
              )}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>

        {/* Mega menu panel */}
        {activeItem?.mega && (
          <div
            className="absolute inset-x-0 top-full hidden border-b border-border bg-surface shadow-[0_24px_60px_-30px_rgba(6,26,51,0.4)] lg:block"
            onMouseEnter={() => setActiveMenu(activeItem.label)}
          >
            <div className="container-wide grid grid-cols-12 gap-8 py-10">
              <div className="col-span-3">
                <span className="section-label text-fsif-blue">{activeItem.label}</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {activeItem.mega.intro}
                </p>
                <Link
                  href={activeItem.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fsif-blue hover:text-[#0057c4]"
                >
                  {activeItem.label}トップへ
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <ul
                className={cn(
                  'grid grid-cols-2 gap-x-6 gap-y-1 self-start',
                  activeItem.mega.feature ? 'col-span-6' : 'col-span-9',
                )}
              >
                {activeItem.mega.columns.map((col) => (
                  <li key={col.href}>
                    <Link
                      href={col.href}
                      className="group block rounded-md px-3 py-3 transition-colors hover:bg-pale-blue focus-visible:bg-pale-blue"
                    >
                      <span className="flex items-center gap-1.5 font-medium text-foreground group-hover:text-fsif-blue group-focus-visible:text-fsif-blue">
                        {col.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {col.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {activeItem.mega.feature && (
                <div className="col-span-3">
                  <Link href={activeItem.mega.feature.href} className="group block rounded-lg">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={activeItem.mega.feature.image || '/placeholder.svg'}
                        alt=""
                        fill
                        sizes="320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    </div>
                    <span className="mt-3 flex items-center gap-1.5 font-medium text-foreground group-hover:text-fsif-blue group-focus-visible:text-fsif-blue">
                      {activeItem.mega.feature.title}
                      <ArrowUpRight className="size-4" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {activeItem.mega.feature.description}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
