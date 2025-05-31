import React from 'react'
import { Link } from 'react-router-dom'
export default function TrendingCollections() {
    return (
        <div className='TrendingCollections flex flex-col mt-10 gap-8 items-center'>
            <p className='font-primary text-3xl md:text-4xl font-semibold'>Trending Collections</p>
            <div className='TrendingCollections flex flex-col gap-2 lg:gap-0 lg:grid lg:grid-cols-2 w-full'>
                <Link><img className='hover:scale-102 transition-all duration-300' src="/imgs/summer-festival-collection.png" alt="summer-glow-collection" /></Link>
                <Link><img className='hover:scale-102 transition-all duration-300' src="/imgs/luminous-glow-collection.png" alt="lumnion-glow-collection" /></Link>
            </div>
        </div>
    )
}
