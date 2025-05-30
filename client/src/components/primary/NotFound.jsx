import React from 'react'

export default function NotFound({ item }) {
    return (
        <div className='w-full h-screen flex items-center flex-col gap-5 justify-center'>
            <img src="/imgs/not-found.png" alt="not-found" />
            <p className="text font-primary">{item} Not Found</p>
        </div>
    )
}
