import type { Metadata } from 'next'
import { pageOpenGraph } from '@/lib/site-url'
import { PageHero } from '@/components/shared/page-hero'
import { LegalPage } from '@/components/shared/legal-page'
import { socialMediaPolicy } from '@/lib/data/legal'

const title = 'ソーシャルメディアポリシー'
const description = 'FSIF（未来宇宙産業フォーラム）公式ソーシャルメディアアカウントの運用方針について。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: pageOpenGraph(title, description),
}

export default function SocialMediaPolicyPage() {
  return (
    <>
      <PageHero
        labelEn="SOCIAL MEDIA POLICY"
        title="ソーシャルメディアポリシー"
        breadcrumbs={[{ label: 'SOCIAL MEDIA POLICY' }]}
      />
      <LegalPage doc={socialMediaPolicy} />
    </>
  )
}
