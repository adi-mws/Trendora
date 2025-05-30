import React from 'react'

export default function NotFound({ item }) {
    return (
        <div className='w-full h-full mt-10 flex items-center flex-col gap-5 justify-center'>
            <img src="/imgs/not-found.png" alt="not-found" className='text-xs w-80 h-80' />
            <p className="text font-primary text-xl text-gray-700">{item} Not Found</p>
        </div>
    )
}
