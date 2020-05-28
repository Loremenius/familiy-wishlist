import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { loginUser, setError } from '../redux/actions/LoginRegisterActions';
import { Link } from "react-router-dom";

const Login = ({ loginUser, history, error, setError }) =>{
    const [user, setUser] = useState({username:"", password:""});
    const onChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // set error to empty string
        setError('');
        // check to make sure all fields are filled out
        if(!!user.username && !!user.password){
                // call action to send data to back-end.
                loginUser(user, history);
        // if not all fields are filled out. change error to display it. 
        }else{
            setError('All fields are required');
        }
    }

    const displayError = () =>{
        // if the error is not an empty string: create a paragraph to disaply it.
        if(!!error) return (<p className='error'>{error}</p>)
        // if error is a empty string: create empty paragraph.
        else return (<p></p>)
    }

    useEffect(()=>{
        setError('');
    },[]);

    return (

        <div className = "login">
            <h2>Please Login</h2>
            <form className = "loginForm" onSubmit={onSubmit}>
                <label>
                    <p>Username:</p>
                    <input 
                        type="text" 
                        value = {user.username} 
                        name="username" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 
                        type="password"
                        value={user.password} 
                        name = "password" 
                        onChange={onChange}
                    />
                </label>
                <button> Login </button>
                {displayError()}
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

export default connect(mapStateToProps, { loginUser, setError })(Login);