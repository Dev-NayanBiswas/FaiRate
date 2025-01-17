import { useState } from "react";
import Rating from "../Review/Rating";
import ReviewInputs from "../Review/ReviewInputs";
import { IoClose } from "react-icons/io5";
import useCURD from "../../Hooks/useCURD";
import Swal from "sweetalert2";
import {motion} from "motion/react";

function MyReviewTable({ idx, cardData }){
    const {deleteReview,addReviewCount} = useCURD()
    const [isOpen, setIsOpen] = useState(false)
    const {serviceTitle,_id,rating,comment,postedDate,serviceID}=cardData||{}

    function handleDelete(id){
      Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Confirm"
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteReview(id);
                    addReviewCount(serviceID,0)
                    Swal.fire({
                      title: "Deleted!",
                      text: "Deleted Successfully",
                      icon: "success"
                    });
                  }
                })
    }


  return (
    <>
      <motion.section
      initial={{
        y:'100px',
        opacity:0,
        scale:0.5
      }}
      animate={{
        scale:1,
        y:0,
        opacity:1,
        transition:{
          delay:idx/2,
          type:"spring",
          damping:20,
          duration:0.5
        }
      }}
       className="flex flex-col md:flex-row w-full justify-between md:items-center gap-5 border-defaultColor/35 p-2 border-[1px] rounded-lg px-4 mb-10">
        <section className="md:w-3/12">
          <div className='flex-col flex'>
            <h1 className='text-lg font-medium font-default whitespace-nowrap'>
              {serviceTitle}
            </h1>
            <p className='font-light text-xs '>
              {postedDate}
            </p>
          </div>
        </section>
        <section className="my-4 md:w-4/12">
          <span className="text-sm line-clamp-2">{comment}</span>
          <span>{<Rating rating={rating}/>}</span>
        </section>
        <section className="self-end flex justify-end items-center md:w-3/12">
          <div className='flex items-center gap-x-6'>
            <button onClick={()=>handleDelete(_id)} className='text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            </button>

            <button onClick={()=>setIsOpen(true)} className='text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </button>
          </div>
        </section>
      </motion.section>
        {isOpen &&
      <section className="fixed bg-defaultColor/75 z-50 flex top-0 bottom-0 left-0 right-0 justify-center items-center w-full h-full">
             <section className="lg:w-5/12 md:w-9/12 w-11/12 relative bg-gray-300 rounded-xl">
             <button onClick={()=>setIsOpen(false)} className="h-10 cursor-pointer aspect-square rounded-full ml-6 text-white flex justify-center items-center right-1 top-1 absolute">
             <IoClose color="red" size={20}/>
             </button>
             <ReviewInputs prevReview={cardData}/>
             </section>
      </section>
        }
    </>
  );
}

export default MyReviewTable;
