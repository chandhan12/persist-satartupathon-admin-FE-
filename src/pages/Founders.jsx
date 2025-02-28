import React from 'react'
import { plusIcon } from '../icons'

const Founders = () => {
  return (
    
        <div className="min-h-screen bg-gray-50 rounded-md p-8">
        <div className="flex justify-between m-2">
          <h1 className="text-lg font-semibold">Founders </h1>
          <div
            className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44"
            
          >
            <span>{plusIcon}</span>
            <button className="cursor-pointer">ADD FOUNDER</button>
          </div>
        </div>
    
        <div className="max-w-full mx-auto bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full table-fixed divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Bio & Highlights</th>
               
               
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Founders
