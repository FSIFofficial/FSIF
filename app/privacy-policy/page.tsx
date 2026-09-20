import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { LegalPage } from '@/components/shared/legal-page'
import { privacyPolicy } from '@/lib/data/legal'

const title = 'プライバシーポリシー'
const description = 'FSIF（未来宇宙産業フォーラム）における個人情報の取り扱いについて。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        labelEn="PRIVACY POLICY"
        title="プライバシーポリシー"
        breadcrumbs={[{ label: 'PRIVACY POLICY' }]}
      />
      <LegalPage doc={privacyPolicy} />
    </>
  )
}
