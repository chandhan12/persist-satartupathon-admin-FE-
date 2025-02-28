import React, { useEffect, useState } from 'react';
import { plusIcon } from '../icons';
import axios from 'axios';
import ChallengesItem from '../components/ChallengesItem';

const Challenges = () => {
  const [challenge, setChallenge] = useState([]);
  const [open, setOpen] = useState(false);

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
  }, []);

  const openPopUp = () => setOpen(true);
  const closePopUp = () => setOpen(false);

  return (
    <>
     
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-200 opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg backdrop-opacity-100">
            <h2 className="text-xl font-semibold mb-4">Add New Challenge</h2>
           
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg" onClick={closePopUp}>
              Close
            </button>
          </div>
        </div>
      )}

 
      <div className="min-h-screen bg-gray-50 p-8">
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
                <th className="w-12 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No</th>
                <th className="w-48 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Funding</th>
                <th className="w-28 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                <th className="w-64 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Review Videos</th>
                <th className="w-28 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Challenge Videos</th>
                <th className="w-24 px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {challenge.map((ch, index) => (
                <ChallengesItem
                  key={ch.id} 
                  slNo={index + 1}
                  image={ch.image}
                  title={ch.title}
                  funding={ch.funding}
                  deadline={ch.deadline}
                  description={ch.description}
                  reviewVideo={ch.reviewVideo}
                  challengeVideo={ch.challengeVideo}
                  status={ch.status}
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
