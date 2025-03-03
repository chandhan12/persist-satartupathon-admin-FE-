import React, { useEffect, useState } from 'react'
import SubscribersItem from '../components/SubscribersItem'
import axios from 'axios'

const Subscriptions = () => {
  const [subscribers,setSubscribers]=useState([])
  const [loading,setLoading]=useState(false)


  useEffect(()=>{
    const fetchSubscribers=async ()=>{
      try {
        setLoading(true)
        const response=await axios.get("http://localhost:3000/api/admin/subscribers",
          { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
    } }
        )
        
        setSubscribers(response.data.subscribers)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        
      }
    }
    fetchSubscribers()
  },[])
  return (
    <div className="min-h-screen bg-gray-50 rounded-md p-8">
    <div className="flex justify-between m-2">
      <h1 className="text-lg font-semibold">Subscribers </h1>
      
    </div>

    <div className="max-w-full mx-auto bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
            <th className="w-40 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="w-48 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

        
         {
          subscribers.map((subscriber,index)=>{
            return(
              <SubscribersItem slNo={index+1} key={index} name={subscriber.name} email={subscriber.email} />
            )

          })
         }
        </tbody>
      </table>
    </div>
    {
      loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
    }
  </div>
  )
}

export default Subscriptions
