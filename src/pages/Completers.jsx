import React, { useEffect, useState } from 'react'
import { plusIcon } from '../icons'
import axios from 'axios'
import CompletersItem from '../components/CompletersItem'


const Completers = () => {

  const [completers,setCompleters]=useState([])


  useEffect(()=>{
    const fetchCompleters=async ()=>{
      try {
        const response=await axios("http://localhost:3000/api/admin/completers")
        setCompleters(response.data.completers)
      } catch (error) {
        console.log(error.message)
        
      }
    }
    fetchCompleters()
  },[])

  console.log(completers)
  return (
   
    <div className="min-h-screen bg-gray-50 rounded-md p-8">
    <div className="flex justify-between m-2">
      <h1 className="text-lg font-semibold">Completers </h1>
      <div
        className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44"
        
      >
        <span>{plusIcon}</span>
        <button className="cursor-pointer">ADD COMPLETER</button>
      </div>
    </div>

    <div className="max-w-full mx-auto bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
            <th className="w-48 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
            <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
            <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
            <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
            <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Funding</th>
            <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Profile Picture</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {
            completers.map((completer,index)=>{
              return(
                <CompletersItem
                slNo={index+1}
                image={completer.image} 
                project={completer.project}
                profile={completer.profile}
                position={completer.position}
                description={completer.description}
                funding={completer.funding}
                profilePicture={completer.profilePicture}
                 />
              )
            })
          }
         
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Completers
