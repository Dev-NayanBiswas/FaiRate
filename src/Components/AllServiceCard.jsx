import { Link } from "react-router-dom"
import {motion} from "motion/react"

function AllServiceCard({idx, cardData}){
  const {
    _id,
    website,
    serviceTitle,
    serviceImage,
    price,
    description,
    companyName,
    category,
    reviewCount
  } = cardData || {};
  return (
<motion.div
  initial={{
    y:'50px',
    opacity:0
  }}
  animate={{
    y:0,
    opacity:1,
    transition:{
      delay:idx/10,
      type:"spring",
      damping:20,
      duration:0.5
    }
  }}
 className="relative flex my-6 flex-col rounded-xl bg-defaultColor/15 !text-inherit bg-clip-border text-gray-700 shadow-md">
      <motion.div whileHover={{y:-20,transition:{duration:0.5, type:"spring"}}} className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-defaultColor/45 to-defaultColor/85">
      <motion.img whileHover={{scale:1.1}} className="object-cover h-full w-full" src={serviceImage} alt="" />
      </motion.div>
      <section className="flex flex-col">
      <div className="p-6">
        <h5 className="mb-2 block text-2xl font-heading leading-snug tracking-normal text-defaultColor antialiased whitespace-nowrap">
          {serviceTitle}
        </h5>
        <p className="block font-sans text-base font-light leading-4 text-inherit antialiased">
          {description} 
        </p>
      </div>
      <div className="px-6 self-start">
        <p>Category : <span>{category}</span></p>
        <p>Price $ <span>{price}</span></p>
      </div>
      </section>
      <div className="p-6 pt-3 flex-1 flex flex-col items-start justify-end h-80">
        <Link to="/details" state={cardData} data-ripple-light="true" type="button" className="select-none rounded-lg bg-defaultColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Read More
        </Link>
      </div>
    </motion.div>

  )
}

export default AllServiceCard