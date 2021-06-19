import axios from "axios";
import CreateBaseURL from "../DatabaseURL";

// declares redux actions for logging in user
export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

// declared reduc actions for registering a new user
export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const SET_ERROR = '';

export const LOGOUT_USER = "LOGOUT_USER";

export const logoutClear = () => ({ type: LOGOUT_USER });

export const loginUserLoading = () => ({ type: LOGIN_USER_LOADING });
export const loginUserSuccess = data => ({
    type: LOGIN_USER_SUCCESS,
    payload: data
  });
export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILED,
    payload: error
});

export const registerUserLoading = () => ({ type: REGISTER_USER_LOADING });
export const registerUserSuccess = () => ({ type: REGISTER_USER_SUCCESS });
export const registerUserFailure = error => ({
    type: REGISTER_USER_FAILED,
    payload: error
});

export const setReduxError = error => ({
    type: SET_ERROR,
    payload: error
});

export function loginUser(user,history){
    return function(dispatch) {
        // sets state isFetching to true.
        dispatch(loginUserLoading());
        // sends user object to back end and will recieve a response. 
        return axios.post(`${CreateBaseURL()}/api/user/login`,user)
            .then(response=>{
                // sends data from response to redux to save data
                dispatch(loginUserSuccess(response.data));
                // adds token to session storage
                sessionStorage.setItem("token",response.data.token);
                // sends user to the home page.
                history.push('/home')
            })
            .catch(error=>{
                // adds error to redux
                dispatch(loginUserFailure( error.response.data.message)); 
            })
    }
}

export function logoutUser(){
    return function(dispatch) {
        // clears user's session storage.
        sessionStorage.clear();
        // clears the user's website redux storage.
        dispatch(logoutClear());

    }
}

export function registerUser(user, history){
    return function(dispatch) {
        // sets redux storage isFetching to true
        dispatch(registerUserLoading());
        // calls back end and attempts to create a new user.
        return axios.post(`${CreateBaseURL()}/api/user/register`,user)
            .then(()=>{
                // sets redux storage isFetching to false.
                dispatch(registerUserSuccess());
                // sends user to login page.
                history.push('/login')
            })
            .catch(error=>{
                dispatch(registerUserFailure( error.response.data.message)); 
            })
    }
}
// function that updates the error variable in redux.
export function setError(error){
    return function(dispatch) {
        // sends new error message to redux for updating.
        dispatch(setReduxError(error));
    }
}