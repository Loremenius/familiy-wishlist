
import {
    GET_FAMILIES,
    GET_MEMBERS,
    GET_LIST,
    EDIT_GIFT,
    REMOVE_GIFT
    } from "../actions/WishlistActions";

import findGiftIndex from "./functions/findGiftIndex";

function editGift(arr, gift){
    // use findGiftIndex function to get the index of the gift
    const index = findGiftIndex(arr, gift.id);
    // update gift
    arr[index] = gift
    //return updated array
    return arr
}

function removeGift(arr, gift_id){
    // use findGiftIndex function to get the index of the gift
    const index = findGiftIndex(arr, gift_id);
    // remove gift from array
    arr.splice(index, 1);
    //return updated array
    return arr
}

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
                members: action.payload,
            }
        case GET_LIST:
            return {
                ...state,
                gifts: action.payload,
            }
        case EDIT_GIFT:
            return {
                ...state,
                gifts: editGift(state.gifts, action.payload)
            }
        case REMOVE_GIFT:
            return{
                ...state,
                gifts:removeGift(state.gifts, action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    members:[],
    families:[],
    gifts:[],
};
