import axios from "axios";
import toastAlert from "./Utilities/toastAlert.js"


axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true;


export function axiosInterceptor(fn){
    axios.interceptors.response.use((response)=>{
        // console.log(response)
        return response;
    }, (error)=>{
        toastAlert("error",error?.response?.statusText);
        if(error?.response?.status === 401 || error?.response?.status === 403){
            toastAlert('info','Need to login again');
            fn();
        }
    
        return Promise.reject(error)
    } 
    )
}

export default axios;