import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerDashSidebar from '../components/primary/CustomerDashSidebar'
export default function CustomerDashboardLayout() {
  return (
    <div className="CustomerDashboard grid [grid-template-columns:250px_calc(100%-250px)] h-screen">
      <CustomerDashSidebar />
      <div className="customer-content">
        <Outlet />
      </div>
    </div>
  )
}
