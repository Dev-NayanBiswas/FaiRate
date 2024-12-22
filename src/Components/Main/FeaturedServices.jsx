import ServiceCard from "../ServiceCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function FeaturedServices(){
    const {data, isLoading, isError, isFetching, error} = useQuery(
        {
            queryKey:["featuredServices"],
            queryFn:async()=> await axios.get('/featureServices?limit=6').then(res=>res.data)
        }
    )

    if(isLoading || isFetching){
        return <h1>...Loading</h1>
    }

    if(isError){
        alert(error.message);
        return;
    }

  return (
    <>
        <section>
                <h1>
                    {data?.length}
                </h1>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {
                    data?.map((service)=><ServiceCard key={service._id} cardData={service}/>)
                }
            </section>
        </section>
    </>
  )
}

export default FeaturedServices