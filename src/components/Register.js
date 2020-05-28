import React, { useState } from "react"
import { connect } from "react-redux";
import { registerUser, setError } from '../redux/actions/LoginRegisterActions';
import fixNameCasing from '../redux/reducers/functions/fixNameCasing';

const Login = ({ registerUser, history, error, setError }) =>{
    //sets authorization password to variable passed by environment. Otherwise uses string as password.
    const authorization = process.env.REACT_APP_AUTH_PASSWORD || '#vZ]PjqG)(G)KPklX';

    const [user, setUser] = useState({ username:"", password:"", firstname:'', lastname:'' });

    const [auth, setAuth] = useState('');

    const onChange = (e) =>{
        // if the name of the target is auth: change auth value
        if(e.target.name === 'auth') setAuth(e.target.value);
        // otherwise set value on user object
        else {
            setUser({
                ...user,
                [e.target.name]:e.target.value
            })
        }
    }

    const displayError = () =>{
        // if the error is not an empty string: create a paragraph to disaply it.
        if(!!error) return (<p className='error'>{error}</p>)
        // if error is a empty string: create empty paragraph.
        else return (<p></p>)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // set error to empty string
        setError('');
        // check to make sure all fields are filled out
        if(!!user.username && !!user.password &&  !!user.firstname && !!user.lastname && !!auth){
            // check to see if password passed by user is the same as the authorization password
            if(auth == authorization){
                // if password is correct. call action to send data to back-end.

                // send firstname and last name to fixNameCasing function to convert them to correct casing. (Returns object)
                const name = fixNameCasing(user.firstname, user.lastname);
                // create new object merging user and name together
                const data = { ...user, ...name }
                // call action to send data to back-end.
                registerUser(data, history);
            
            // if the password is incorrect. change error to display it.
            } else {
                setError('Authorization is incorrect');
            }

        // if not all fields are filled out. change error to display it. 
        }else{
            setError('All fields are required');
        }
    }

    return (

        <div className = "register">
            <h2>Register a new user.</h2>
            <form className = "registerForm" onSubmit={onSubmit}>
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
                <label>
                    <p>First name</p>
                    <input 
                        type="text"
                        value={user.firstname} 
                        name = "firstname" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Last name</p>
                    <input 
                        type="text"
                        value={user.lastname} 
                        name = "lastname" 
                        onChange={onChange}
                    />
                </label>
                <label>
                    <p>Authorization password</p>
                    <p>Note: This password is required to allow you to create a new user.</p>
                    <input 
                        type="password"
                        value={auth} 
                        name = "auth" 
                        onChange={onChange}
                    />
                </label>
                <button> Register new user </button>
                {displayError()}
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

export default connect(mapStateToProps, { registerUser, setError })(Login);