import axios from 'axios';

export const GET_FAMILIES = "GET_FAMILIES";

export const GET_MEMBERS = "GET_MEMBERS";

export const getFamiliesSuccess = data => ({
    type: GET_FAMILIES,
    payload: data
  });

export const getMembersSuccess = data => ({
    type: GET_MEMBERS,
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