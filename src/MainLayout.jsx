import { Outlet } from "react-router-dom"
import TopNavbar from "./Components/TopNavbar"
function MainLayout() {
  return (
    <>
        <section>
            <section>
                <TopNavbar/>
            </section>
            <section>
                <Outlet/>
            </section>
        </section>
    </>
  )
}

export default MainLayout