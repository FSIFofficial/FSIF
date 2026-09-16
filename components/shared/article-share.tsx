'use client'

import { useState } from 'react'
import { Link2, Check, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArticleShare({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false)
  const [igCopied, setIgCopied] = useState(false)

  const url = typeof window !== 'undefined' ? `${window.location.origin}${path}` : path
  const enc = encodeURIComponent
  const shareTitle = enc(title)

  const x = {
    label: 'X',
    href: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${enc(url)}`,
    Icon: XIcon,
    hover: 'hover:border-foreground hover:text-foreground',
  }
  const facebook = {
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    Icon: FacebookIcon,
    hover: 'hover:border-[#1877F2] hover:text-[#1877F2]',
  }
  const line = {
    label: 'LINE',
    href: `https://social-plugins.line.me/lineit/share?url=${enc(url)}`,
    Icon: MessageCircle,
    hover: 'hover:border-[#06C755] hover:text-[#06C755]',
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  // Instagram has no web share intent for an arbitrary URL, so copy the
  // link instead and prompt the user to paste it (story, bio, DM, etc.).
  const copyForInstagram = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setIgCopied(true)
      setTimeout(() => setIgCopied(false), 2500)
    } catch {
      /* clipboard unavailable */
    }
  }

  const shareLink = (l: { label: string; href: string; Icon: React.ComponentType<{ className?: string }>; hover: string }) => (
    <a
      key={l.label}
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${l.label}でシェア（外部サイトへ移動します）`}
      className={cn(
        'flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors',
        l.hover,
      )}
    >
      <l.Icon className="size-4" />
    </a>
  )

  return (
    <div className="flex items-center gap-2">
      <span className="section-label mr-1 text-muted-foreground">SHARE</span>
      {shareLink(x)}
      <div className="relative">
        <button
          type="button"
          onClick={copyForInstagram}
          aria-label="Instagramでシェア（リンクをコピーします）"
          className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[#E1306C] hover:text-[#E1306C]"
        >
          <InstagramIcon className="size-4" />
        </button>
        {igCopied && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2.5 py-1.5 text-xs text-navy-foreground shadow-lg">
            リンクをコピーしました
          </span>
        )}
      </div>
      {shareLink(facebook)}
      {shareLink(line)}
      <button
        type="button"
        onClick={copy}
        aria-label="URLをコピー"
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-fsif-blue hover:text-fsif-blue"
      >
        {copied ? <Check className="size-4 text-fsif-blue" /> : <Link2 className="size-4" />}
      </button>
    </div>
  )
}
