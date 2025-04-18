import React, { useContext, useEffect, useRef, useState } from 'react'
import { crossIcon, plusIcon } from '../icons'
import axios from 'axios'
import CompletersItem from '../components/CompletersItem'
import { DeleteContext } from '../Context/DeleteContext'


const Completers = () => {

  const [completers,setCompleters]=useState([])
  const[open,setOpen]=useState(false)
  const projectRef=useRef(null)
  const profileRef=useRef(null)
  const positionRef=useRef(null)
  const descriptionRef=useRef(null)
  const fundingRef=useRef(null)
  const [imageFile,setImageFile]=useState(" ")
  const [profilePicFile,setProfilePicFile]=useState(" ")
  const [loading,setLoading]=useState(false)
  const [responseMessage, setResponseMessage] = useState('');
   const {deleted,setDeleted}=useContext(DeleteContext)


  useEffect(()=>{
    const fetchCompleters=async ()=>{
      try {
        setLoading(true)
        const response=await axios("https://persiststartupathon-admin.onrender.com/api/admin/completers",
          { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
        } }
        )
        setCompleters(response.data.completers)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        
      }
    }
    fetchCompleters()
  },[open,deleted])

  const onClose=()=>{
    setOpen(false)
  }

  const handleImageFile=(e)=>{
    const file=e.target.files[0]

    var reader=new FileReader()
    reader.onloadend=function (){
      setImageFile(reader.result)
      
    }
    reader.readAsDataURL(file)


  }


  const handlePicFile=(e)=>{
    const file=e.target.files[0]

    var reader=new FileReader()
    reader.onloadend=function (){
      setProfilePicFile(reader.result)
      
    }
    reader.readAsDataURL(file)

  }
  

  const handleSubmit=async ()=>{
    if (!projectRef.current || !profileRef.current || !fundingRef.current || !descriptionRef.current || !positionRef.current) {
      return alert("Please fill all required fields!");
    }
    const project=projectRef.current.value
    const profile=profileRef.current.value
    const position=positionRef.current.value
    const description=descriptionRef.current.value
    const funding=fundingRef.current.value

    try {
      setLoading(true)
      const result=await axios.post("https://persiststartupathon-admin.onrender.com/upload",{
        imageUrl:imageFile
      })

      const res=await axios.post("https://persiststartupathon-admin.onrender.com/upload",{
        imageUrl:profilePicFile
      })
        const imageUrl=result.data.url
        const profilePicUrl=res.data.url
        const response=await axios.post("https://persiststartupathon-admin.onrender.com/api/admin/completers",{
          project,
          profile,
          position,
          description,
          funding,
          image:imageUrl,
          profilePicture:profilePicUrl
          
        },
        { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
      } }
      )
      setLoading(true)
        setOpen(false)
    } catch (error) {
      console.log(error.message)
      setResponseMessage(`Error: ${error.response?.data?.message || error.message}`);
      
    }

  }
      return (
       <>
    
    { open && <div>
              <div className="w-screen h-screen bg-slate-500 
            opacity-60 fixed left-0 top-0 justify-center flex">
            
              </div>
            
            <div className="w-screen h-screen  
             fixed left-0 top-0 justify-center flex ">
                <div className="flex justify-center flex-col ">
                <span className="bg-white rounded-lg shadow-lg opacity-100 p-6 w-[400px]">
      
      <div className="flex justify-end">
        <div onClick={onClose} className="cursor-pointer text-red-500 hover:text-red-700 transition">
          {crossIcon}
        </div>
      </div>
    
    
      <div className="space-y-4">
        <input
          type="text"
          ref={projectRef}
          placeholder="Project Name"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    
        <p className="font-medium text-gray-600">Project Image</p>
        <input
          type="file"
          onChange={handleImageFile}
          className="w-full border p-2 rounded bg-amber-200 cursor-pointer"
        />
    
        <div className="flex flex-col gap-3">
          <input
            type="text"
            ref={positionRef}
            placeholder="Position"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            ref={profileRef}
            placeholder="Profile"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            ref={descriptionRef}
            placeholder="Description"
            className="border border-gray-300 p-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            ref={fundingRef}
            placeholder="Funding"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
    
        <p className="font-medium text-gray-600">Profile Pic</p>
        <input
          type="file"
          onChange={handlePicFile}
          className="w-full border p-2 rounded bg-amber-200 cursor-pointer"
        />
      </div>
    
    
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition"
      >
        CREATE COMPLETERS
      </button>
      {
        loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
      }
      {responseMessage && <p className="text-center text-red-500 mt-2">{responseMessage}</p>}
    </span>    
                </div>
                </div>
                </div>
                }
    <div className="min-h-screen bg-gray-50 rounded-md p-8">
    <div className="flex justify-between m-2">
      <h1 className="text-lg font-semibold">Completers </h1>
      <div
        className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44"
        
      >
        <span>{plusIcon}</span>
        <button className="cursor-pointer" onClick={()=>setOpen(true)}>ADD COMPLETER</button>
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
            <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Delete</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            
          {
            completers.map((completer,index)=>{
              return(
                <CompletersItem
                slNo={index+1}
                key={completer._id}
                id={completer._id}
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
    {
              loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
    }
  </div>
  </>
  )
}

export default Completers
