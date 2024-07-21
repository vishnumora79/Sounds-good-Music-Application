import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaBars } from 'react-icons/fa';
import axios from "axios";

function MainPage() {
    // contains data about the current user
    const [user, setUser] = useState({});
    const [songs, setSongs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            console.log("Sending token", token);
            try {
                const response = await axios.get("http://localhost:3000/api/auth/user", {
                    headers : { Authorization : `Bearer ${token}`}
                });
                setUser(response.data);

                console.log("User data:", response.data);
            }
            catch(error) {
                console.error("Error fetching user data", error);
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };

    return(
       <div className="flex min-h-screen bg-gray-100">
        <Sidebar user={user} handleLogout={handleLogout} />
        <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Welcome, {user.username}</h1>
                <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
                      Logout
                </button>
            </div>
            <div className="mb-6">
                <input type="text"
                       placeholder="search for super sounds.."
                       className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-bold">{song.title}</h2>
                            <p className="text-gray-700">{song.artist}</p>
                        </div>
                    ))}
            </div>
        </div>
       </div>
    );
};

export default MainPage;