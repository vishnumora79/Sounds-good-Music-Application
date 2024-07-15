import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
         localStorage.setItem("token", response.data.token);
         navigate("/main");
        }
        catch(error) {
            console.log("Login failed", error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
               <input type="email" placeholder="Email" required />
               <input type="password" placeholder="Password" required />
               <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};

export default Login;