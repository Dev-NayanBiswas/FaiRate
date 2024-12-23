import { Outlet } from "react-router-dom"
import TopNavbar from "./Components/TopNavbar"
import Footer from "./Components/Footer/Footer"
function MainLayout() {
  return (
    <>
        <section className="overflow-hidden overflow-y-hidden">
            <section className="horizontalWidth">
                <TopNavbar/>
            </section>
            <section className="horizontalWidth min-h-screen">
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