import axios from 'axios';

export const GET_FAMILIES_LOADING = "GET_FAMILIES_LOADING";
export const GET_FAMILIES_SUCCESS = "GET_FAMILIES_SUCCESS";
export const GET_FAMILIES_FAILED = "GET_FAMILIES_FAILED";

export const getFamiliesLoading = () => ({ type: GET_FAMILIES_LOADING });
export const getFamiliesSuccess = data => ({
    type: GET_FAMILIES_SUCCESS,
    payload: data
  });
export const getFamiliesFailure = error => ({
    type: GET_FAMILIES_FAILED,
    payload: error
});

export function getFamilies(){
    return function(dispatch) {
        dispatch(getFamiliesLoading());
        return axios.get('http://localhost:4000/api/user/families')
            .then(response=>{
                dispatch(getFamiliesSuccess(response.data));
            })
            .catch(error=>{
                console.log(error);
                dispatch(getFamiliesFailure( error.response.data)); 
            })
    }
}