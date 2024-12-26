import { useQuery } from "@tanstack/react-query"
import ReviewCard from "./ReviewCard"
import ReviewInputs from "./ReviewInputs"
import Loader from "../Loader/Loader"
import useAuth from "../../Hooks/useAuth"
import useAxios from "../../Hooks/useAxios.jsx"
function ReviewContainer({id, service}){
    const {userData} = useAuth();
    const axiosInstance = useAxios()
    const {isLoading, isFetching, isError,error, data} = useQuery({
        queryKey:["serviceReviews", [id]],
        queryFn:()=>axiosInstance.get(`/serviceReviews?serviceID=${id}`).then(res=>res.data.result),
        enabled:!!id,
        refetchInterval:200
        })


    if(isLoading){
        return <Loader/>
    }

    if(isError){
        alert(error.message);
        return;
    }




  return (
    <>
    <section className="">
        <section>
            {
                userData?.email && <ReviewInputs serviceID={id} service={service}/>
            }
        </section>
        <section className=" my-8">
            <h1 className="text-4xl font-heading text-defaultColor md:text-left text-center font-semibold">All Reviews</h1>
            <div className="border-defaultColor/55 border-b-[1px]"></div>
        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10">
                {
                    data?.map((review)=><ReviewCard key={review._id} reviewData={review}/>)
                }
        </section>
        
    </section>
    </>
  )
}

export default ReviewContainer