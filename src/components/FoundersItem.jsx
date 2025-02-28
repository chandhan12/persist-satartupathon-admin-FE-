import React from 'react'

const FoundersItem = (props) => {
    const {slNo,name,profilePic,position,location,bio,highlights}=props
  return (
    <tr>
    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{slNo}</td>

    <td className="px-3  whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={profilePic} alt={`${name} logo`} />
        </div>
        <div className="ml-2 flex flex-col gap-2">
          <div className="text-sm font-medium text-gray-900">{name}</div>
          <div className="text-sm text-wrap mb-1 text-gray-600">{position}</div>
        </div>
      </div>
    </td>

    <td className="px-3 py-4  text-sm text-gray-800 text-wrap ">{position}</td>
    <td className="px-3 py-4  text-sm text-gray-500">{location}</td>
    
    <div className='flex flex-col '>
    <td className="px-1 py-1 text-sm text-gray-800 ">{bio}</td>
    <td className="px-1 py-1  text-sm text-gray-500 truncate"> {highlights}</td>
    </div>
    

   
  </tr>
  )
}

export default FoundersItem
