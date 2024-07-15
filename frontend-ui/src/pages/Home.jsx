import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the Sounds-good music app</h1>
            <p>Sorry, right now it is in the development stage - so UI won't be that good but we will make it up</p>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}

export default Home;