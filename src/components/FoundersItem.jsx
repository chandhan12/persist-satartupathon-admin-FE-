import axios from "axios";
import React, { useContext } from "react";
import { DeleteContext } from "../Context/DeleteContext";

const FoundersItem = (props) => {
  const {deleted,setDeleted}=useContext(DeleteContext)
  const { slNo, name, profilePic, position, location, bio, highlights,id }=props


  const handleDelete=async ()=>{
try {
  
  await axios.delete(`http://localhost:3000/api/admin/delete/founder/${id}`,
    { headers: { "authorization": `barer ${localStorage.getItem("token")}`,
         
  } }
  )
  setDeleted(!deleted)

} catch (error) {
  console.log(error.message)
}

  }
  return (
    <tr className="h-25">
      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{slNo}</td>

      <td className="px-3 whitespace-nowrap">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full" src={profilePic} alt={`${name} profile`} />
          <div className="ml-2 flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900">{name}</span>
            <span className="text-sm text-wrap text-gray-600">{position}</span>
          </div>
        </div>
      </td>

      <td className="px-3 py-4 text-sm text-gray-500">{position}</td>
      <td className="px-3 py-4 text-sm text-gray-800">{location}</td>
      <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate">{bio},{highlights}</td>
      <td className="px-3 py-4 whitespace-nowrap text-center">
       
          <button onClick={handleDelete} className="text-red-500 cursor-pointer">Delete</button>
        
      </td>
    </tr>
  );
};

export default FoundersItem;
