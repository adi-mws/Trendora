import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function CustomerDashSidebar() {
  const location = useLocation();
  const pathnames = {
    profile: '/account',
    addresses: '/account/address',
    orders: '/account/order',
    wishlist: '/account/wishlist',
    subscriptions: '/account/subscriptions', 
    support: '/account/support'
  }

  return (
    <div className='CustomerDashSidebar flex flex-col overflow-y-scroll shadow-xs shadow-gray-300 w-full h-full'>
      <ul className='head h-50'>
        <img src="/imgs/logo.png" alt="logo" className='text-xs w-40' />
      </ul>
      <ul className='block text-sm '>
      
        <li><Link to='/account' className={`block py-3 px-5 ${location.pathname.endsWith(pathnames['profile']) ? 'bg-gray-50' : ''}`}>Profile</Link></li>

        <li><Link to='/account/addresses' className={`block py-3 px-5 ${location.pathname.includes(pathnames['addresses']) ? 'bg-gray-50' : ''}`}>Addresses</Link></li>
        <li><Link to='/account/orders' className={`block py-3 px-5 ${location.pathname.includes(pathnames['orders']) ? 'bg-gray-50' : ''}`}>Orders</Link></li>
        <li><Link to='/account/wishlist' className={`block py-3 px-5 ${location.pathname.includes(pathnames['wishlist']) ? 'bg-gray-50' : ''}`}>Wishlist</Link></li>
        <li><Link to='/account/subscriptions' className={`block py-3 px-5 ${location.pathname.includes(pathnames['subscriptions']) ? 'bg-gray-50' : ''}`}>Subscriptions</Link></li>
        <li><Link to='/account/support' className={`block py-3 px-5 ${location.pathname.includes(pathnames['support']) ? 'bg-gray-50' : ''}`}>Support</Link></li>
      </ul>
      <ul className='text-sm mt-5 ms-3'>
        <h3 className='text-md font-semibold'>Continue Shopping</h3>
        <li>
          <Link className="block py-3 px-5">Trending Items</Link>
          <Link className="block py-3 px-5"></Link>
          <Link className="block py-3 px-5"></Link>
          <Link className="block py-3 px-5"></Link>
          <Link className="block py-3 px-5"></Link>
          <Link className="block py-3 px-5"></Link>
        </li>
      </ul>
    </div>
  )
}
