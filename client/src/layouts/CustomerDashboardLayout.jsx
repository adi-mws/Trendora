import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerDashSidebar from '../components/primary/CustomerDashSidebar'
import NavMenu from '../components/primary/NavMenu'
export default function CustomerDashboardLayout() {
  return (
    <div className="CustomerDashboard md:grid md:[grid-template-columns:250px_calc(100%-250px)] h-screen ">

      <CustomerDashSidebar />
      <div className="customer-content overflow-y-scroll">
        <Outlet />
      </div>
      <NavMenu />

    </div>
  )
}
