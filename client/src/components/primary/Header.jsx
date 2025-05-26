import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../buttons/PrimaryButton'
export default function Header() {
    return (
        <header className='Header flex justify-evenly items-center h-16 w-full font-secondary text-sm'>
            <div className="LogoSection"><img src="/imgs/logo.png" className='w-50 max-w-none' alt="" /></div>
            <div className="NavItemsSection flex gap-2 justify-around items-center sm:w-200">
                <Link to="" className='xl:flex hidden'>Our Policies</Link>
                <Link to="" className='lg:flex hidden'>Our Story</Link>
                <div className="search-wrapper text-sm flex items-center gap-2 border-1 px-5 border-black w-80 rounded-3xl py-3">
                    <input type="search" placeholder='Search for decorative items' className='outline-none w-full'/>
                    <img src="/icons/search-normal.png" alt="search-icon" />
                </div>
                <Link to="" className='lg:flex hidden'>Orders</Link>
                <Link to="" className='xl:flex hidden'>Wishlist</Link>
            </div>
            <div className="AuthButtonsSection me-5">
                {/* <PrimaryButton text={"Login"} icon={"/icons/login.png"} /> */}
                <button className='py-3 px-12 rounded-md text-sm font-semibold text-white bg-orange-500'>Login</button>
            </div>
        </header>
    )
}
