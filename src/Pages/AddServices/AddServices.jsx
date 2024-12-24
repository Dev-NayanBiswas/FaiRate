import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import formateDate from "../../Utilities/formateDate";
import useCURD from "../../Hooks/useCURD";

function AddServices() {
  const redirect = useNavigate();
  const location = useLocation();
  const {userData} = useAuth();
  const {addService} = useCURD();
  console.log(userData)
  const {handleSubmit, register, formState:{errors}, reset} = useForm()

    // serviceImage, serviceTitle,companyName,website,description,category,price
    const extraData={
      name:userData?.displayName,
      email:userData?.email,
      userPhoto:userData?.photoURL,
      reviewCount:0,
    }
      
  function handleUpsertService(data){
    const newData = {...data,...extraData}
    const finalData = {
      ...newData,
      publishedOn:formateDate()
    }

    addService(finalData)
  }

  return (
    <>
        <section>
        <form className="flex-col flex gap-5" onSubmit={handleSubmit(handleUpsertService)}>
            {/* Image */}
        <section className="md:w-8/12 w-11/12  mx-auto">
          <input 
          type="text" 
          placeholder="Service Thumbnail" 
          className="defaultInput" 
          {...register("serviceImage",{
            required:"Image Required",
            
          })}
          />
          {errors.serviceImage && <p className='text-xs text-red-500 italic mt-2 '>{errors.serviceImage.message}</p>}
        </section>


        {/* Title and Company Name */}
          <section className="flex md:flex-row flex-col md:w-8/12 w-11/12  mx-auto gap-5">
          <section className="w-full  mx-auto">
          <input 
          type="text" 
          placeholder="service Title" 
          className="defaultInput" 
          {...register("serviceTitle",{
            required:"Service Tile Required",
            
          })}
          />
          {errors.serviceTitle && <p className='text-xs text-red-500 italic mt-2 '>{errors.serviceTitle.message}</p>}
        </section>
          <section className="w-full">
          <input 
          type="text" 
          placeholder="Company Name" 
          className="defaultInput" 
          {...register("companyName",{
            required:"Company name Required",
            
          })}
          />
          {errors.companyName && <p className='text-xs text-red-500 italic mt-2 '>{errors.companyName.message}</p>}
        </section>
          </section>
          {/* website,category,price */}
          <section className="md:w-8/12 w-11/12  mx-auto grid grid-cols-2 gap-5">
          <section className="w-full col-span-2">
          <input 
          type="text" 
          placeholder="Website" 
          className="defaultInput" 
          {...register("website",{
            required:"Website Required",
            
          })}
          />
          {errors.website && <p className='text-xs text-red-500 italic mt-2 '>{errors.website.message}</p>}
        </section>
        {/* Category */}
          <section className="w-full">
          <input 
          type="text" 
          placeholder="Category" 
          className="defaultInput" 
          {...register("category",{
            required:"Category Required",
            
          })}
          />
          {errors.category && <p className='text-xs text-red-500 italic mt-2 '>{errors.category.message}</p>}
        </section>
        {/* Price */}
        <section className="w-full">
          <input 
          type="number" 
          placeholder="Price" 
          className="defaultInput" 
          {...register("price",{
            required:"Price Required",
            
          })}
          />
          {errors.price && <p className='text-xs text-red-500 italic mt-2 '>{errors.price.message}</p>}
        </section>
          </section>
          {/* Description */}
          <section className="md:w-8/12 w-11/12  mx-auto">
          <textarea 
          type="text" 
          placeholder="Enter Service Description" 
          className="defaultInput !rounded-2xl !p-4" 
          {...register("description",{
            required:"Description Required",
            
          })}
          />
          {errors.description && <p className='text-xs text-red-500 italic mt-2 '>{errors.description.message}</p>}
        </section>
        <section className="flex gap-10 md:w-8/12 w-11/12  mx-auto">
        <button type="submit" className="formBtn flex-1">Add Service</button>
        </section>
        </form>
        </section>
    </>
  )
}

export default AddServices