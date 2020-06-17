import axios from "axios";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

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
        dispatch(loginUserLoading());
        return axios.post('https://family-wishlist-db.herokuapp.com/api/user/login',user)
            .then(response=>{
                dispatch(loginUserSuccess(response.data));
                sessionStorage.setItem("token",response.data.token);
                history.push('/home')
            })
            .catch(error=>{
                console.log(error);
                dispatch(loginUserFailure( error.response.data.message)); 
            })
    }
}

export function logoutUser(){
    return function(dispatch) {
        sessionStorage.clear();
        dispatch(logoutClear());

    }
}

export function registerUser(user, history){
    return function(dispatch) {
        dispatch(registerUserLoading());
        return axios.post('https://family-wishlist-db.herokuapp.com/api/user/register',user)
            .then(()=>{
                dispatch(registerUserSuccess());
                history.push('/login')
            })
            .catch(error=>{
                console.log(error);
                dispatch(registerUserFailure( error.response.data.message)); 
            })
    }
}

export function setError(error){
    return function(dispatch) {
        dispatch(setReduxError(error));
    }
}