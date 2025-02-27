import React from 'react'
import SidebarItem from './SidebarItem'
import { challengeIcon, CompletersIcon, foundersIcon, subscribersIcon } from '../icons'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location=useLocation()
  return (
    <div className='bg-slate-200 shadow-[3px_0_10px_rgba(0,0,0,0.2)]  h-screen w-64 ml-0'>
      <SidebarItem icon={challengeIcon} title="CHALLENGES" path={"/"} isActive={location.pathname === '/' ? "true" :"false"}/>
      <SidebarItem icon={CompletersIcon} title="COMPLETERS" path={"/completers"} isActive={location.pathname === '/completers' ? "true" :"false"}/>
      <SidebarItem icon={foundersIcon} title="FOUNDERS" path={"/founders"} isActive={location.pathname === '/founders' ? "true" :"false"}/>
      <SidebarItem icon={subscribersIcon} title="SUBSCRIBERS" path={"/subscribers"} isActive={location.pathname === '/subscribers' ? "true" :"false"}/>

      
    </div>
  )
}

export default Sidebar
