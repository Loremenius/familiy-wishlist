import React, { useState } from "react"
import { connect } from "react-redux";
import { loginUser } from '../redux/actions/LoginRegisterActions';
import { Link } from "react-router-dom";

const Login = ({ loginUser, history }) =>{
    const [user, setUser] = useState({username:"", password:""});
    const onChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        loginUser(user, history);
    }

    return (

        <div className = "login">
            <h2>Please Login</h2>
            <form className = "loginForm" onSubmit={onSubmit}>
                <label>
                    <p>Username</p>
                    <input 
                        type="text" 
                        value = {user.username} 
                        name="username" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Passwword</p>
                    <input 
                        type="password"
                        value={user.password} 
                        name = "password" 
                        onChange={onChange}
                    />
                </label>
                <button> Login </button>
            </form>
            <Link to='/register'>Register new user</Link>
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