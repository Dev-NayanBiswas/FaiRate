import { useQuery } from "@tanstack/react-query"
import axios from "../axiosSecure.js"
import CountUp from "react-countup"
import Loader from "./Loader/Loader"
import toastAlert from "../Utilities/toastAlert"
import { useEffect, useState } from "react"

function CountUpContainer(){
  const[users,setUsers]=useState(0)
  const[totalReview, setTotalReview]=useState(0)
  const {isError,error, isLoading, data} = useQuery({
    queryKey:["CountDown"],
    queryFn:()=>axios.get('/services').then(res=>res.data)
  })


  useEffect(()=>{
    async function reviewCount(){
      const countReview = await data?.map(({reviewCount})=> reviewCount && reviewCount)
      .filter(review => review !== undefined && review !== 0 );
      const reviewTotal = await countReview?.reduce((acc,value)=> acc+value,0);
      setTotalReview(reviewTotal) 
      const userCount = [...new Set(data?.map(({email})=>email))];
      setUsers(userCount?.length)
    }
    
    reviewCount()
  },[data])

  if(isLoading){
    return <Loader/>
  }
  if(isError){
    return toastAlert("error","Error in Count Down")
  }

  

  return (
    <>
        <section className="flex justify-center items-center lg:gap-20 gap-4 my-10">
        <section className="flex justify-center flex-col items-center">
            <section className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {data?.length && <CountUp  end={data?.length} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={10}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Services</h1>
            </section>
            <section className="flex justify-center flex-col items-center">
            <section className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {users && <CountUp  end={users} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={5}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Users</h1>
            </section>
            <section className="flex justify-center flex-col items-center">
            <section className="text-5xl font-semibold font-heading p-5 rounded-lg bg-defaultColor/25 w-[120px] flex justify-center items-center">
                {totalReview && <CountUp end={totalReview} enableScrollSpy={true} scrollSpyDelay={5} scrollSpyOnce={false} duration={5}/>}
            </section>
                <h1 className="text-defaultColor font-ubuntu font-black text-2xl">Reviews</h1>
            </section>
        </section>
    </>
  )
}

export default CountUpContainer