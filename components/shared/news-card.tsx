import Image from 'next/image'
import Link from 'next/link'
import type { NewsItem } from '@/lib/types'
import { newsCategoryColor } from '@/lib/data/news'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function CategoryTag({ category, className }: { category: NewsItem['category']; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wide',
        newsCategoryColor[category],
        className,
      )}
    >
      {category}
    </span>
  )
}

export function NewsCard({ item, className }: { item: NewsItem; className?: string }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className={cn('group flex flex-col', className)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
        <Image
          src={item.thumbnail || '/placeholder.svg'}
          alt={item.thumbnailAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <time className="font-mono text-xs text-muted-foreground" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
        <CategoryTag category={item.category} />
      </div>
      <h3 className="mt-2 text-pretty font-bold leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
    </Link>
  )
}

export function NewsRow({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex items-center gap-4 py-4"
    >
      <div className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-md bg-white sm:w-28">
        <Image
          src={item.thumbnail || '/placeholder.svg'}
          alt={item.thumbnailAlt}
          fill
          sizes="120px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <time className="font-mono text-xs text-muted-foreground" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <CategoryTag category={item.category} />
        </div>
        <h3 className="mt-1.5 line-clamp-2 text-pretty font-medium leading-snug text-foreground transition-colors group-hover:text-fsif-blue">
          {item.title}
        </h3>
      </div>
    </Link>
  )
}
