import { HeroSlider } from '@/components/home/hero-slider'
import { ImportantNews } from '@/components/home/important-news'
import { LatestNews } from '@/components/home/latest-news'
import { AboutFsif } from '@/components/home/about-fsif'
import { PhilosophySection } from '@/components/home/philosophy-section'
import { OurActivities } from '@/components/home/our-activities'
import { HomeProduct } from '@/components/home/home-product'
import { StatsNumbers } from '@/components/home/stats-numbers'
import { FeaturedEvent } from '@/components/home/featured-event'
import { StoriesMedia } from '@/components/home/stories-media'
import { ActivityGallery } from '@/components/home/activity-gallery'
import { JoinFsif } from '@/components/home/join-fsif'
import { PartnershipCta } from '@/components/home/partnership-cta'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ImportantNews />
      <LatestNews />
      <AboutFsif />
      <PhilosophySection />
      <OurActivities />
      <HomeProduct />
      <StatsNumbers />
      <FeaturedEvent />
      <StoriesMedia />
      <ActivityGallery />
      <JoinFsif />
      <PartnershipCta />
    </>
  )
}
