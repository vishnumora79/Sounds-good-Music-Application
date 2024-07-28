import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      // if(password !== confirmPassword) {
      //   setError("Passwords do not match");
      //   return;
      // }


      try {
       const response = await axios.post("http://localhost:3000/api/auth/register", { username, email, password });
       if(response.status === 201) {
        navigate("/login");
       }
      }
      catch(error) {
        console.error("Signup failed", error);
        setError("Signup failed, please try again");
      }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
            Signup
          </button>
        </form>
        <div>
        <p>Already have an account? <Link to="/login" style={{color : "green"}}>Login</Link></p>
        </div>
        </div>
        </div>
    );
};

export default Signup;