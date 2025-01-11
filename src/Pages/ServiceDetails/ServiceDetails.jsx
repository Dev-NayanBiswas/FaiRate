import { Navigate, useLocation } from "react-router-dom";
import ReviewContainer from "../../Components/Review/ReviewContainer";
import {motion} from 'motion/react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";

function ServiceDetails() {
  const location = useLocation();
  if (!location.state) {
    return <Navigate to='/' />;
  }
  const id = location.state;

  const {data, isLoading, isError, error} = useQuery({
    queryKey:["services", id],
    queryFn:()=>axios.get(`/services/${id}`).then(res=>res.data)
  })

  if(isLoading ){
    return <Loader/>
  }

  if(isError){
    return <p className="text-4xl h-screen w-full flex justify-center items-center font-semibold font-heading text-red-500">{error.message}</p>
  }

  const {
    _id,
    name,
    publishedOn,
    updatedOn,
    userPhoto,
    website,
    serviceTitle,
    serviceImage,
    price,
    description,
    companyName,
    category,
    reviewCount
  } = data || {};

  return (
    <section className="mt-10">

      <Helmet>
      <title>{serviceTitle}</title>
      </Helmet>
      <h1 className="text-left md:text-5xl text-3xl text-defaultColor font-semibold font-heading mb-20">Service Details . . .</h1>
      <section className="">
      <section 
      style={{
        background:`url(${serviceImage})`, 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        }} className='group flex flex-col justify-start items-start gap-2 md:w-11/12 w-full h-[50vh] duration-500 relative rounded-lg lg:p-4 p-2 bg-defaultColor/15 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 horizontalWidth'>
        <motion.section
        initial={{
          opacity:0,
          scale:0.5,
          y:10
        }}
        animate={{
          opacity:1,
          scale:1,
          y:0,
          transition:{
            duration:0.2,
            type:"spring",
            bounce:5
          }
        }}
          alt='image here'


          className='absolute 
          duration-700 
          shadow-md 
          md:group-hover:-translate-y-4 
          md:group-hover:-translate-x-4 

          translate-x-1/2 
          translate-y-14


          lg:top-[150px] 
          lg:left-[800px] 

          md:top-[208px] 
          md:left-[360px] 

          top-[260px] 
          left-[28px]
          

          lg:w-[725px]
          lg:h-[455px] 
          md:w-[325px]
          md:h-[220px] 
          w-[297px]
          h-[200px]
          

          rounded-lg 
          bg-defaultColor/15 
          lg:p-4 p-2 '>
          
          
          <img
            className='object-cover w-full h-full rounded-lg bg-defaultColor'
            src={serviceImage}
            alt=''
          />
          <section className='absolute rounded-lg group-hover:bg-defaultColor/65 bg-gray-400/80 py-1 px-5 duration-700 group-hover:-translate-y-4 bottom-10 md:left-5 translate-x-1/2 transition-all'>
            <span className='my-5 px-2 text-2xl  text-defaultColor group-hover:text-white font-semibold font-heading transition-all duration-500'>{reviewCount?reviewCount : 0} Reviews</span>
          </section>
        </motion.section>

        <section className='p-4 bg-[#20161f]/75 w-full h-full flex flex-col lg:justify-evenly justify-start rounded-lg text-white'>
          <h2 className='md:text-4xl text-2xl font-bold mb-2 text-gray-200 font-heading'>
            {serviceTitle}
          </h2>
          <p className='text-gray-200 lg:w-5/12 w-full lg:line-clamp-5 line-clamp-3 md:flex-1'>{description}</p>
          <section className="mb-5 mt-3 text-gray-200">
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Company :</span>  {companyName}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Website :</span>  {website}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Category :</span>  {category}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Starts From :</span>  $ {price} / month</p>
          </section>
          <section className="md:block hidden">
            <Avatar data={data}/>
          </section>
        </section>
      </section>


      <section className="md:hidden block mt-[12vh]">
      <Avatar data={data}/>
      </section>
    </section>
    <section>
    <section className="lg:my-[15vh] md:my-[10vh] my-[5vh]">
          <ReviewContainer id={_id} service={serviceTitle}/>
    </section>
    </section>
    </section>
  );
}

export default ServiceDetails;


function Avatar ({data}){
  const {name,userPhoto,updatedOn,publishedOn} = data || {}


    return <div className="flex md:justify-start gap-4 items-center md:my-5 my-30 bg-transparent">
    <div className='avatar'>
      <div className='w-16 rounded-full ring-4
       ring-offset-4 ring-defaultColor'>
        {
          userPhoto?<img src={userPhoto} />:""
        }
      </div>
    </div>
    <article className="!font-light text-sm text-inherit">
      {
        name?<h1>Author : {name}</h1>:""
      }
      {
        publishedOn ? <p>Posted On : {publishedOn}</p> : ""
      }
      {
        updatedOn ? <p>Updated On : {updatedOn}</p> : ""
      }
    </article>
    </div>
}

