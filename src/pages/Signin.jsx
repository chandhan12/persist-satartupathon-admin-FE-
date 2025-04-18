import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 

const Signin = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
 
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setLoading(true)
      const response = await axios.post("https://persiststartupathon-admin.onrender.com/api/admin/signin", { email, password });

      setMessage(response.data.msg);
    
      localStorage.setItem("token", response.data.token);
      setLoading(false)
      navigate("/dashboard")
      
      

    } catch (error) {
      setMessage(error.response?.data?.error || "Signin failed/invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Signin</h2> 

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          ref={emailRef}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          ref={passwordRef}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Sign In
        </button>

        {
          loading && <p className="text-xl text-slate-800 font-semibold text-center">Loading....</p>
        }

        {message && <p className="text-center text-red-500 mt-2">{message}</p>}

      </form>
    </div>
  );
};

export default Signin;
