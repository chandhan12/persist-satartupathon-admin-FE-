import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ( {title, icon,path,isActive}) => {
    
  return (
    <div className={`m-2 hover:bg-gray-300 rounded-lg ${isActive === "true" ? 'text-blue-500' : ''}`}>
    
    <Link to={path}>
    <div className={`flex justify-center ${isActive === "true" ? 'text-blue-500' : ''}`}>
    <div className='flex gap-2  justify-center items-center mt-2 mr-5'>
        <div className={`text-lg  ${isActive === "true" ? 'text-blue-500' : ''} `}>{icon}</div>
        <p className='text-lg'>{title}</p>
        </div>
        </div>
    </Link>
   
    </div>
  )
}

export default SidebarItem
