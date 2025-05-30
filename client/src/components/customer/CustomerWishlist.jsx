import React, { useEffect, useState } from 'react'
import ProductCardList from '../cards/ProductCardList';

export default function CustomerWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const product_items = [
   
    {
      name: 'TIED RIBBONS Cycle Shape Flower Vase with Peonies Bunches for Home Decor Center Table Bedroom Living Room Office Bathroom Decorative Gift Items (19 cm x 21 cm)',
      price: 2000,
      mrp: 2500,
      discount: '20%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 3.5,
      wishlist: false
    },
    {
      name: 'TIED RIBBONS Cycle Shape Flower Vase with Peonies Bunches for Home Decor Center Table Bedroom Living Room Office Bathroom Decorative Gift Items (19 cm x 21 cm)',
      price: 2000,
      mrp: 2500,
      discount: '20%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 3.5,
      wishlist: false
    },
    {
      name: 'TIED RIBBONS Cycle Shape Flower Vase with Peonies Bunches for Home Decor Center Table Bedroom Living Room Office Bathroom Decorative Gift Items (19 cm x 21 cm)',
      price: 2000,
      mrp: 2500,
      discount: '20%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 3.5,
      wishlist: false
    },
    {
      name: 'TIED RIBBONS Cycle Shape Flower Vase with Peonies Bunches for Home Decor Center Table Bedroom Living Room Office Bathroom Decorative Gift Items (19 cm x 21 cm)',
      price: 2000,
      mrp: 2500,
      discount: '20%',
      image: '/imgs/cycle-decoration.jpg',
      rating: 3.5,
      wishlist: false
    },
  ]
  useEffect(() => {
    setWishlist(product_items);
  }, [])

  return (
    <div className='CustomerWishlist flex flex-col gap-5'>
      <div className="head flex p-5 items-center">
        <p className="title font-primary text-xl">Your Wishlist</p>

        

      </div>

      <div className="wishlist-container flex flex-col gap-5">

          {wishlist.map((product, index) => (
            <ProductCardList product={product} />
          ))}
        </div>
    </div>
  )
}
