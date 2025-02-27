import React, { useEffect, useState } from 'react'
import { plusIcon } from '../icons'
import axios from 'axios'




const Challenges = () => {

  const [challenges,setChallenges]=useState()


  useEffect(()=>{
    const fetchChallenges=async ()=>{
      const result=await axios.get("http://localhost:3000/api/admin/challenges")
      setChallenges(result.data)
    }

    fetchChallenges()

  },[])

  console.log(challenges)

  return (
    <div className='h-screen w-full bg-red-200'>
    <div className='flex justify-between m-2 '>
      <div className='m-2'>
        <h1>Challenges Management</h1>
      </div>
      <div className='m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44'>
        <span>{plusIcon} </span>
        <button className='cursor-pointer'>ADD CHALLENGE</button>
      </div>
    </div>
    <div className='m-2 grid grid-cols-10 items-center  h-14  bg-white'>
      
       <div className='flex gap-10 col-span-2 p-1 bg-lime-200'>
        <div>Sl No.</div>
        <div>Title</div>
       </div>
       
       <div className='flex gap-10 col-span-5 bg-blue-200'>
        <p>Funding</p>
        <p>Deadline</p>
        <p>Description</p>
       </div>
        <div className='flex gap-10 col-span-3 bg-slate-300'>
        <p>Review Videos</p>
        <p>Challenge Videos</p>
        <p>Status</p>
       </div> 
    </div>
    
    </div>
  )
}

export default Challenges
