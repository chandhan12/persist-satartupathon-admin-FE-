import React from 'react'
import SidebarItem from './SidebarItem'
import { challengeIcon, CompletersIcon, foundersIcon } from '../icons'

const Sidebar = () => {
  return (
    <div className='bg-slate-200 shadow-[3px_0_10px_rgba(0,0,0,0.2)]  h-screen w-72 ml-0'>
      <SidebarItem icon={challengeIcon} title="CHALLENGES" path={"/"}/>
      <SidebarItem icon={CompletersIcon} title="COMPLETERS" path={"/completers"}/>
      <SidebarItem icon={foundersIcon} title="FOUNDERS" path={"/founders"}/>
      <SidebarItem icon={challengeIcon} title="SUBSCRIBERS" path={"/subscribers"}/>
      
    </div>
  )
}

export default Sidebar
