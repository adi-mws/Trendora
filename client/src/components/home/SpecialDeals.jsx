import React from 'react'
import { Link } from 'react-router-dom'
export default function SpecialDeals() {

  const specialDealsItems = [
    {
      name: 'Glamorous Home Decor Collection',
      tag: 'Limited',
      description: 'Add holiday magic to your home with shimmering garlands, charming ornaments and cozy throws.',
      saving: '50%',
      link: '/glamorous-home-decor-collection',
      color: '#FF6F61' // random warm coral
    },
    {
      name: 'Holiday Gift Wrap Set',
      tag: 'Hot Deal',
      description: 'Beautiful premium wrapping paper, festive ribbons, and tags for perfect holiday wrapping.',
      saving: '40%',
      link: '/holiday-gift-wrap-set',
      color: '#6B5B95' // random purple
    },
    {
      name: 'Exclusive Holiday Gift Boxes',
      tag: 'Special',
      description: 'Pre-packed holiday gift boxes, beautifully wrapped and ready to delight – the ultimate in hassle-free gifting!',
      saving: '30%',
      link: '/exclusive-holiday-gift-boxes',
      color: '#88B04B' // random green
    },
    {
      name: 'Festive Lights & Accessories',
      tag: 'New Arrival',
      description: 'Twinkling LED lights and elegant décor accents to bring sparkle and glow to your holiday space.',
      saving: '20%',
      link: '/festive-lights-accessories',
      color: '#F7CAC9' // random light pink
    },

  ];
  
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div className='flex gap-8 flex-col items-center'>
        <div className="head flex justify-between items-center w-full p-5">
          <p className="title font-primary text-4xl">Special Deals</p>
          <p className="countdown-timer font-secondary text-3xl">10:35:52</p>
        </div>
        <div className="item-list flex flex-col gap-8 items-center">
          {specialDealsItems.map((item, index) => (
            <div key={index} className="card-item flex rounded-xl overflow-hidden flex-col bg-[linear-gradient(to_bottom,#F2F4FF,white)] gap-5 pb-5">
                <div className="head-tag">
                  <span className='px-5 py-2 text-white font-semibold text-xs' style={{background: `${item.color}`}}>{item.tag}</span>
                </div>
                <div className="middle-content items grid [grid-template-columns:70%_28%] gap-[2%] px-6">
                  <div className='w-full flex flex-col gap-2'>
                    <p className="title font-primary text-lg font-semibold">{item.name}</p>
                    <p className='title font-secondary text-sm text-gray-600'>{item.description}</p>
                  </div>
                  <div className='w-full flex flex-col gap-2 font-secondary'>
                    <span className='px-4 py-2 bg-amber-600 text-xs text-white flex items-center justify-center'>Save Upto {item.saving}</span>
                    <Link className='px- py-2  border-1 border-black text-xs flex items-center justify-center' >Shop Now</Link>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <Link to="/special-deals" className='hover:underline text-sm'>View More Special Deals</Link>
      </div>
      <div><img src="/imgs/special-deal.jpg" alt="specialDeal-image" className='text-xs' /></div>

    </div>
  )
}
