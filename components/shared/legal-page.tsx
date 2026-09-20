import type { LegalDoc } from '@/lib/data/legal'
import { formatDateJa } from '@/lib/utils'

/** Renders a policy/terms doc as a simple article. Shared by privacy/terms/social pages. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-fsif">
        <div className="mx-auto max-w-3xl">
          <p className="rounded-lg border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
            この内容は現在ドラフトです。今後の運用に合わせて内容を見直し、正式版に更新する予定です。
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            最終更新日: {formatDateJa(doc.lastUpdated)}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{doc.intro}</p>
          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-bold text-foreground">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
