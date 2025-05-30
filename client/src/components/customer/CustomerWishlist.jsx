import React, { useState } from 'react'
import ProductCardList from '../cards/ProductCardList';

export default function CustomerWishlist() {
  const [wishlist, setWishlist] = useState([]); 
  
  return (
    <div className='CustomerWishlist flex flex-col gap-5'>
      <div className="head flex p-5 items-center">
        <p className="title font-primary text-xl">Your Wishlist</p>
        {wishlist.map((product, index)  => (
          <ProductCardList product={product} />
        ))}
      </div>

      <div className="flex flex-col"></div>
    </div>
  )
}
