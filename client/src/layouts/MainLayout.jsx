import React from 'react'
import HomePage from '../pages/HomePage'
import Header from '../components/primary/Header'
import Navbar from '../components/primary/Navbar'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='MainLayout mx-13 flex flex-col gap-10'>
        <Outlet />
      </div>
    </>
  )
}
