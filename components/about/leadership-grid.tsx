import Image from 'next/image'
import Link from 'next/link'
import { leadership } from '@/lib/data/org'

export function LeadershipGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {leadership.map((m) => (
        <li key={m.id}>
          <Link href={`/about/leadership/${m.id}`} className="group block w-full text-left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-pale-blue">
              <Image
                src={m.image || '/placeholder.svg'}
                alt={`${m.name}のプロフィール写真`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <span className="section-label mt-4 block text-fsif-blue">{m.area}</span>
            <span className="mt-1 block text-lg font-bold text-foreground transition-colors group-hover:text-fsif-blue">
              {m.name}
            </span>
            <span className="mt-0.5 block text-sm text-muted-foreground">{m.role}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
