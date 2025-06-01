import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavMenu() {
    const location = useLocation();

    const pathnames = {
        profile: '/account',
        orders: '/account/orders',
        cart: '/account/cart',
        settings: '/account/settings'
    }

    return (
        <>
        <div className="NavMenu-relative h-17">

        </div>
            <div className="NavMenu w-full md:hidden fixed bottom-0 p-4 h-17 left-0 flex justify-around bg-white shadow-t z-10">
                <Link
                    to={pathnames.profile}
                    className={`nav-item flex flex-col items-center gap-1 text-xs ${location.pathname === pathnames.profile ? 'text-orange-600' : 'text-gray-600'}`}
                >
                    <i className="fas fa-user text-xl"></i>
                    <span>Profile</span>
                </Link>
                <Link
                    to={pathnames.orders}
                    className={`nav-item flex flex-col items-center gap-1 text-xs ${location.pathname === pathnames.orders ? 'text-orange-600' : 'text-gray-600'}`}
                >
                    <i className="fas fa-box text-xl"></i>
                    <span>Orders</span>
                </Link>
                <Link
                    to={pathnames.cart}
                    className={`nav-item flex flex-col items-center gap-1 text-xs ${location.pathname === pathnames.cart ? 'text-orange-600' : 'text-gray-600'}`}
                >
                    <i className="fas fa-shopping-cart text-xl"></i>
                    <span>Cart</span>
                </Link>
                <Link
                    to={pathnames.settings}
                    className={`nav-item flex flex-col items-center gap-1 text-xs ${location.pathname === pathnames.settings ? 'text-orange-600' : 'text-gray-600'}`}
                >
                    <i className="fas fa-cog text-xl"></i>
                    <span>Settings</span>
                </Link>
            </div>
        </>
    )
}
