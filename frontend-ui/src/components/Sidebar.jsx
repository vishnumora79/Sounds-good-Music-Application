import React from "react";
// import { FaTimes } from 'reacr-icons/fa';
import { Link } from "react-router-dom";

function Sidebar({ user, handleLogout }) {
   return (
    <div className="w-64 bg-white p-6 shadow-md h-screen">
        <div className="mb-6">
            <h2 className="text-xl font-bold">{user.username}</h2>
            <Link to="/playlists" className="block text-blue-600 mt-4">Playlists</Link>    
        </div>

        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">
          Logout
        </button>
    </div>
   );
};

export default Sidebar;