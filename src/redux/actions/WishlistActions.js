import axios from 'axios';

import { axiosWithAuth } from '../../components/axiosWithAuth';

import { logoutClear } from "./LoginRegisterActions";

export const GET_FAMILIES = "GET_FAMILIES";

export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_LOADING = 'GET_LIST_LOADING';
export const CLEAR_GIFTS = 'CLEAR_GIFTS';

export const getFamiliesSuccess = data => ({
    type: GET_FAMILIES,
    payload: data
  });


export const getListSuccess = data => ({
    type: GET_LIST_SUCCESS,
    payload: data
  });

export const getListLoading = () => ({
    type: GET_LIST_LOADING
  });

export const clearGifts = () => ({
    type: CLEAR_GIFTS
});

// this function retrieves all families (members of each family organized by family) from back end
export function getFamilies(history){
    // calls back end
    return function(dispatch) {
        return axios.get('https://family-wishlist-db.herokuapp.com/api/user/families')
            .then(response=>{
                // save response to redux
                dispatch(getFamiliesSuccess(response.data));
            })
            .catch(error=>{
                // if the error code is 401: clear redux user and send them to login basically logging them out of app.
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
            })
    }
}
// this function gets the list of a user with a specific ID. 
export function getList(id, history){
    return function(dispatch) {
        // sets gifts array to empty and sets isFetching to true.
        dispatch(getListLoading());
        // sends request to back end to retrieve gifts.
        return axiosWithAuth().get(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${id}/list`)
            .then(response=>{
                // take data from response and set it to gifts array. 
                dispatch(getListSuccess(response.data));
            })
            .catch(error=>{
                // if the error code in response is 401: clear redux user and send them to login basically logging them out of app. 
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
            })
    }
}

export function editGift(user_id, gift_id, gift, family, history){
    return function(dispatch){
        return axiosWithAuth().put(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}`, gift)
            .then(data=>{
                history.push(`/wishlist/${family}/${user_id}`);
            })
            .catch(error=>{
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
                console.log(error);
            })
    }
}

export function removeGift(user_id, gift_id, family, history){
    return function(dispatch){
        return axiosWithAuth().delete(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}`)
            .then(data=>{
                history.push(`/wishlist/${family}/${user_id}`);
            })
            .catch(error=>{
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
                console.log(error);
            })
    }
}

export function confirmPurchased(user_id, gift_id, family, history){
    return function(dispatch){
        return axiosWithAuth().put(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}/purchased`)
            .then(data=>{
                history.push(`/wishlist/${family}/${user_id}`);
            })
            .catch(error=>{
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
                console.log(error);
            })
    }
}

export function addGift(user_id, gift, family, history){
    return function(dispatch){
        return axiosWithAuth().post(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list`, gift)
            .then(data=>{
                history.push(`/wishlist/${family}/${user_id}`);
            })
            .catch(error=>{
                if(error.response.status === 401){
                    dispatch(logoutClear());
                    history.push('/login');
                }
                console.log(error);
            })
    }
}