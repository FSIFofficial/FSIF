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

export default async function HomePage() {
  const news = await fetchNews()
  const featured = getFeaturedNews(news)
  const rest = getLatestNews(news, 6)
  const important = getImportantNews(news)

  return (
    <>
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
