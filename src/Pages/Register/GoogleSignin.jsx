import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import toastAlert from "../../Utilities/toastAlert";
import { FcGoogle } from "react-icons/fc";

function GoogleSignin(){
    const location = useLocation();
    const redirect = useNavigate()
    const {googleLogin, userData} = useAuth();

    function googleHandler(){
        googleLogin()
        .then(()=>{
            toastAlert("success", "Successfully Logged in")
            redirect(location.state? location.state : "/")
            return
            }).catch(()=>toastAlert("error", "Error in Google Sign in"))
    }
  return (
    <>
        <span onClick={googleHandler} className="bg-defaultColor/45 cursor-pointer w-12 h-12 self-center flex justify-center items-center aspect-square rounded-full"><FcGoogle size={30}/></span>
    </>
  )
}

export default GoogleSignin