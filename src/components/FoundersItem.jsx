import React from "react";

const FoundersItem = ({ slNo, name, profilePic, position, location, bio, highlights }) => {
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

      <td className="px-3 py-4 text-sm text-gray-500">{location}</td>
      <td className="px-3 py-4 text-sm text-gray-800">{bio}</td>
      <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate">{highlights}</td>
    </tr>
  );
};

export default FoundersItem;
