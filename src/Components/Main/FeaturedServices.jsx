import ServiceCard from "../ServiceCard"
import { useQuery } from "@tanstack/react-query"
import Loader from "../Loader/Loader"
import axios from "axios"
import toastAlert from "../../Utilities/toastAlert"

function FeaturedServices(){
    const {data, isLoading, isError, isFetching, error} = useQuery(
        {
            queryKey:["featuredServices"],
            queryFn:async()=> await axios.get('/services?limit=6').then(res=>res.data)
        }
    )

    if(isLoading || isFetching){
        return <Loader/>
    }

    if(isError){
        toastAlert("error",error.message);
        return;
    }

  return (
    <>
        <section>
        <h1 className="md:text-5xl text-3xl text-defaultColor font-semibold font-heading md:mb-20 mb-10 text-left">Featured Service . . .</h1>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {
                    data?.map((service, index)=><ServiceCard key={service._id} idx={index} cardData={service}/>)
                }
            </section>
        </section>
    </>
  )
}

export default FeaturedServices