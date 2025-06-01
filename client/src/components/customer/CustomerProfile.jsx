import React from 'react'
import { Link } from 'react-router-dom'
export default function CustomerProfile() {
    // This component keeps all the things related to the customer's profile
    return (
        <div className='CustomerProfile w-full font-secondary'>
            <div className="head md:p-5 flex ">
                <div className="coins-and-greet-section mt-5 flex flex-col gap-5">
                    <div className="head-flex flex item-center px-5 justify-between">
                        <p className="greet text-xl font-primary">Hi, Aditya</p>
                        <Link className='flex items-center gap-2 sm:text-lg md:text-xl border-blue-600 px-5 py-2 text-blue-600 border-1 text-sm rounded-md' to={'/products'}>Continue Shopping <i className='fas fa-arrow-right'></i></Link>
                    </div>
                    <div className="blue-gradient-area text-xs w-[100vw] lg:w-160 gap-6 flex flex-1/2 justify-between rounded-md bg-[linear-gradient(to_bottom,#F2F4FF,white)] p-5">
                        <div className="flex flex-col gap-6">
                            <p className='font-primary text-xl'>Your Dora Wallet</p>
                            <div className='flex gap-3 items-center'>
                                <img src="/icons/dora-coin.png" className='w-6' alt="dora-coins" />
                                <p className="amount-in-wallet text-lg md:text-xl">150 coins</p>
                            </div>

                            <div className="extrenal-links flex items-center">
                                <Link className='py-2 px-5 border-1 border-black rounded-md'>Get More Coins</Link>
                            </div>
                        </div>

                        <div className="profile-pic-section flex flex-col gap-2 text-xs items-center ms-5">
                            <div className="pfp">
                                <img src="/imgs/pfp-img.jpeg" alt="profile" className='w-30 h-30 sm:w-40 sm:h-40 overflow-hidden bg-gray-100 rounded-full bg-cover profile-pic text-xs' />
                            </div>

                            {/* <button className='text-gray-800 hover:underline'>Upload profile pic</button> */}

                        </div>
                    </div>

                </div>


            </div>

            <div className='flex flex-col gap-3 flex-wrap w-full h-full'>
                <div className="head flex items-center justify-between px-6 py-3 bg-amber-50">
                    <h3 className='font-primary font-medium text-lg'>Account Details</h3>
                    <button className='flex gap-2 items-center text-gray-600 text-sm'><i className="fas fa-edit"></i> Edit Details</button>
                </div>
                <div className="name-container py-3 px-5 flex flex-col gap-2 shadow-2xs shadow-gray-100">
                    <p className="name-label flex gap-2 items-center text-gray-600 font-semibold"><i className="fas fa-user"></i> Name</p>
                    <p className="name text-xs text-gray-700">Aditya Raj</p>
                </div>
                <div className="email-container py-3 px-5 flex flex-col gap-2 shadow-2xs shadow-gray-100">
                    <p className="email-label flex gap-2 items-center text-gray-600 font-semibold"><i className="fas fa-envelope"></i> Email</p>
                    <p className="email text-xs text-gray-700">aditya040mthgmail.com</p>
                </div>

                <div className="contact-container py-3 px-5 flex flex-col gap-2 shadow-2xs shadow-gray-100">
                    <p className="contact-label flex gap-2 items-center text-gray-600 font-semibold"><i className="fas fa-phone"></i> Contact</p>
                    <p className="contact text-xs text-gray-700">+91 9234543254</p>
                </div>
                <div className="address-container py-3 px-5 flex flex-col gap-2 shadow-2xs shadow-gray-100">
                    <p className="address-label flex gap-2 items-center text-gray-600 font-semibold"><i className="fas fa-house"></i> Address</p>
                    <div className="default-address text-xs">
                        <p className="default-address-label text-orange-500">Default Address</p>
                        <p className='text-gray-800'>Ramji Nagar, Vinita Verma Clinic, Patna-800001</p>
                        <button className='hover:underline mt-2'>View all Address</button>
                    </div>
                </div>
            </div>


        </div >
    )
}
