import React from "react";
import { Link } from "react-router-dom";


const Landing = () =>{

    return(
        <div>

            <h1>Welcome to the Family Wishlist</h1>
            <div className = "button">
                <Link to="/login"> Login </Link>
                <Link to="/register"> Register a New User </Link>
            </div>

        </div>
    )
}

export default Landing;