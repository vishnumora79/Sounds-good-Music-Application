import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import axios from "axios";

function MainPage() {
    // contains data about the current user
    const [user, setUser] = useState({});
    const [songs, setSongs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/auth/user", {
                    headers : { Authorization : `Bearer ${token}`}
                });
                setUser(response.data);
            }
            catch(error) {
                console.error("Error fetching user data", error);
            }
        };
        fetchUserData();
    }, []);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/songs?query=${query}`);
            setSongs(response.data);
        }
        catch(error) {
            console.error("Error searching for songs", error);
        }
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };

    return(
        <div>
            <Sidebar user={user} />
            <div className="main-content">
             <SearchBar onSearch={handleSearch}/>
             <ul>
                {songs.map((song) => (
                    <li key={song.id}>{song.name}</li>
                ))}
                </ul>   
            <h1>Main Page</h1>
            <p>In future here you people can listen to blockbuster songs - wait for a while</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
    );
};

export default MainPage;