import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import formateDate from "../../Utilities/formateDate";
import useCURD from "../../Hooks/useCURD";

function ReviewInputs({serviceID, prevReview, service}){
    const {addReviewCount,addReviews} = useCURD()
    const updateReview = !!prevReview;
    const {register,handleSubmit,watch,setValue, formState:{errors}, clearErrors, setError, reset} = useForm({defaultValues:{
        comment:prevReview?.comment||"",
        rating:prevReview?.rating||0
    }})

    const currentRating = watch("rating" || 0);
    const identifier = {
        name:"John Doe",
        email:"john@doe.com",
        image:"large large Image",
        postedDate:formateDate(),
    }

    function formHandler(data){
        if (!data.rating || data.rating === 0){
            setError("rating", {
                type: "manual",
                message: "Rate this Movie",
            })
            return;
        }else{
            const finalReview = {
                ...data,
                ...identifier,
                serviceID:serviceID,
                serviceTitle:service
            }

            if(serviceID){
                // console.log(serviceID)
                // console.log("Add Mode Post Call")
                // console.log(finalReview);
                addReviewCount(serviceID)
                addReviews(finalReview);
                
            }else{
                console.log("Edit Mode Patch call");
                console.log(prevReview)
            }
            reset({
                comment:"",
                rating:0
             })
        }
    }
  return (
    <>
      <section className='flex justify-center items-center mb-8 bg-transparent'>
        <form onSubmit={handleSubmit(formHandler)} className='h-80 px-7 w-[700px] rounded-[12px] p-4'>
          <p className='font-semibold cursor-pointer transition-all text-defaultColor font-heading text-4xl'>
            {updateReview? prevReview.serviceTitle : 'What you Think !'}
          </p>
          <section>
          <textarea
            className='h-40 px-3 py-1 mt-5 outline-none w-full p-4 text-lg resize-none border-b-2 bg-transparent  placeholder:text-lg'
            id="comment"
            {...register("comment",{
                required:"Please leave a comment",
                minLength:{
                    value:40,
                    message:"Please leave 40 words minimum"
                }

            })}
            placeholder='Add your comments here'>
        </textarea>
        {errors.comment && <p className='text-xs text-red-500 italic'>{errors.comment.message}</p>}
          </section>

          <section className='flex justify-between mt-2'>
            <div className='text-sm my-5'>
                <ReactStars
                count={5}
                onChange={(value) => {
                  setValue("rating", value);
                  if (value > 0) {
                    clearErrors("rating");
                  }
                }}
                value={currentRating}
                isHalf={false}
                fullIcon={<i className='fa fa-star'></i>}
                size={20}
                style={{ color: "gold", cursor: "pointer" }}
                />
                {currentRating > 0 && (
                <span className='ml-2'>{currentRating.toFixed(1)}/5</span>
              )}
              {errors.rating && (
              <p className='text-xs text-red-500 italic'>Rate this Service</p>
            )}
            </div>
            <button
              type='submit'
              className='h-12 w-[150px] bg-[#4f4c52] text-lg text-white rounded-lg transition-all cursor-pointer'>
              {updateReview ? "Update Review" : "Add Review"}
            </button>
          </section>
        </form>
      </section>
    </>
  );
}

export default ReviewInputs;
