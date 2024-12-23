import { Navigate, useLocation } from "react-router-dom";
import ReviewContainer from "../../Components/Review/ReviewContainer";

function ServiceDetails() {
  const location = useLocation();
  if (!location.state) {
    return <Navigate to='/' />;
  }
  const {
    _id,
    website,
    serviceTitle,
    serviceImage,
    price,
    description,
    companyName,
    category,
  } = location.state;

  return (
    <section>
      <section className=''>
      <section className='group flex flex-col justify-start items-start gap-2 md:w-11/12 w-full h-[50vh] duration-500 relative rounded-lg p-4 bg-defaultColor/15 hover:-translate-y-2 hover:shadow-xl shadow-gray-800'>
        <section
          alt='image here'
          className='absolute duration-700 shadow-md md:group-hover:-translate-y-4 md:group-hover:-translate-x-4 md:-bottom-10 -bottom-10 md:-right-10 translate-x-4 translate-y-14 md:w-1/2 w-10/12 h-3/5 rounded-lg bg-defaultColor/15 p-2'>
          <img
            className='object-cover w-full h-full rounded-lg bg-defaultColor'
            src=''
            alt=''
          />
          <section className='absolute duration-700 group-hover:-translate-y-4 bottom-10 md:left-5 translate-x-1/2'>
            <span className='my-5 px-5'>4 Reviews</span>
            <span className='my-5 px-5'>Rating</span>
          </section>
        </section>

        <section className='p-4 bg-[#20161f]/75 w-full h-full rounded-lg text-white'>
          <h2 className='md:text-4xl text-2xl font-bold mb-2 text-gray-200 font-heading'>
            {serviceTitle}
          </h2>
          <p className='text-gray-200 line-clamp-3'>{description}</p>
          <section className="mb-5 mt-3 text-gray-200">
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Company :</span>  {companyName}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Website :</span>  {website}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Category :</span>  {category}</p>
          <p><span className="text-yellow-300 tracking-wide font-semibold ">Starts From :</span>  $ {price} / month</p>
          </section>
          <section className="md:block hidden">
            <Avatar/>
          </section>
        </section>
      </section>


      <section className="md:hidden block">
      <Avatar/>
      </section>
    </section>
    <section>
    <section className="my-[40vh]">
          <ReviewContainer id={_id} service={serviceTitle}/>
    </section>
    </section>
    </section>
  );
}

export default ServiceDetails;


function Avatar (){
    return <div className="flex md:justify-start gap-4 items-center md:my-5 my-28 bg-transparent">
    <div className='avatar'>
      <div className='w-16 rounded-full ring-4
       ring-offset-4 ring-defaultColor'>
        <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
      </div>
    </div>
    <article className="text-base-300">
      <h1>Author :</h1>
      <p>Posted On :</p>
      <p>Updated On :</p>
    </article>
    </div>
}

