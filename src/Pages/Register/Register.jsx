import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth"
import { useForm } from "react-hook-form";
import { useState } from "react";
import GoogleSignin from "./GoogleSignin";
import toastAlert from "../../Utilities/toastAlert";

function Register(){
  const [showPass, setShowPass] = useState(false);
  const {registrationWithEmail,updateUserProfile} = useAuth();
  const {handleSubmit, register, formState:{errors}, reset} = useForm()


  function handleRegister(data){
    registrationWithEmail(data.email,data.password)
    .then(()=>{
      updateUserProfile(data.name, data.image)
      .then(()=>toastAlert('success','Successfully Registered'))
      .catch(()=>toastAlert("error", "Error in Registration"))
    }).catch(()=>toastAlert("error", "Error in Registration"))
    reset({
      name:"",
      image:"",
      email:"",
      password:""
    })
  }
  return (
    <>
      <section className="my-36">
        <h1 className="md:w-8/12 w-11/12  mx-auto my-10 text-defaultColor text-4xl font-semibold font-heading text-left">Register</h1>
        <form className="flex-col flex gap-5" onSubmit={handleSubmit(handleRegister)}>
        <div className="md:w-8/12 w-11/12  mx-auto">
          <input id="name" 
          name="name" 
          type="text" 
          placeholder="Your Name Here" 
          className="defaultInput" 
          {...register("name",{required:"Name Required"})}
          />
          {errors.name && <p className='text-xs text-red-500 italic mt-2 '>{errors.name.message}</p>}
        </div>
        <div className="md:w-8/12 w-11/12  mx-auto">
          <input id="image" 
          name="image" 
          type="text" 
          placeholder="Photo URL" 
          className="defaultInput" 
          {...register("image",{
            required:"Photo URL Required",
            pattern:{
              value: /^https:\/\//,
              message:"Invalid image URL, try an Image Link"
            }
          })}
          />
          {errors.image && <p className='text-xs text-red-500 italic mt-2 '>{errors.image.message}</p>}
        </div>
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
        <Link to="/login" className="block textarea-sm tracking-wide md:w-8/12 w-11/12  mx-auto">Already have an account! <span className="text-xl text-defaultColor font-semibold">Login</span></Link>
        <section className="flex gap-10 md:w-8/12 w-11/12  mx-auto">
        <button type="submit" className="formBtn flex-1">Submit</button>
        <GoogleSignin/>
        </section>
        </form>
      </section>
    </>
  )
}

export default Register