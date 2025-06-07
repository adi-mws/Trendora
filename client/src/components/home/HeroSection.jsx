import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className='HeroSection flex flex-col items-center lg:grid lg:grid-cols-2'>
        <div className="left lg:order-0 order-2 flex flex-col items-center lg:items-start gap-7 ps-0 pe-0 sm:ps-10 sm:pe-10 md:ps-20 lg:ps-0 lg:pe-0 md:pe-20 md:pt-20 pt-10">
            <p className="main-hero-title text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start font-bold font-primary">Elevate Your Space with  Trendy Finds</p>
            <p className="main-hero-description text-md font-secondary">Shop our curated collection of modern decor and elevate your space with trendy finds. Discover pieces that reflect your unique style today</p>
            <div className="cta flex md:flex-row flex-col gap-5">
                <button className='py-3 rounded-md font-medium px-10 bg-orange-500 w-[90vw] md:w-[auto] text-white ' onClick={() => navigate('/collections')}>Explore Collections</button>
                <button className='py-3 rounded-md font-medium px-10 w-[90vw] md:w-[auto] text-gray-800 border-1 border-gray-800' onClick={() => navigate('/products')}>Shop Now</button>
            </div>
        </div>
        <div className="right flex items-center w-full justify-center ">
            <img src="/imgs/decoration-hero.png" alt="hero-img" className='text-xs w-80 md:w-full  max-w-120' />
        </div>
    </div>
  )
}
