import { NavLink } from "react-router-dom"
import SwitchTheme from "./SwitchTheme"
import starIcons from "../assets/star.svg"

function TopNavbar(){
  const userData = false;
  const allPaths = !userData? [
    {path:"/", name:"Home"},
    {path:"/services", name:"Services"},
    {path:"/Login", name:"Login"},
    {path:"/register", name:"Register"},
]:[
  {path:"/", name:"Home"},
  {path:"/services", name:"Services"},
  {path:"/addServices", name:"Add Services"},
  {path:"/myReviews", name:"My Reviews"},
]

  return (
    <>
      <div className="navbar">
  <div className="navbar-start relative">
    <img className="absolute -top-[11px] -z-20 left-[2px]" src={starIcons} alt="" />
    <h1 className="btn btn-ghost text-4xl font-bold font-heading text-defaultColor ml-4">FaiRate</h1>
  </div>
  <div className="navbar-end w-full">
  
    <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
      {
        allPaths.map(({path, name}, index)=>
          <li key={index} className="!text-defaultColor font-bold tracking-wide">
        <NavLink to={path}>{name}</NavLink>
      </li>
        )
      }
    </ul>
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
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
        {
        allPaths.map(({path, name}, index)=>
          <li key={index}>
        <NavLink to={path}>{name}</NavLink>
      </li>
        )
      }
      </ul>
    </div>
    <SwitchTheme/>
  </div>
</div>
    </>
  )
}

export default TopNavbar