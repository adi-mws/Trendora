import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

export default function HeroSection() {
  return (
    <div className='HeroSection grid grid-cols-2'>
        <div className="left flex flex-col gap-7 pt-20">
            <p className="main-hero-title text-6xl font-bold font-primary">Elevate Your Space with  Trendy Finds</p>
            <p className="main-hero-description text-md font-secondary">Shop our curated collection of modern decor and elevate your space with trendy finds. Discover pieces that reflect your unique style today</p>
            <div className="cta flex gap-5">

                <PrimaryButton text={"Explore Collections"}/>
                <PrimaryButton text={"Shop Now"}/>
            </div>
        </div>
        <div className="right">
            <img src="/imgs/decoration-hero.png" alt="hero-img" />
        </div>
    </div>
  )
}
