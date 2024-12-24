import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import toastAlert from "../../Utilities/toastAlert";

function GoogleSignin(){
    const location = useLocation();
    const redirect = useNavigate()
    const {googleLogin, userData} = useAuth();
    console.log(userData)

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
        <span onClick={googleHandler} className="bg-defaultColor/45 cursor-pointer w-12 h-12 self-center flex justify-center items-center aspect-square rounded-full">G</span>
    </>
  )
}

export default GoogleSignin