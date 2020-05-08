import React, { useState } from "react"
import { connect } from "react-redux";
import { loginUser } from '../redux/actions/LoginRegisterActions';

const Login = ({ loginUser, history }) =>{
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
        loginUser(user, history);
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

function mapStateToProps(state) {
    return {
      isFetching: state.loginReducer.isFetching,
      error: state.loginReducer.error
    };
  }

export default connect(mapStateToProps, { loginUser })(Login);