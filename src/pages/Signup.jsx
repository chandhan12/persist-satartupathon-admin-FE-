import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("http://localhost:3000/api/admin/signup", {
        email,
        password,
      });

      setMessage(response.data.msg);
      alert("admin signup successfull")
      navigate("/signin"); 

    } catch (error) {
      setMessage(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Signup</h2>

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          ref={passwordRef} 
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Sign Up
        </button>

        {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        <p className="text-center mt-4 text-gray-600">
          Account already exist <Link to="/signin" className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </form>
      

    </div>
  );
};

export default Signup;
