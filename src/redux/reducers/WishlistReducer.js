
import {
    GET_FAMILIES,
    GET_MEMBERS,
    } from "../actions/WishlistActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FAMILIES:
            return {
                ...state,
                families: action.payload,
            }
        case GET_MEMBERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}

const initialState = {
    users:[],
    families:[],
    gifts:[],
};