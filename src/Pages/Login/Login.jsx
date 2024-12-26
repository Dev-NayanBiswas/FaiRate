import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth"
import { useForm } from "react-hook-form";
import { useState } from "react";
import GoogleSignin from "../Register/GoogleSignin";
import toastAlert from "../../Utilities/toastAlert";
import dynamicTitle from "../../Utilities/dynamicTitle";


function Login(){
  dynamicTitle("Login")
  const [showPass, setShowPass] = useState(false);
  const redirect = useNavigate();
  const location = useLocation();
  const {signingWithEmail} = useAuth();
  const {handleSubmit, register, formState:{errors}, reset} = useForm()


  function handleRegister(data){
    signingWithEmail(data.email,data.password)
    .then(()=>{
      redirect(location?.state ? location.state : "/")
      toastAlert("success", "Successfully Logged in")})
    .catch(()=>toastAlert('error',"Invalid Email or Password"))
    reset({
      email:"",
      password:""
    })
  }
  return (
    <>
      <section className="my-36">
        <h1 className="md:w-8/12 w-11/12  mx-auto my-10 text-defaultColor text-4xl font-semibold font-heading text-left">Login</h1>
        <form className="flex-col flex gap-5" onSubmit={handleSubmit(handleRegister)}>
        <div className="md:w-8/12 w-11/12  mx-auto">
          <input id="email" 
          name="email" 
          type="email" 
          placeholder="Your Email" 
          className="defaultInput" 
          {...register("email",{
            required:"email Required",
            pattern:{
              value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:"Invalid email format"
            }
          })}
          />
          {errors.email && <p className='text-xs text-red-500 italic mt-2 '>{errors.email.message}</p>}
        </div>
        <div className="md:w-8/12 w-11/12  mx-auto relative">
          <input id="password" 
          name="password" 
          type={showPass ? "text":"password"} 
          placeholder="Enter your Password" 
          className="defaultInput" 
          {...register("password",{
            required:"Password Required",
            pattern:{
              value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
              message:"At least one lowercase, one uppercase, one Special character required"
            },
            minLength:{
              value:6,
              message:"Minimum 6 characters required"
            }
          })}
          />
          <span onClick={()=>setShowPass(!showPass)} className="absolute text-inherit text-lg right-4 top-2 cursor-pointer">
            {
              showPass? <FaEye/>: <FaEyeSlash/>
            }
          </span>
          {errors.password && <p className='text-xs text-red-500 italic mt-2 '>{errors.password.message}</p>}
        </div>
        <Link to="/register" className="block textarea-sm tracking-wide md:w-8/12 w-11/12  mx-auto">Create an Account! <span className="text-xl text-defaultColor font-semibold">Register</span></Link>
        <section className="flex gap-10 md:w-8/12 w-11/12  mx-auto">
        <button type="submit" className="formBtn flex-1">Submit</button>
        <GoogleSignin/>
        </section>
        </form>
      </section>
    </>
  )
}

export default Login