import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import Loader from "../../Components/Loader/Loader";

function SecureRoute({children}){
    const {userData, loading} = useAuth();
    const location = useLocation();
    console.log(location)

    if(userData?.email){
        return children;
    }
    if(loading){
        return <Loader/>
    }
  return <Navigate to={"/login"} state={location?.pathname}/>
}

export default SecureRoute