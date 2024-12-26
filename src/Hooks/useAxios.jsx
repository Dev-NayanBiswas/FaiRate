import axios from "axios"
import { useEffect } from "react";
import toastAlert from "../Utilities/toastAlert";


const axiosInstance = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

function useAxios(){

  useEffect(()=>{
    axiosInstance.interceptors.response.use(
      (response)=>{
        return response;
      }, error=>{
        if(error.status === 401 || error.status === 403){
          toastAlert("error", "Unauthorize Access");
          return;
        };
        return Promise.reject(error)
      }
    )
  },[])
  return axiosInstance
}

export default useAxios