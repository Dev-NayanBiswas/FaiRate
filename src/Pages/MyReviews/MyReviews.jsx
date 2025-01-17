import { useQuery } from "@tanstack/react-query"
import Loader from "../../Components/Loader/Loader"
import MyReviewTable from "../../Components/MyReviewTable/MyReviewTable.jsx"
import useAuth from "../../Hooks/useAuth.jsx"
import dynamicTitle from "../../Utilities/dynamicTitle.js"
import axios from "axios"
import toastAlert from "../../Utilities/toastAlert.js"


function MyReviews(){
  dynamicTitle("My Reviews")

  const {userData} = useAuth()
  const email = userData?.email;
  const {data, isError, error, isFetching, isLoading} = useQuery({
    queryKey:["MyReviews", email],
    queryFn:()=>axios.get(`/reviews?email=${email}`).then(res=>res?.data?.result),
    enabled:!!email,
    refetchInterval:500,
  })


  if(isLoading){
    return <Loader/>
  }
  if(isError){
    toastAlert("error",error.message)
  }

  return (
    <>
      <section>
        <section>
        <h1 className="font-heading text-defaultColor text-4xl font-semibold my-10">My Reviews . . .</h1>
        </section>
        <section className="grid grid-cols-1 gap-7">
          {
            data?.map((data, index)=><MyReviewTable idx={index} key={data._id} cardData={data}/>)
          }
        </section>
      </section>
    </>
  )
}

export default MyReviews