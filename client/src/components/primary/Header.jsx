import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { openSidebar } from '../../redux/sidebarSlice';
export default function Header() {
    const dispatch = useDispatch(); 
    const isOpen = useSelector((state) => state.sidebar.isOpen); 
    return (
        <header className='Header flex justify-between items-center h-16 w-full font-secondary text-sm'>
            <button className='hamburger ms-5 sm:hidden' onClick={() => dispatch(openSidebar())}><i className="fas fa-bars text-xl"></i></button>
            <div className="LogoSection"><img src="/imgs/logo.png" className='w-40 max-w-none text-xs' alt="logo"/></div>
            <div className="NavItemsSection flex gap-2 justify-around items-center sm:w-200">
                <div className="nav-links hidden items-center gap-10 text-sm md:flex">
                    <Link to="" className='lg:flex hidden hover:underline'>Our Policies</Link>
                    <Link to="" className='lg:flex hidden hover:underline'>Our Story</Link>
                    <Link to="/account/orders" className='md:flex hidden hover:underline'>Orders</Link>
                    <Link to="/account/wishlist" className='md:flex hidden hover:underline'>Wishlist</Link>
        
                </div>

                <div className="search-wrapper text-xs hidden md:flex items-center gap-2 bg-gray-100 w-65 lg:w-80 rounded-md py-3 px-5">
                    <input type="search" placeholder='Search for decorative items' className='outline-none w-full' />
                    <img src="/icons/search-normal.png" alt="search-icon" />
                    
                </div>
                
            </div>
            <div className="AuthButtonsSection me-5">
                {/* <PrimaryButton text={"Login"} icon={"/icons/login.png"} /> */}
                <button className='py-3 px-12 rounded-md text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300'>Login</button>
            </div>
        </header>
    )
}
