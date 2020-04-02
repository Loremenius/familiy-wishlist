import React, { useState } from "react"

const Login = () =>{
    const [user, setUser] = useState({username:"", password:""});
    const onChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    }

    return (

        <div className = "login">
            <h2>Please Login</h2>
            <form className = "loginForm" onSubmit={onSubmit}>
                <input type="text" value = {user.username} name="username" onChange={onChange}/>
                <input type="password" value={user.password} name = "password" onChange={onChange}/>
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login;