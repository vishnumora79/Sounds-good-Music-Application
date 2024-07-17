import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ user, handleLogout }) {
   return (
    <div className="sidebar">
        <div>
        <h3>Welcome, {user.username}</h3>
        </div>
        <nav>
        <ul>
            <li><Link to = "/main">Home</Link></li>
            <li><Link to = "/playlists">Playlists</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
         </ul>
        </nav>
    </div>
   );
};

export default Sidebar;