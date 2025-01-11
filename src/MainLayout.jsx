import { Outlet, useLocation } from "react-router-dom"
import TopNavbar from "./Components/TopNavbar"
import Footer from "./Components/Footer/Footer"
function MainLayout(){


  return (
    <>

        <section className="overflow-hidden overflow-y-hidden">
            <section className="fixed top-0 z-50 left-0 right-0">
                <TopNavbar/>
            </section>
            <section className="h-[10vh] mb-10"/>

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