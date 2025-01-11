import { useQuery } from "@tanstack/react-query"
import ReviewCard from "./ReviewCard"
import ReviewInputs from "./ReviewInputs"
import Loader from "../Loader/Loader"
import useAuth from "../../Hooks/useAuth"
import axios from "axios"
import toastAlert from "../../Utilities/toastAlert"

function ReviewContainer({id, service}){
    const {userData} = useAuth();

    const {isLoading, isFetching, isError,error, data} = useQuery({
        queryKey:["serviceReviews"],
        queryFn:()=>axios.get(`/serviceReviews?serviceID=${id}`).then(res=>res.data.result),
        })


    if(isLoading){
        return <Loader/>
    }

    if(isError){
        toastAlert("error",error.message);
        return;
    }




  return (
    <>
    <section className="py-4">
        <section className="">
            {
                userData?.email && <ReviewInputs serviceID={id} service={service}/>
            }
        </section>
        <section className=" lg:my-0 my-8">
            <h1 className="text-4xl font-heading text-defaultColor md:text-left text-center font-semibold">All Reviews</h1>
            <div className="border-defaultColor/55 border-b-[1px]"></div>
        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 my-8">
                {
                    data?.map((review)=><ReviewCard key={review._id} reviewData={review}/>)
                }
        </section>
        
    </section>
    </>
  )
}

export default ReviewContainer