import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaBars } from 'react-icons/fa';
import axios from "axios";
import Song from "../components/Song";
import song_audio from "../assets/data";



function MainPage() {
    // contains data about the current user
    const [user, setUser] = useState({});
    const [songs, setSongs] = useState([]);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


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

        setSongs(song_audio());
    }, []);

    return(
       <div className="min-h-screen flex flex-col">
        <Sidebar user={user} isOpen  = {isSidebarOpen} toggle = {toggle}/>
        <div className="flex-1 p-6">
            <div className="flex-grow flex justify-center items-center">
            <h1 className="text-5xl font-bold mb-4" style={{color : 'blue'}}>Welcome to sounds-good</h1>
            </div>
            <div className="relative flex-grow flex justify-center nt-2">
                <input type="text"
                       placeholder="search for super sounds.."
                       className="w-1/2 p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                       style={{ width : '50%', marginTop : '70px'}}
                />
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"> 
            {songs.map((song) => (
                <Song key={song.id} song = {song}/>
            ))}
        </div>
    </div>
</div>
    );
};

export default MainPage;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import axios from "axios";

// function MainPage() {
//     const [user, setUser] = useState({});
//     const [songs, setSongs] = useState([]);
//     const navigate = useNavigate();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem("token");
//             try {
//                 const response = await axios.get("http://localhost:3000/api/auth/user", {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 setUser(response.data);
//             } catch (error) {
//                 console.error("Error fetching user data", error);
//             }
//         };
//         fetchUserData();
//     }, []);

//     const handleLogout = (token) => {
//         localStorage.removeItem("token");
//         navigate("/login");
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Sidebar user={user} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} logout={handleLogout} />
//             <div className="flex-1 p-6">
//                 <div className="flex justify-center items-center">
//                     <h1 className="text-5xl font-bold mb-4" style={{ color: 'blue' }}>Welcome to sounds-good</h1>
//                 </div>
//                 <div className="relative flex justify-center mt-2">
//                     <input
//                         type="text"
//                         placeholder="search for super sounds.."
//                         className="w-1/2 p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         style={{ width: '50%', marginTop: '70px' }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainPage;
