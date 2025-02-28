import React, { useState } from 'react'
import { Play, Video } from 'lucide-react'

const ChallengesItem = (props) => {
    const{slNo,image,title,funding,deadline,description,reviewVideo,challengeVideo,status}=props
    
  return (
    <tr >
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {slNo}
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-15 w-15">
                      <img className="h-15 w-15 rounded-full" src={image} alt={`${title} logo`} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {funding}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {deadline}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 truncate">
                  {description}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center bg-blue-100 rounded-full h-8 w-8 ">
                  <a href={reviewVideo} target='_blank'><Play className="h-4 w-4 text-blue-600" /></a>
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                     1
                    </span>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center bg-blue-100 rounded-full h-8 w-8 ">
                  
                    <a href={challengeVideo} target='_blank'><Video className="h-4 w-4 text-blue-600" /> </a>
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                     1
                    </span>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <button className={`px-2  cursor-pointer text-center w-auto inline-flex text-xs leading-5 font-semibold rounded-2xl text-white  ${status == true ? ' bg-green-800':'bg-red-800' } `}>
                    {status==true ? 'Visible' :'Not visible'}
                  </button>
                 
                </td>
              </tr>
  )
}

export default ChallengesItem
