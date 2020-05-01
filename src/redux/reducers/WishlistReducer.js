
import {
    GET_FAMILIES_LOADING,
    GET_FAMILIES_SUCCESS,
    GET_FAMILIES_FAILED, 
    } from "../actions/WishlistActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FAMILIES_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_FAMILIES_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_FAMILIES_SUCCESS:
            return {
                ...state,
                families: action.payload,
                isFetching: false,
                error: null,

            }
        default:
            return state;
    }
}

const initialState = {
    users:[],
    families:[],
    gifts:[],
    error:null,
    isFetching:false,
};