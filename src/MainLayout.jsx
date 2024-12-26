import { Outlet } from "react-router-dom"
import TopNavbar from "./Components/TopNavbar"
import Footer from "./Components/Footer/Footer"
import { useEffect } from "react"
import { axiosInterceptor } from "./axiosSecure"
import useAuth from "./Hooks/useAuth"
function MainLayout(){
  const {signOutUser} = useAuth()
  useEffect(()=>{
    axiosInterceptor(signOutUser)
  },[])
  return (
    <>
        <section className="overflow-hidden overflow-y-hidden">
            <section className="horizontalWidth">
                <TopNavbar/>
            </section>
            <section className="horizontalWidth min-h-screen z-40">
                <Outlet/>
            </section>
            <section>
              <Footer/>
            </section>
        </section>
    </>
  )
}

export default MainLayout