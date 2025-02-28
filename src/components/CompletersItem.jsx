import React from 'react'

const CompletersItem = (props) => {
    const{_id,slNo,project,profile,position,image,description,funding,profilePicture}=props
  return (
    <tr>
    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{slNo}</td>

    <td className="px-3  whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={image} alt={`${project} logo`} />
        </div>
        <div className="ml-2">
          <div className="text-sm font-medium text-gray-900">{project}</div>
        </div>
      </div>
    </td>

    <td className="px-3 py-4  text-sm text-gray-500 text-wrap ">{profile}</td>
    <td className="px-3 py-4  text-sm text-gray-500">{position}</td>
    
    <td className="px-3 py-4 text-sm text-gray-500 truncate">{description}</td>
    <td className="px-3 py-4  text-sm text-gray-500">₹ {funding}</td>
    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
    <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={profilePicture} alt={`${profile} pic`} />
        </div>
    </td>

   
  </tr>
  )
}

export default CompletersItem
