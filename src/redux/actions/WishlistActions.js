import axios from 'axios';

import { axiosWithAuth } from '../../components/axiosWithAuth';

export const GET_FAMILIES = "GET_FAMILIES";

export const GET_MEMBERS = "GET_MEMBERS";

export const GET_LIST = 'GET_LIST';

export const EDIT_GIFT = 'EDIT_GIFT';

export const REMOVE_GIFT = 'REMOVE_GIFT';

export const getFamiliesSuccess = data => ({
    type: GET_FAMILIES,
    payload: data
  });

export const getMembersSuccess = data => ({
    type: GET_MEMBERS,
    payload: data
  });

export const getListSuccess = data => ({
    type: GET_LIST,
    payload: data
  });

export const editGiftSuccess = data => ({
    type: EDIT_GIFT,
    payload: data
  });

export const removeGiftSuccess = (gift_id) =>({
    type:REMOVE_GIFT,
    payload:gift_id
});


export function getFamilies(){
    return function(dispatch) {
        return axios.get('http://localhost:4000/api/user/families')
            .then(response=>{
                dispatch(getFamiliesSuccess(response.data));
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function getMembers(lastname){
    return function(dispatch) {
        return axios.get(`http://localhost:4000/api/user/families/${lastname}`)
            .then(response=>{
                dispatch(getMembersSuccess(response.data));
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function getList(id){
    return function(dispatch) {
        return axiosWithAuth().get(`http://localhost:4000/api/user/wishlist/${id}/list`)
            .then(response=>{
                dispatch(getListSuccess(response.data));
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function editGift(user_id, gift_id, gift, history){
    return function(dispatch){
        return axiosWithAuth().put(`http://localhost:4000/api/user/wishlist/${user_id}/list/${gift_id}`, gift)
            .then(data=>{
                dispatch(editGiftSuccess(gift));
                history.push(`/wishlist/${user_id}`);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function removeGift(user_id, gift_id){
    return function(dispatch){
        return axiosWithAuth().delete()
            .then(data=>{
                dispatch(removeGiftSuccess());
            })
            .catch(error=>{
                console.log(error);
            })
    }
}