import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }


      try {
       const response = await axios.post("http://localhost:3000/api/auth/register", { username, email, password });
       if(response.status === 201) {
        navigate("/login");
       }
      }
      catch(error) {
        console.error("Signup failed", error);
        setError("Signup failed, please try again");
      }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       placeholder="Username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       required
                />
                <input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
                <input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <input type="password"
                       placeholder="confirm password"
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       required
                />

                {error && <p style={{color : "red"}}>{error}</p>}
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Signup;