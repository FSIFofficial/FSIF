import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { LegalPage } from '@/components/shared/legal-page'
import { terms } from '@/lib/data/legal'

const title = '利用規約'
const description = 'FSIF（未来宇宙産業フォーラム）が提供する本サイトおよび関連サービスの利用規約。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function TermsPage() {
  return (
    <>
      <PageHero labelEn="TERMS" title="利用規約" breadcrumbs={[{ label: 'TERMS' }]} />
      <LegalPage doc={terms} />
    </>
  )
}
