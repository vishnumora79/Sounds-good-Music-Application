import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
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
        <div style={{display : 'flex'}}>
            <Sidebar user={user} handleLogout={handleLogout}/>
            <div className="main-content" style={{flex : 1}}>
                <h1>Main page</h1>
                <p>Soon - everything is going to change</p>
            </div>
           
        </div>
    );
};

export default MainPage;