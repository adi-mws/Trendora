import React from 'react'

export default function ProductCardList({ product }) {
  return (
    <div className='product-card-list flex p-5 gap-4 shadow-2xs shadow-gray-100'>
      <div className='img-part flex items-center justify-center'>
        <img src={product?.image} alt="product-image" className='text-xs min-w-40 h-40' />
      </div>
      <div className='product-details-container text-gray-700 flex-col flex gap-4'>
        <p className="product-name text-sm font-primary">{product?.name}</p>
        <div className="flex flex-col lg:flex-row lg:items-center w-full gap-5 lg:gap-30 xl:gap-50">
          <div className='product-details flex flex-col gap-4 order-2 lg:order-0'>
            <div className="pricing-section flex items-center gap-3">
              <p className="product-name text-2xl font-semibold">&#8377;{product?.price}</p>
              <p className="product-name text-sm line-through">&#8377;{product.mrp}</p>
              <p className="product-name text-md">Save {product.discount}</p>
            </div>
            <div className="controls flex gap-2 items-center">
              <button className='px-8 py-2 rounded-md text-sm bg-green-600 hover:bg-green-700 text-white transition duation-300'>Add To Cart</button>
              <button className='px-8 py-2 rounded-md text-sm bg-amber-100 text-amber-600 hover:outline-1 hover:outline-amber-500 transition duration-300'>Remove from Wishlist</button>
            </div>
          </div>

          <div className='rating-delivery-info gap-5 flex flex-row lg:flex-col'>
            <span className='rounded-full py-2 text-white bg-green-600 text-xs flex gap-1 w-20 justify-center items-center'><i className="fas fa-star"> </i>{product?.rating}</span>

            <div className="product-rating flex items-center">

              {[1, 2, 3, 4, 5].map((count, index) => (
                product.rating >= count ?
                  <i key={index} className="fas fa-star text-amber-400"></i>
                  : count > product.rating && Math.ceil(product?.rating) == count ? <i key={index} className="fas fa-star-half-stroke text-amber-400"></i> : <i key={index} className="fas fa-star text-gray-400"></i>
              ))}
            </div>
            <div className="product-reviews text-sm text-gray-600 flex items-center gap-2"><i class="fa-solid fa-user"></i> {product.reviews} reviews</div>
          </div>

        </div>

      </div>
    </div >
  )
}
