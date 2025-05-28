import React from 'react'

export default function Hamburger({state, setState}) {
    return (
        <button className="hamburger relative flex flex-col gap-1.5">
            <div className='hamburger-vector w-7 border-1 border-gray-800'></div>
            <div className='hamburger-vector w-5 border-1 border-gray-800'></div>
            <div className='hamburger-vector w-7 border-1 border-gray-800'></div>
        </button>
    )
}
