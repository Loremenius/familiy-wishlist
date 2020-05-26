import axios from 'axios';

import { axiosWithAuth } from '../../components/axiosWithAuth';

export const GET_FAMILIES = "GET_FAMILIES";

export const GET_MEMBERS = "GET_MEMBERS";

export const GET_LIST = 'GET_LIST';

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
                history.push(`/wishlist/${user_id}`);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function removeGift(user_id, gift_id, history){
    return function(dispatch){
        return axiosWithAuth().delete(`http://localhost:4000/api/user/wishlist/${user_id}/list/${gift_id}`)
            .then(data=>{
                history.push(`/wishlist/${user_id}`);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function confirmPurchased(user_id, gift_id, history){
    return function(dispatch){
        return axiosWithAuth().put(`http://localhost:4000/api/user/wishlist/${user_id}/list/${gift_id}/purchased`)
            .then(data=>{
                history.push(`/wishlist/${user_id}`);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}

export function addGift(user_id, gift, history){
    return function(dispatch){
        return axiosWithAuth().post(`http://localhost:4000/api/user/wishlist/${user_id}/list`, gift)
            .then(data=>{
                history.push(`/wishlist/${user_id}`);
            })
            .catch(error=>{
                console.log(error);
            })
    }
}