import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-row p-2 gap-2 h-screen'>
    <div className="w-64 min-w-[16rem] h-full fixed left-0 top-0">
      <Sidebar />
    </div>
    <div className="ml-64 flex-1 p-4">
      <Outlet />
    </div>
  </div>
  )
}

export default Layout
