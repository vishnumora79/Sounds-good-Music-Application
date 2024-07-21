import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
           <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Welcome to sounds good music </h1>
            <p className="text-lg text-gray-700">Discover the best music from movies and more.</p>
           </div>

           <div className="space-x-4">
            <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
             Login
            </Link>

            <Link to="/signup" className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
              Signup
            </Link>
           </div>
        </div>
    );
}

export default Home;