import ReviewCard from "./ReviewCard"
import ReviewInputs from "./ReviewInputs"

function ReviewContainer({id, service}){
    const prevReview = {
        comment:"Hello there i'm testing your Connectivity",
        rating:3
    }
  return (
    <>
    <section className="">
        <section>
            <ReviewInputs serviceID={id} service={service} prevReview={prevReview}/>
        </section>
        <section className=" my-8">
            <h1 className="text-4xl font-heading text-defaultColor md:text-left text-center font-semibold">All Reviews</h1>
            <div className="border-defaultColor/55 border-b-[1px]"></div>
        </section>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-10">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
        </section>
        
    </section>
    </>
  )
}

export default ReviewContainer