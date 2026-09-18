import { homeStats } from '@/lib/data/home'
import { SectionHeading } from '@/components/ui/section-heading'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

export function StatsNumbers() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-fsif">
        <SectionHeading labelEn="FSIF IN NUMBERS" title="数字で見るFSIF" align="center" className="mx-auto max-w-2xl" />

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
          {homeStats.map((stat, i) => (
            <Reveal
              key={stat.labelEn}
              delay={i * 80}
              className="border-t-2 border-fsif-blue pt-5"
            >
              <dd className="font-mono text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-none tracking-tight text-navy">
                <CountUp value={stat.value} suffix={stat.suffix} noSeparator={stat.noSeparator} />
              </dd>
              <dt className="mt-3">
                <span className="section-label block text-muted-foreground">{stat.labelEn}</span>
                <span className="mt-1 block text-sm text-foreground">{stat.label}</span>
              </dt>
            </Reveal>
          ))}
        </dl>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          ※ 数値はプロトタイプ用のモックデータです。実データへの差し替えを前提に構造化しています。
        </p>
      </div>
    </section>
  )
}
