
import {
    GET_FAMILIES,
    GET_LIST_SUCCESS,
    GET_LIST_LOADING,
    } from "../actions/WishlistActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FAMILIES:
            return {
                ...state,
                families: action.payload,
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                gifts: action.payload,
                isFetching:false
            }
        case GET_LIST_LOADING:
            return {
                ...state,
                gifts:[],
                isFetching:true
            }
        default:
            return state;
    }
}

const initialState = {
    families:{},
    gifts:[],
    isFetching:false
};
