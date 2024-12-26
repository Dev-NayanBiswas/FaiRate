import { RiGithubFill } from "react-icons/ri"
import starIcons from "../../assets/star.svg"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom";
import {motion} from "motion/react";

function Footer(){
    const allPaths =[
        {path:"/", name:"Home"},
        {path:"/services", name:"Services"},
        {path:"/Login", name:"Login"},
        {path:"/register", name:"Register"},
    ]
  return (
    <>
        <motion.footer
        initial={{
            opacity:0,
            scale:0.8,
            y:50
        }}
        whileInView={{
            opacity:1,
            scale:1,
            y:0,
            transition:{
                duration:0.5
            }
        }}
         className="bg-defaultColor/45 dark:bg-gray-900 text-inherit">
    <section className="container px-6 py-8 mx-auto">
        <section className="flex flex-col items-center text-center">
            <div className="navbar-start relative">
                <img className="absolute -top-[11px] -z-20 left-[232px] hidden" src={starIcons} alt="" />
                <h1 className="btn btn-ghost text-4xl font-bold font-heading text-defaultColor ml-4">FaiRate</h1>
                <p className="font-ubuntu">FaiRate is a trusted 15-year-old open service-sharing platform, connecting users worldwide with reliable resources and opportunities.</p>
              </div>

            <section className="flex flex-wrap justify-center mt-6 -mx-4">
                {
                    allPaths?.map(({path, name}, index)=><Link key={index} to={path} className="mx-4 text-sm text-inherit font-heading font-semibold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit"> {name} </Link>)
                }
            </section>

        </section>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <section className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved FaiRate.</p>

            <section className="flex gap-2 items-center">
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank"><FaFacebook size={30} fill="#1877F2"/></a>
        <a href="https://github.com/Dev-NayanBiswas" target="_blank"><RiGithubFill size={30} /></a>
        <a href="https://www.linkedin.com/in/nayan-biswas1996/" target="_blank"><FaLinkedinIn size={30} fill="#1877F2"/></a>
    </section>
        </section>
    </section>
</motion.footer>
    </>
  )
}

export default Footer