import React, { useState } from "react";
import { Play, Video } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChallengesItem = (props) => {
  const { slNo, image, title, funding, deadline, description, reviewVideo, challengeVideo, status, id, } = props;
  const [visibility, setVisibility] = useState(status);
 

  const handleVisibility = async () => {
    try {
      const updatedStatus = !visibility; 
      await axios.put(`http://localhost:3000/api/admin/update/${id}`, {
        status: updatedStatus,
      });
      setVisibility(updatedStatus); 
    } catch (error) {
      console.error("Error updating visibility:", error.message);
    }
  };

  const handleDelete=async ()=>{

    await axios.delete(`http://localhost:3000/api/admin/delete/challenge/${id}`)
   
    console.log("deleted")

  }

  return (
    <tr>
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{slNo}</td>

      <td className="px-3 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={image} alt={`${title} logo`} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{title}</div>
          </div>
        </div>
      </td>

      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">₹ {funding}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{deadline}</td>
      <td className="px-3 py-4 text-sm text-gray-700 truncate">{description}</td>

      <td className="px-3 py-4 whitespace-nowrap text-center">
        <div className="inline-flex items-center justify-center bg-blue-100 rounded-full h-8 w-8">
          <a href={reviewVideo} target="_blank" rel="noopener noreferrer">
            <Play className="h-4 w-4 text-blue-600" />
          </a>
        </div>
      </td>

      <td className="px-3 py-4 whitespace-nowrap text-center">
        <div className="inline-flex items-center justify-center bg-blue-100 rounded-full h-8 w-8">
          <a href={challengeVideo} target="_blank" rel="noopener noreferrer">
            <Video className="h-4 w-4 text-blue-600" />
          </a>
        </div>
      </td>

      <td className="px-3 py-4 whitespace-nowrap text-center">
        <button
          onClick={handleVisibility}
          className={`px-3 py-1 cursor-pointer text-center w-auto inline-flex text-xs leading-5 font-semibold rounded-2xl text-white ${
            visibility ? "bg-green-800" : "bg-red-800"
          }`}
        >
          {visibility ? "Visible" : "Not Visible"}
        </button>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-center">
       
          <button onClick={handleDelete} className="text-red-500 cursor-pointer">Delete</button>
        
      </td>
    </tr>
  );
};

export default ChallengesItem;
