import { HeroSlider } from '@/components/home/hero-slider'
import { ImportantNews } from '@/components/home/important-news'
import { LatestNews } from '@/components/home/latest-news'
import { AboutFsif } from '@/components/home/about-fsif'
import { PhilosophySection } from '@/components/home/philosophy-section'
import { OurActivities } from '@/components/home/our-activities'
import { HomeProduct } from '@/components/home/home-product'
import { StatsNumbers } from '@/components/home/stats-numbers'
import { FeaturedEvent } from '@/components/home/featured-event'
import { JoinFsif } from '@/components/home/join-fsif'
import { PartnershipCta } from '@/components/home/partnership-cta'
import { fetchNews, getFeaturedNews, getLatestNews, getImportantNews } from '@/lib/data/news'
import { socialLinks } from '@/lib/data/site'
import { SITE_URL, absoluteUrl } from '@/lib/site-url'

// 検索エンジン向けの、団体とサイトの情報(構造化データ)
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: '未来宇宙産業フォーラム',
      alternateName: ['FSIF', 'Future Space Industry Forum'],
      url: `${SITE_URL}/`,
      logo: absoluteUrl('/FSIF_logo.png'),
      sameAs: socialLinks.map((l) => l.href),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'FSIF',
      alternateName: '未来宇宙産業フォーラム',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'ja',
    },
  ],
}

export default async function HomePage() {
  const news = await fetchNews()
  const featured = getFeaturedNews(news)
  const rest = getLatestNews(news, 6)
  const important = getImportantNews(news)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <HeroSlider />
      <ImportantNews items={important} />
      <LatestNews featured={featured} rest={rest} />
      <AboutFsif />
      <PhilosophySection />
      <OurActivities />
      <HomeProduct />
      <StatsNumbers />
      <FeaturedEvent />
      <JoinFsif />
      <PartnershipCta />
    </>
  )
}
