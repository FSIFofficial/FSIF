import Image from 'next/image'
import Link from 'next/link'
import { galleryItems } from '@/lib/data/home'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'

export function ActivityGallery() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading labelEn="ACTIVITY GALLERY" title="活動の記録" />

        <div className="mt-12 grid auto-rows-[46vw] grid-cols-2 gap-3 sm:auto-rows-[220px] md:auto-rows-[200px] md:grid-cols-4">
          {galleryItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'group relative overflow-hidden rounded-lg bg-navy',
                item.span === 'wide' && 'col-span-2',
                item.span === 'tall' && 'row-span-2',
              )}
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <div className="absolute inset-x-3 bottom-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <div className="flex items-center gap-2">
                  <span className="rounded-sm bg-fsif-blue px-1.5 py-0.5 font-mono text-[0.6rem] font-medium tracking-wide text-primary-foreground">
                    {item.category}
                  </span>
                  <time className="font-mono text-[0.65rem] text-white/80">{item.date}</time>
                </div>
                <p className="mt-1.5 text-pretty text-sm font-medium leading-snug text-white">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
