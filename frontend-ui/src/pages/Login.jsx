import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
         if(response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/main");
         }
        }
        catch(error) {
            console.error("Login failed", error);
            setError("Invalid email or password");
        }
    };

    return (
       <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="text" 
                           className="w-full p-2 border border-gray-300 rounded-md"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Password</label>
                    <input type="text" 
                           className="w-full p-2 border border-gray-300 rounded-md"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
       </div>
    );
};

export default Login;