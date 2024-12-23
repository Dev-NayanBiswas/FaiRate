import alertHandler from "../../Utilities/alertHandler.js"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loader from "../../Components/Loader/Loader"
import MyReviewTable from "../../Components/MyReviewTable/MyReviewTable.jsx"

function MyReviews(){
  const email = "john@doe.com"
  const {data, isError, error, isFetching, isLoading} = useQuery({
    queryKey:["MyReviews", email],
    queryFn:()=>axios.get(`/serviceReviews?email=${email}`).then(res=>res.data.result),
    enabled:!!email,
    refetchInterval:500,
  })


  if(isLoading){
    return <Loader/>
  }
  if(isError){
    alertHandler(error.message)
  }

  return (
    <>
      <section>
        <section>
        <h1 className="font-heading text-defaultColor text-4xl font-semibold my-10">My Reviews . . .</h1>
        </section>
        <section className="grid grid-cols-1 gap-7">
          {
            data?.map((data, index)=><MyReviewTable key={data._id} cardData={data}/>)
          }
        </section>
      </section>
    </>
  )
}

export default MyReviews