import { useQuery } from "@tanstack/react-query"
import CountUp from "react-countup"
import Loader from "./Loader/Loader"
import toastAlert from "../Utilities/toastAlert"
import { useEffect, useState } from "react"
import axios from "axios"
import {motion} from "motion/react"

function CountUpContainer(){
  const[users,setUsers]=useState(0)
  const[totalReview, setTotalReview]=useState(0)
  const {isError,error, isLoading, data} = useQuery({
    queryKey:["services"],
    queryFn:()=>axios.get('/services').then(res=>res?.data)
  })


  if(isLoading){
    return <Loader/>
  }
  if(isError){
    return toastAlert("error","Error in Count Down")
  }


  async function reviewCount(){
    const countReview = await data?.map(({reviewCount})=> reviewCount && reviewCount)
    .filter(review => review !== undefined && review !== 0 );
    const reviewTotal = await countReview?.reduce((acc,value)=> acc+value,0);
    setTotalReview(reviewTotal) 
    const userCount = [...new Set(data?.map(({email})=>email))];
    setUsers(userCount?.length)
  }
  
  reviewCount()

  

  return (
    <>
        <section className="flex justify-center items-center lg:gap-20 gap-4 lg:my-44 md:my-32">
        <motion.section
        initial={{opacity:0, x:-80}}
        whileInView={{opacity:1,x:0, 
          transition:{
            duration:3,
            type:"spring"
          }}}
         className="flex justify-center flex-col items-center">
            <section
            
             className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {data?.length && <CountUp  end={data?.length} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={10}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Services</h1>
            </motion.section>
            <motion.section
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1,y:0, 
              transition:{
                duration:3,
                type:"spring"
              }}}
             className="flex justify-center flex-col items-center">
            <section className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {users && <CountUp  end={users} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={5}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Users</h1>
            </motion.section>
            <motion.section
            initial={{opacity:0, x:80}}
            whileInView={{opacity:1,x:0, 
              transition:{
                duration:3,
                type:"spring"
              }}}
             className="flex justify-center flex-col items-center">
            <section className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {totalReview && <CountUp end={totalReview} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={5}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Reviews</h1>
            </motion.section>
        </section>
    </>
  )
}

export default CountUpContainer