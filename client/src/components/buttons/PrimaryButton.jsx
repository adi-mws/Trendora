import React from 'react'

export default function PrimaryButton({text, icon}) {
  return (
    <button className='border-1 rounded-lg flex gap-2 font-secondary cursor-pointer px-9 py-2 border-black text-sm items-center'> <p>{text}</p></button>
  )
}
