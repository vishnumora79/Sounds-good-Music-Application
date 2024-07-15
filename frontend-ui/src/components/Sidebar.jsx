import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ user }) {
   return (
    <div className="sidebar">
         <h3>Welcome, {user.username}</h3>
         <ul>
            <li><Link to = "/main">Home</Link></li>
            <li><Link to = "/profile">Profile</Link></li>
            <li><Link to = "/settings">Settings</Link></li>
         </ul>
    </div>
   );
};

export default Sidebar;