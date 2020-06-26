import React from "react";


const Landing = ({ history }) =>{

    // This component is a basic landing page to the site. Buttons that lead to login or register.
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