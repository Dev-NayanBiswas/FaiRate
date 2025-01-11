import { NavLink } from "react-router-dom"
import SwitchTheme from "./SwitchTheme"
import starIcons from "../assets/star.svg"
import useAuth from "../Hooks/useAuth"
import Avatar from "./Avatar"

function TopNavbar(){
  const {userData} = useAuth()

  const allPaths = !userData?.email ? [
    {path:"/", name:"Home"},
    {path:"/services", name:"Services"},
    {path:"/Login", name:"Login"},
    {path:"/register", name:"Register"},
]:[
  {path:"/", name:"Home"},
  {path:"/services", name:"Services"},
  {path:"/addServices", name:"Add Services"},
  {path:"/myServices", name:"My Services"},
  {path:"/myReviews", name:"My Reviews"},
]

  return (
    <>
      <div className="navbar horizontalWidth mb-10 mx-auto border-b-2 border-defaultColor/10 min-h-20 navContainer">
  <div className="navbar-start relative">
    <img className="absolute h-[10vh] w-full -top-[11px] -z-20 left-[2px]" src={starIcons} alt="" />
    <h1 className="btn btn-ghost text-4xl font-bold font-heading text-defaultColor ml-4">FaiRate</h1>
  </div>
  <div className="navbar-end w-full">
  
    <section className="px-1 hidden lg:flex gap-5 mr-4 whitespace-nowrap">
      {
        allPaths.map(({path, name}, index)=>
          <button key={index} className="defaultNav">
        <NavLink className={({isActive})=>isActive? "active" : "inActive"} to={path}>{name}</NavLink>
      </button>
        )
      }
    </section>
    <div className="dropdown dropdown-left">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <section
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100/95 rounded-box z-[1] mt-3 w-[200px] p-2 shadow text-left">
        {
        allPaths.map(({path, name}, index)=>
          <button className="defaultNav" key={index}>
        <NavLink to={path}>{name}</NavLink>
      </button>
        )
      }
      </section>
    </div>
    <SwitchTheme/>
    {
      userData?.email ? <Avatar/> : ""
    }
  </div>
      </div>
    </>
  )
}

export default TopNavbar