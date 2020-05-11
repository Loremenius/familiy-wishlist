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