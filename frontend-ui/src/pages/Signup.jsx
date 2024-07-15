import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
       await axios.post("http://localhost:3000/api/auth/register", { username, email, password });
       navigate("/login");
      }
      catch(error) {
        console.error("Signup failed", error);
      }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Signup;