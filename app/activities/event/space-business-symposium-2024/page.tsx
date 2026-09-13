import type { Metadata } from 'next'
import { EventReport } from '@/components/activities/event-report'
import { events } from '@/lib/data/events'

const item = events.find((e) => e.slug === 'SBS24')!

export const metadata: Metadata = {
  title: '宇宙ビジネスシンポジウム2024',
  description:
    'FSIFが主催した宇宙ビジネスシンポジウム2024の開催報告。企業・研究機関・大学・学生が立場を越えて宇宙産業の未来を語り合いました。',
}

export default function SymposiumPage() {
  return <EventReport item={item} />
}
