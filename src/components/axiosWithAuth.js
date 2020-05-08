import axios from "axios";

export const axiosWithAuth = () =>{
    return axios.create({
        headers: {
          Authorization: `${sessionStorage.getItem("token")}`
        }
      });
}