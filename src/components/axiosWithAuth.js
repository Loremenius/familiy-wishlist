import axios from "axios";

export const axiosWithAuth = () =>{
  // if creates axios with a header for Authorization. Auth uses token from login.
    return axios.create({
        headers: {
          Authorization: `${sessionStorage.getItem("token")}`
        }
      });
}