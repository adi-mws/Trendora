import React from 'react'
import { textCutter } from '../../utils/textFunctions'
export default function ProductCardVertical({ product }) {
  return (
    <div className="product-card flex-1/3 h-120 min-w-30 lg:flex-1/5 p-2 sm:p-3 gap-2 rounded-none max-w-80 text-2xs shadow-xs sm:shadow-md shadow-gray-100 flex flex-col sm:rounded-lg">
      <div className='img relative w-full h-80 overflow-hidden rounded-t-xl'>
        <button onClick={() => toggleWishlist(product)} className='wishlist-button h-9 w-9 absolute right-1 top-1 rounded-xl p-2 bg-white'>
          {/* Whislist for products */}
          {product.wishlist ?
            <img src="/icons/heart-fill.png" alt="heart-icon" className='text-xs' /> :
            <img src="/icons/heart.png" alt="heart-icon" className='text-xs' />
          }
        </button>
        {/* Product Image */}
        <img src={product?.image} className='h-full w-full text-xs' alt={textCutter(product?.name, 50)} />
      </div>
      {/* Product details for the product Cards */}

      <div className='product-details flex flex-col h-70 lg:h-50 font-secondary gap-3'>
        <p className="product-name text-sm font-primary">{textCutter(product?.name, 130)}</p>
        <div className="price-section flex gap-2 items-center md:flex-nowrap flex-wrap">
          <p className="product-price text-2xl text-gray-600">&#8377;{product.price}</p>
          <p className='product-mrp line-through font-medium text-gray-500 text-xs'>&#8377;{product.mrp}</p>
          <p className="product-discount text-sm text-gray-700">({product?.discount} off)</p>
        </div>
        <div className="product-rating-reviews flex justify-between items-center">
          <div className="product-rating flex">
            {[1, 2, 3, 4, 5].map((count, index) => (
              product.rating >= count ?
                <i key={index} className="fas fa-star text-amber-400"></i>
                : count > product.rating && Math.ceil(product?.rating) == count ? <i key={index} className="fas fa-star-half-stroke text-amber-400"></i> : <i key={index} className="fas fa-star text-gray-400"></i>
            ))}
          </div>
          <div className="product-reviews text-sm text-gray-700"><i class="fa-solid fa-user"></i> {product.reviews} reviews</div>
        </div>
        {product?.remainingInStock ?
          <div className='special flex items-center'> <span className='bg-orange-600 text-white py-1 px-3 text-xs'>{product.remainingInStock} Remaining In Stock</span></div>:
          <div className='special flex items-center'> <span className='text-gray-700 text-xs'>{product.deliveryInformation} Delivery at Patna - <span className='text-green-800 font-semibold'>{product?.deliveryInformation?.zipcode}800001</span>  on Sunday 26th</span></div>
        }
      </div>
    </div>
  )
}
