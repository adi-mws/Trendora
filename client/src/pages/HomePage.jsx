import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ProductsSection from '../components/home/ProductsSection'
import SpecialDeals from '../components/home/SpecialDeals'
import TrendingCollections from '../components/home/TrendingCollections'

export default function HomePage() {
  return (
    <div className='HomePage'>
        <HeroSection />
        <SpecialDeals />
        <TrendingCollections />
        <ProductsSection />
    </div>
  )
}
