import { philosophies } from '@/lib/data/home'
import { MvvpScroller } from '@/components/shared/mvvp-scroller'

/**
 * HOME MVVP section (R05). Uses the shared MvvpScroller in the dark theme with
 * the concise home-level descriptions.
 */
export function PhilosophySection() {
  return (
    <MvvpScroller
      theme="dark"
      eyebrow="PHILOSOPHY / 私たちの理念"
      items={philosophies.map((p) => ({
        key: p.key,
        labelEn: p.labelEn,
        labelJa: p.labelJa,
        statement: p.statement,
        description: p.description,
      }))}
    />
  )
}
