import axios from "axios";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const LOGOUT_USER = "LOGOUT_USER";

export const logoutClearLogin = () => ({ type: LOGOUT_USER });

export const loginUserLoading = () => ({ type: LOGIN_USER_LOADING });
export const loginUserSuccess = data => ({
    type: LOGIN_USER_SUCCESS,
    payload: data
  });
export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILED,
    payload: error
});

export function loginUser(user,history){
    return function(dispatch) {
        dispatch(loginUserLoading());
        return axios.post('http://localhost:4000/api/user/login',user)
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
        localStorage.clear()
        dispatch(logoutClearLogin());

    }
}