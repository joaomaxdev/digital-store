import { HeroSection } from './components/HeroSection'
import { FeaturedCollections } from './components/FeaturedCollections'
import { TrendingProducts } from './components/TrendingProducts'
import { SpecialOffer } from './components/SpecialOffer'

export function HomePage() {
  return (
    <div className=''>
      <HeroSection />

      <FeaturedCollections />

      <TrendingProducts />

      <SpecialOffer />
    </div>
  )
}
