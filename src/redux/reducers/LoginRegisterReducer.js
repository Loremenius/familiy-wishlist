
import {
    LOGIN_USER_LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, 
    LOGOUT_USER,
    REGISTER_USER_LOADING,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    SET_ERROR
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
                user: action.payload.user,
                isFetching: false,
                error: null,
                showNavbar:true,

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
        case REGISTER_USER_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case REGISTER_USER_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,

            }
        case SET_ERROR:
             return {
                ...state,
                error: action.payload
                }
        default:
            return state;
    }
}

const initialState = {
    user:{},
    error:null,
    isFetching:false,
    showNavbar: false
};