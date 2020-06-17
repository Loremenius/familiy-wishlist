import React from "react";


const Landing = ({ history }) =>{

    return(
        <div className="landing">

            <h1>Welcome to the Family Wishlist</h1>
            <div className = "buttons">
                <button onClick={()=>history.push('/login')}> Login </button>
                <button onClick={()=>history.push('/register')}> Register </button>
            </div>

        </div>
    )
}

export default Landing;