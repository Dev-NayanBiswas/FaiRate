import alertHandler from "../../Utilities/alertHandler.js"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loader from "../../Components/Loader/Loader"

function MyReviews(){
  const email = "john@doe.com"
  const {data, isError, error, isFetching, isLoading} = useQuery({
    queryKey:["MyReviews", email],
    queryFn:()=>axios.get(`/serviceReviews?email=${email}`).then(res=>res.data.result),
    enabled:!!email
  })


  if(isLoading || isFetching){
    return <Loader/>
  }
  if(isError){
    alertHandler(error.message)
  }

  console.log(data)
  return (
    <div>MyReviews {data?.length}</div>
  )
}

export default MyReviews