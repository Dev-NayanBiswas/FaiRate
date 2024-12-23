import imageUploader from "../../Utilities/imageUploader"

function Rating({rating}){
  return (
    <>
        <figure className="flex gap-[2px]">
            {
                 Array(rating).fill(null).map((_,index)=> <img className="h-6 w-6 object-cover" src={imageUploader("ratingStar.svg")} key={index}/> )
            }
        </figure>
    </>
  )
}

export default Rating