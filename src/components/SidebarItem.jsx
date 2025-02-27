import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ( {title, icon,path}) => {
  return (
    <div className='m-2 bg-gray-300 '>
    
    <Link to={path}>
    <div className='flex justify-center '>
    <div className='flex gap-2  justify-center items-center mt-2 mr-5'>
        <p className='text-lg'>{icon}</p>
        <p className='text-lg'>{title}</p>
        </div>
        </div>
    </Link>
   
    </div>
  )
}

export default SidebarItem
