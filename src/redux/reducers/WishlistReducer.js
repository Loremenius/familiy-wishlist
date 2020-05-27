
import {
    GET_FAMILIES,
    GET_MEMBERS,
    GET_LIST,
    } from "../actions/WishlistActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FAMILIES:
            return {
                ...state,
                families: action.payload,
            }
        case GET_LIST:
            return {
                ...state,
                gifts: action.payload,
            }
        default:
            return state;
    }
}

const initialState = {
    families:{},
    gifts:[],
};
