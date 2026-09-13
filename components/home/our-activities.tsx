import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { activities } from '@/lib/data/home'
import { SectionHeading } from '@/components/ui/section-heading'
import { CtaLink } from '@/components/ui/cta-link'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

export function OurActivities() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-fsif">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading labelEn="OUR ACTIVITIES" title="4つの事業で、宇宙とつながる。" />
          <CtaLink href="/activities" variant="text" className="pb-1">
            事業一覧を見る
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {activities.map((a, i) => {
            return (
              <Reveal
                key={a.id}
                delay={i * 60}
                className={cn('group')}
              >
                <Link href={a.href} className="block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-navy">
                    <Image
                      src={a.image || '/placeholder.svg'}
                      alt={a.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                    <span className="absolute left-4 top-4 font-mono text-sm font-bold text-white/80">
                      {a.number}
                    </span>
                    <div className="absolute inset-x-4 bottom-4">
                      <span className="section-label text-accent-blue">{a.labelEn}</span>
                      <h3 className="mt-1 text-lg font-bold text-white">{a.labelJa}</h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/80">
                        <span className="line-clamp-2">{a.description}</span>
                      </p>
                    </div>
                    <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-fsif-blue">
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
