import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { plusIcon } from '../icons';
import axios from 'axios';
import ChallengesItem from '../components/ChallengesItem';
import Input from '../components/Input';
import { DeleteContext } from '../Context/DeleteContext';


const Challenges = () => {
  const [challenge, setChallenge] = useState([]);
  const [open, setOpen] = useState(false);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const deadlineRef = useRef(null);
  const fundingRef = useRef(null);
  const descriptionRef = useRef(null);
  const reviewVideoRef = useRef(null);
  const challengeVideoRef = useRef(null);
  const [imageFile, setImageFile] = useState("");
  const [loading,setLoading]=useState(false)
   const {deleted,setDeleted}=useContext(DeleteContext)

  
  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        setLoading(true)
        const res = await axios.get("https://persiststartupathon-admin.onrender.com/api/admin/challenges",
          { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
         } }
        );

        setChallenge(res.data.challenges || []);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching challenges:", error.message);
      }
    };
    fetchChallenge();
  }, [open,deleted]);

  const openPopUp = () => setOpen(true);
  const closePopUp = () => setOpen(false);

  const today = new Date().toISOString().split("T")[0];

  const handleCreateChallenge = async () => {
    if (!titleRef.current || !deadlineRef.current || !fundingRef.current || !descriptionRef.current) {
      return alert("Please fill all required fields!");
    }

    const title = titleRef.current.value;
    const deadline = deadlineRef.current.value;
    const funding = fundingRef.current.value;
    const description = descriptionRef.current.value;
    const reviewVideo = reviewVideoRef.current?.value || "";
    const challengeVideo = challengeVideoRef.current?.value || "";
  

    try {
      // Upload image to server
      setLoading(true)
      const imageUploadResponse = await axios.post("https://persiststartupathon-admin.onrender.com/upload", { imageUrl: imageFile });
      const imageUrl = imageUploadResponse.data.url;

      // Create challenge
      await axios.post(
        "https://persiststartupathon-admin.onrender.com/api/admin/challenges",
        { title, image: imageUrl, deadline, funding, description, reviewVideo, challengeVideo, status:true },
        { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
         } }
      );
      setLoading(false)
      setOpen(false);
    } catch (error) {
      console.error("Error creating challenge:", error.message);
      alert("Failed to create challenge. Try again.");
    }
  };

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Add New Challenge</h2>
            <div className="space-y-3">
              <Input type="text" placeholder="Title" reference={titleRef} className="border rounded-lg p-2 w-full" />
              <input type="file" ref={imageRef} onChange={handleImageFile} className="w-full border rounded-lg p-2 bg-amber-200" />
              <textarea ref={descriptionRef} placeholder="Description" className="w-full h-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
              <input type="date" ref={deadlineRef} min={today} className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              <input type="number" ref={fundingRef} placeholder="Funding" className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" />
              <Input type="text" placeholder="Review Video URL" reference={reviewVideoRef} className="border rounded-lg p-2 w-full" />
              <Input type="text" placeholder="Challenge Video URL" reference={challengeVideoRef} className="border rounded-lg p-2 w-full" />
              {/* <input type="text" ref={statusRef} placeholder="Status (true/false)" className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none" /> */}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={handleCreateChallenge} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">Create</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all" onClick={closePopUp}>Close</button>
              
            </div>
            {
                loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
              }
          </div>
        </div>
      )}

      
      <div className="min-h-screen bg-gray-50 rounded-md p-8">
        <div className="flex justify-between m-2">
          <h1 className="text-lg font-semibold">Challenges Management</h1>
          <div className="m-2 text-white bg-blue-500 flex gap-1 justify-center items-center cursor-pointer rounded-lg p-2 w-44" onClick={openPopUp}>
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
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Review Video</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Challenge Video</th>
                <th className="w-24 px-3 py-3 text-center text-xs font-medium text-gray-800 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {challenge.map((ch, index) => (
              
                <ChallengesItem key={ch._id} slNo={index + 1} image={ch.image} 
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
        {
          loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
        }
      </div>
      
    </>
  );
};

export default Challenges;
