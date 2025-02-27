import React from 'react'
import { plusIcon } from '../icons'




const Challenges = () => {
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
    <div className='m-2 h-auto w-full bg-white'>
      <div>
        hi
      </div>
    </div>
    </div>
  )
}

export default Challenges
