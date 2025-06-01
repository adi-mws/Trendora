import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar, closeSidebar } from '../../redux/sidebarSlice';
export default function Sidebar({ }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const location = useLocation();
  const pathnames = {
    profile: '/account',
    addresses: '/account/address',
    orders: '/account/order',
    wishlist: '/account/wishlist',
    subscriptions: '/account/subscriptions',
    support: '/account/support',
    trending: '/products/trending',
    specialdeals: '/specialdeals'
  }



  return (
    <div className={`sidebar-wrapper w-full top-0 backdrop-blur-sm left-0 h-full fixed ${isOpen ? 'z-[1]' : 'z-[-2]'}`} onClick={() => dispatch(closeSidebar())}>
      <div onClick={(e) => e.stopPropagation() } className={`Sidebar bg-white min-w-[250px] max-w-[270px] fixed top-0 left-0 scrollbar-none z-100 transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'} flex md:hidden h-screen flex-col overflow-y-scroll shadow-xs shadow-gray-300 w-full h-full1`}>
        <ul className='head h-50'>
          <img src="/imgs/logo.png" alt="logo" className='text-xs w-40' />
          <button className='close-btn'>Close</button>
        </ul>
        <ul className='text-sm mt-5 ms-3'>
          <h3 className='text-md font-semibold'>Hot Items</h3>
          <li>
            <Link to='/products/trending' className={`block py-3 px-5 ${location.pathname.includes(pathnames['trending']) ? 'bg-gray-50' : ''}`}>Trending Items</Link>
            <Link to='/specialdeals' className={`block py-3 px-5 ${location.pathname.includes(pathnames['specialdeals']) ? 'bg-gray-50' : ''}`}>Special Deals</Link>
            <Link to='/specialdeals' className={`block py-3 px-5 ${location.pathname.includes(pathnames['specialdeals']) ? 'bg-gray-50' : ''}`}>Dora Coins</Link>
            <Link className="block py-3 px-5">Special Deals</Link>
            <Link className="block py-3 px-5">Dora Coins</Link>
            <Link className="block py-3 px-5"></Link>
            <Link className="block py-3 px-5"></Link>
            <Link className="block py-3 px-5"></Link>
          </li>
        </ul>
        <ul className='block text-sm ms-3'>

          <li><Link to='/account' className={`block py-3 px-5 ${location.pathname.endsWith(pathnames['profile']) ? 'bg-gray-50' : ''}`}>Profile</Link></li>

          <li><Link to='/account/addresses' className={`block py-3 px-5 ${location.pathname.includes(pathnames['addresses']) ? 'bg-gray-50' : ''}`}>Addresses</Link></li>
          <li><Link to='/account/orders' className={`block py-3 px-5 ${location.pathname.includes(pathnames['orders']) ? 'bg-gray-50' : ''}`}>Orders</Link></li>
          <li><Link to='/account/wishlist' className={`block py-3 px-5 ${location.pathname.includes(pathnames['wishlist']) ? 'bg-gray-50' : ''}`}>Wishlist</Link></li>
          <li><Link to='/account/subscriptions' className={`block py-3 px-5 ${location.pathname.includes(pathnames['subscriptions']) ? 'bg-gray-50' : ''}`}>Subscriptions</Link></li>
          <li><Link to='/account/support' className={`block py-3 px-5 ${location.pathname.includes(pathnames['support']) ? 'bg-gray-50' : ''}`}>Support</Link></li>
        </ul>

      </div>
    </div >
  )
}
