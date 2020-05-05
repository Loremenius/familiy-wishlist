
import {
    LOGIN_USER_LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, 
    LOGOUT_USER
    } from "../actions/LoginRegisterActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: null,
                navState:"I am in show logout but"

            }
        case LOGOUT_USER:
            return {
                user:{
                    id: null,
                    token: "",
                    message:"",
                    LinkedAccount:false
                },
                error:null,
                isFetching:false,
                navState: ""
            }
        default:
            return state;
    }
}

const initialState = {
    user:{},
    error:null,
    isFetching:false,
};