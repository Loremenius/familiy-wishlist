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
// function to edit a gift with specific id
// takes in id of user, id of gift, the new gift, the family the user is part of, and history object.
export function editGift(user_id, gift_id, gift, family, history){
    return function(dispatch){
        // sends request to back end to edit gift.
        return axiosWithAuth().put(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}`, gift)
            .then(data=>{
                // upon success it sends the user back to their wish list.
                history.push(`/wishlist/${family}/${user_id}`);
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
// function to remove gift with a specific id
// takes in id of user, id of gift,the family the user is part of, and history object.
export function removeGift(user_id, gift_id, family, history){
    return function(dispatch){
        //sends request to back end to delete gift.
        return axiosWithAuth().delete(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}`)
            .then(data=>{
                // sends user back to wishlist
                history.push(`/wishlist/${family}/${user_id}`);
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
// function to change a gift's purchased boolean to true.
// takes in id of user, id of gift, the family the user is part of, and history object.
export function confirmPurchased(user_id, gift_id, family, history){
    return function(dispatch){
        // sends request to back end to mark gift as purchased
        return axiosWithAuth().put(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list/${gift_id}/purchased`)
            .then(data=>{
                // sends user back to wishlist of the user
                history.push(`/wishlist/${family}/${user_id}`);
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
// function to add a gift to the user's wishlist
// takes in id of user, id of gift, the family the user is part of, and history object. 
export function addGift(user_id, gift, family, history){
    return function(dispatch){
        // sends request to add gift to database.
        return axiosWithAuth().post(`https://family-wishlist-db.herokuapp.com/api/user/wishlist/${user_id}/list`, gift)
            .then(data=>{
                // sends user back to user's wishlist.
                history.push(`/wishlist/${family}/${user_id}`);
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