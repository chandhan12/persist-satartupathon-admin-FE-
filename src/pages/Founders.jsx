import React, { useEffect, useRef, useState } from 'react'
import { crossIcon, plusIcon } from '../icons'
import FoundersItem from '../components/FoundersItem'
import axios from 'axios'

const Founders = () => {

  const [founders,setFounders]=useState([])
  const [open,setOpen]=useState(false)
  const nameRef=useRef(" ")
  const positionRef=useRef(" ")
  const locationRef=useRef(" ")
  const highlightsRef=useRef(" ")
  const bioRef=useRef(" ")
  const [profilePicFile,setProfilePicFile]=useState(" ")

  useEffect(()=>{
    const fetchFounders=async ()=>{

      try {
        const response=await axios.get("http://localhost:3000/api/admin/founders")
        setFounders(response.data.founders)
      } catch (error) {
        console.log(error.message)
      }

    }
    fetchFounders()
  },[open])


  const handlePicFile=(e)=>{
    const file=e.target.files[0]

    var reader=new FileReader()
    reader.onloadend=function (){
      setProfilePicFile(reader.result)
      
    }
    reader.readAsDataURL(file)


  }
  console.log(profilePicFile)

  const handleSubmit=async ()=>{
    const name=nameRef.current.value
    const position=positionRef.current.value
    const location=locationRef.current.value 
    const bio=bioRef.current.value 
    const highlights=highlightsRef.current.value 


    try {
      const res=await axios.post("http://localhost:3000/upload",{
        imageUrl:profilePicFile
      })

      console.log(res.data.url)
      const profilePicUrl=res.data.url

      const response =await axios.post("http://localhost:3000/api/admin/founders",{
        name,
        position,
        location,
        bio,
        highlights,
        profilePic:profilePicUrl

      })
      setOpen(false)
    } catch (error) {
      
      console.log(ErrorEvent.message)
    }

  }
  const onClose=()=>{
    setOpen(false)
  }


console.log(founders)
  return (

    <>
    { open && <div>
              <div className="w-screen h-screen bg-slate-500 
            opacity-60 fixed left-0 top-0 justify-center flex">
    
              </div>
            
            <div className="w-screen h-screen  
             fixed left-0 top-0 justify-center flex ">
                <div className="flex justify-center flex-col ">
                    <span className=" bg-white rounded opacity-100 p-4">
                       <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer text-red-500">
                       {crossIcon}
                        </div>
                       </div>  
                       <div>
                        <input type="text" ref={nameRef}  placeholder='Name' />
                        
                       <div className='flex flex-col gap-5 p-2'>
                       <input type="text" ref={positionRef} placeholder='Position' />
                       <input type="text" ref={locationRef} placeholder='Location' />
                       <input type="text" ref={bioRef} placeholder='Bio' />
                        <textarea  placeholder='Highlights' ref={highlightsRef} ></textarea>
                       </div>
                        <p>profilr pic : </p>
                        <input type="file" className='bg-amber-300' onChange={handlePicFile}/>
                        
                    </div>
                    <button onClick={handleSubmit} className='bg-green-500 rounded-lg cursor-pointer p-1 text-white'>ADD FOUNDER</button>
                    </span>
                   
                </div>
                </div>
                </div>
                }
    
        <div className="min-h-screen bg-gray-50 rounded-md p-8">
        <div className="flex justify-between m-2">
          <h1 className="text-lg font-semibold">Founders </h1>
          <div
            className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44"
            
          >
            <span>{plusIcon}</span>
            <button onClick={()=> setOpen(true)} className="cursor-pointer ">ADD FOUNDER</button>
          </div>
        </div>
    
        <div className="max-w-full mx-auto bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full table-fixed divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
                <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
                <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="w-64 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Bio & Highlights</th>
               
               
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                founders.map((founder,index)=>{
                  return (
                    <FoundersItem slNo={index+1} 
                    key={founder._id}
                    name={founder.name}
                    profilePic={founder.profilePic}
                    position={founder.position}
                    location={founder.location}
                    bio={founder.bio}
                    highlights={founder.highlights}
                    />
                  )

                })
              }
            </tbody>
          </table>
        </div>
      </div>
      </>
  )
}

export default Founders
