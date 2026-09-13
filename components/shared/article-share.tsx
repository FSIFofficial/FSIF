'use client'

import { useState } from 'react'
import { Link2, Check } from 'lucide-react'

export function ArticleShare({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? `${window.location.origin}${path}` : path
  const enc = encodeURIComponent
  const shareTitle = enc(title)

  const links = [
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${enc(url)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: 'LINE', href: `https://social-plugins.line.me/lineit/share?url=${enc(url)}` },
  ]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="section-label mr-1 text-muted-foreground">SHARE</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${l.label}でシェア（外部サイトへ移動します）`}
          className="flex h-9 items-center justify-center rounded-md border border-border px-3 font-mono text-xs transition-colors hover:border-fsif-blue hover:text-fsif-blue"
        >
          {l.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="URLをコピー"
        className="flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:border-fsif-blue hover:text-fsif-blue"
      >
        {copied ? <Check className="size-4 text-fsif-blue" /> : <Link2 className="size-4" />}
      </button>
    </div>
  )
}
