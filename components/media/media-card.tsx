import Image from 'next/image'
import Link from 'next/link'
import type { MediaItem } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function MediaCard({ item, className }: { item: MediaItem; className?: string }) {
  return (
    <Link href={`/media/${item.slug}`} className={cn('group flex flex-col', className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
        <Image
          src={item.thumbnail || '/placeholder.svg'}
          alt={item.thumbnailAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-sm bg-surface/95 px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide text-fsif-blue">
          {item.category}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <time className="font-mono text-xs text-muted-foreground" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
        {item.readingTime && (
          <span className="text-xs text-muted-foreground">約{item.readingTime}分</span>
        )}
      </div>
      <h3 className="mt-2 text-pretty font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
    </Link>
  )
}
