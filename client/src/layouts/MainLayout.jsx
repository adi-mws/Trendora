import React from 'react'
import HomePage from '../pages/HomePage'
import Header from '../components/primary/Header'
import Navbar from '../components/primary/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/primary/Sidebar'
import NavMenu from '../components/primary/NavMenu'
export default function MainLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Navbar />
      <div className='MainLayout mx-2 sm:mx-8 lg:mx-13  flex flex-col gap-10'>
        <Outlet />
      </div>
    </>
  )
}
