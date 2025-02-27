import React, { useState } from 'react'

const ChallengesItem = (props) => {
    const{slNo,image,title,funding,deadline,description,reviewVideo,challengeVideo,status}=props
    
  return (
    <div className='m-[1px] grid grid-cols-10 items-center  h-14  bg-white'>
      
       <div className='flex gap-10 col-span-2 p-1 bg-lime-200'>
        <div>{slNo}</div>
        <img src={image} alt="" className='h-15 w-15 rounded-full' />
        <div>{title}</div>
       </div>
       
       <div className='flex gap-10 col-span-5 bg-blue-200'>
        <p>{funding}</p>
        <p>{deadline}</p>
        <p className='overflow-hidden'>{description}</p>
       </div>
        <div className='flex gap-10 col-span-3 bg-slate-300'>
        <a href={reviewVideo}>#</a>
        <a href={challengeVideo}>#</a>
       <button className={`${status==="true" ? 'bg-green-400' : 'bg-red-400'} rounded-lg h-5 w-44`}>{status==="true" ? "visible" : "NotVisible"}</button>
       </div> 
    </div>
  )
}

export default ChallengesItem
