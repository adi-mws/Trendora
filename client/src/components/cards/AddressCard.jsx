import React from 'react'

export default function AddressCard({ address }) {
    return (
        <div className="address-card p-5 min-w-100 bg-slate-50 rounded-md flex flex-col gap-4 text-gray-600">
            <div className="address-card-head flex items-center justify-between">
                <p className="address-name font-semibold text-md">{address?.name}</p>
                {address?.default ?
                    <span className='font-medium bg-orange-600 py-2 px-5 text-white text-xs rounded-full'>Default</span> : <></>}
            </div>
            <div className="main-address">
                <p className="addressline-1">{address?.addressLine1 ? address?.addressLine1 + ', ' : ''}
                    {address?.addressLine2 ? address?.addressLine2 + ', ' : ''} {address?.city ? address?.city + ', ' : ''}</p>
                <p className="state and country">{address?.state}, {address?.country}</p>
                <p className="phone"><span className='font-medium'>Contact: </span> {address?.phone};
                </p>
            </div>

            <div className="address-controls flex items-center justify-between">
                <button className='text-blue-500 hover:underline text-xs'>Edit</button>
                <button className='text-blue-500 hover:underline text-xs'>Delete</button>
            </div>
        </div>
    )
}
