import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logout from "../pages/Logout";

function Sidebar({ user, isOpen, toggle }) {

  
  return (
    <div className="relative">  
        <div className="fixed top-4 right-4 z-50">
               
      <div>
        <Logout />
      </div>   

      <br />

             <button onClick={toggle}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
             </button>        
        </div>


      <div
              className={`fixed top-0 right-0 h-full w-64 bg-blue-800 text-white transition-transform transform ${
                  isOpen ? 'translate-y-0' : 'translate-y-full'
              }`}
      >
        <div className="p-4">
             <h2 className="text-2xl font-semibold mb-4">Profile</h2>
             <p className="mb-4">Welcome, {user.username}</p>
             <br />  
        </div>    
      </div>
    </div>
  );
};

export default Sidebar;



