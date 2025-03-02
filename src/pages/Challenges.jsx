import React, { useEffect, useRef, useState } from 'react';
import { plusIcon } from '../icons';
import axios from 'axios';
import ChallengesItem from '../components/ChallengesItem';
import Input from '../components/Input';

const Challenges = () => {
  const [challenge, setChallenge] = useState([]);
  const [open, setOpen] = useState(false);
  const titleRef=useRef("")
  const imageRef=useRef("")
  const deadlineRef=useRef("")
  const fundingRef=useRef(" ") 
  const descriptionRef=useRef(" ")
  const reviewVideoRef=useRef(" ")
  const challengeVideoRef=useRef(" ")
  const statusRef=useRef(true)
   const [imageFile,setImageFile]=useState(" ")
   


  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/admin/challenges");
        setChallenge(res.data.challenges || []);
      } catch (error) {
        console.error("Error fetching challenges:", error.message);
      }
    };
    fetchChallenge();
  }, [open]);

  const openPopUp = () => setOpen(true);
  const closePopUp = () => setOpen(false);

  const today = new Date().toISOString().split("T")[0]



 const handleCreateChallenge=async ()=>{
  const title=titleRef.current.value
  const image=imageRef.current.value
  const deadline=deadlineRef.current.value
  const funding=fundingRef.current.value
  const description=descriptionRef.current.value
  const reviewVideo=reviewVideoRef.current.value
  const challengeVideo=challengeVideoRef.current.value
  const status=statusRef.current.value


  const result=await axios.post("http://localhost:3000/upload",{
    imageUrl:imageFile
  })

  const imageUrl=result.data.url
  
const response=await axios.post("http://localhost:3000/api/admin/challenges",{
  title,
  image:imageFile,
  deadline,
  funding,
  description,
  reviewVideo,
  challengeVideo,
  status
})
setOpen(false)
console.log(response)
 }

 const handleImageFile=(e)=>{
  const file=e.target.files[0]

  var reader=new FileReader()
  reader.onloadend=function (){
    setImageFile(reader.result)
    
  }
  reader.readAsDataURL(file)


}
console.log(imageFile)
  return (
    <>
     
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-300 ">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Add New Challenge</h2>
      
          <div className="space-y-3">
            <Input type="text" placeholder="Title" reference={titleRef} className="border rounded-lg p-2 w-full" />
            
            <input type="file" ref={imageRef} onChange={handleImageFile} className="w-full border rounded-lg p-2 bg-gray-100" />
      
            <textarea ref={descriptionRef} placeholder="Description" className="w-full h-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
      
            <input type="date" ref={deadlineRef} min={today} className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" />
      
            <input type="number" ref={fundingRef} placeholder="Funding" className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" />
      
            <Input type="text" placeholder="Review Video URL" reference={reviewVideoRef} className="border rounded-lg p-2 w-full" />
            
            <Input type="text" placeholder="Challenge Video URL" reference={challengeVideoRef} className="border rounded-lg p-2 w-full" />
      
            <input type="text" ref={statusRef} placeholder="Status" className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>
      
          <div className="flex justify-between mt-6">
            <button onClick={handleCreateChallenge} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">Create Challenge</button>
      
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all" onClick={closePopUp}>
              Close
            </button>
          </div>
        </div>
      </div>
      
      )}

 
      <div className="min-h-screen bg-gray-50 rounded-md p-8">
        <div className="flex justify-between m-2">
          <h1 className="text-lg font-semibold">Challenges Management</h1>
          <div
            className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44"
            onClick={openPopUp}
          >
            <span>{plusIcon}</span>
            <button className="cursor-pointer">ADD CHALLENGE</button>
          </div>
        </div>

        <div className="max-w-full mx-auto bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full table-fixed divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-800 uppercase">S.No</th>
                <th className="w-48 px-3 py-3 text-left text-xs font-medium text-gray-800 uppercase">Title</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-800 uppercase">Funding</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-800 uppercase">Deadline</th>
                <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-800 uppercase">Description</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Review Videos</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Challenge Videos</th>
                <th className="w-24 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Status</th>
                <th className="w-24 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Delete</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {challenge.map((ch, index) => (
                <ChallengesItem
                  key={ch._id} 
                  slNo={index + 1}
                  
                  image={ch.image}
                  title={ch.title}
                  funding={ch.funding}
                  deadline={ch.deadline}
                  description={ch.description}
                  reviewVideo={ch.reviewVideo}
                  challengeVideo={ch.challengeVideo}
                  status={ch.status}
                  id={ch._id}
                 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Challenges;
