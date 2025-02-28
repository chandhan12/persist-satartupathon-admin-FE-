import React from 'react'

const SubscribersItem = (props) => {
    const {slNo,name,email}=props
  return (
    <tr className='h-15'>
    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{slNo}</td>

    <td className="px-3 py-4  text-lg text-gray-800 text-wrap ">{name}</td>
    <td className="px-3 py-4  text-lg text-gray-500">{email}</td>
 
  </tr>
  )
}

export default SubscribersItem
