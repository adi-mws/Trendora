import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../buttons/PrimaryButton'
export default function Header() {
    return (
        <header className='Header flex justify-evenly items-center h-16 w-full font-secondary text-sm'>
            <div className="LogoSection"><img src="/imgs/logo.png" className='w-50 max-w-none' alt="" /></div>
            <div className="NavItemsSection flex gap-2 justify-around items-center sm:w-200">
                <div className="nav-links flex items-center gap-10">
                    <Link to="" className='lg:flex hidden'>Our Policies</Link>
                    <Link to="" className='lg:flex hidden'>Our Story</Link>
                    <Link to="" className=''>Orders</Link>
                    <Link to="" className=''>Wishlist</Link>
                </div>

                <div className="search-wrapper text-sm flex items-center gap-2 bg-gray-100 w-80 rounded-md py-3 px-5">
                    <input type="search" placeholder='Search for decorative items' className='outline-none w-full' />
                    <img src="/icons/search-normal.png" alt="search-icon" />
                    
                </div>
                
            </div>
            <div className="AuthButtonsSection me-5">
                {/* <PrimaryButton text={"Login"} icon={"/icons/login.png"} /> */}
                <button className='py-3 px-12 rounded-md text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300'>Login</button>
            </div>
        </header>
    )
}
