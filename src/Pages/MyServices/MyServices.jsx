import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2'
import { FaPencil } from "react-icons/fa6";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useQuery} from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import toastAlert from "../../Utilities/toastAlert";
import UpdateServices from "../../Components/UpdateService";
import useCURD from "../../Hooks/useCURD";
import { Link } from "react-router-dom";
import dynamicTitle from "../../Utilities/dynamicTitle.js";
import useAxios from "../../Hooks/useAxios.jsx";


const TABLE_HEAD = [
{head:"Title"},
{head:"Description"},
{head:"Category"},
{head:"Price"},
{head:"Posted On"},
{head:"Action"},
];

export function MyServices(){
  dynamicTitle("My Services")
  const axiosInstance = useAxios();
    const [serviceData, setServiceData] = useState(null);
    const [searchData, setSearchData] = useState("");
    const [debounce, setDebounce] = useState("");
    const {userData} = useAuth();
    const {deleteMyService}= useCURD();
    const email = userData?.email;


    useEffect(()=>{
        const setTimeOutID = setTimeout(()=>{
            setDebounce(searchData);
        },3000)
        return ()=> clearTimeout(setTimeOutID)
    },[searchData])


    async function myServiceFetcher(email,search){
        const response = await axiosInstance.get("/myServices", {
            params:{email, search}
        })

        return response.data.result
    }
    const {data, isError, isLoading, error, refetch} = useQuery({
        queryKey:["MyServices", email, debounce],
        queryFn:()=>myServiceFetcher(email, debounce),
        enabled:!!email,
    })
    

    if(isLoading){
        return <Loader/>
    }

    if(isError){
        return toastAlert("error", error.message)
    }

    function handleUpdate(){
        setServiceData(null)
        setTimeout(()=>refetch(),1000)
    }

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
                deleteMyService(id)
                setTimeout(()=>refetch(),200)
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully",
                icon: "success"
              });
            }
          });
    }


  return (
    <section>
        {
          data?.length ? <Card className="h-full w-full overflow-scroll bg-inherit !text-inherit">
          <CardHeader
            floated={false}
            shadow={false}
            className="mb-2 rounded-none p-2 bg-inherit"
          >
            <div className="w-full md:w-96">
              <Input
              onChange={(e)=>setSearchData(e.target.value)}
                label="Search by Title"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </CardHeader>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, icon }) => (
                  <th key={head} className="border-b border-base-300 p-4">
                    <div className="flex items-center gap-1">
                      {icon}
                      <Typography
                        color="gray"
                        variant="small"
                        className="!font-bold"
                      >
                        {head}
                      </Typography>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map(
                (service, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
     
                  return (
                    <tr key={crypto.randomUUID()}>
                      <td className={classes}>
                        <div className="flex items-center gap-1">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold text-gray-400"
                          >
                            {service.serviceTitle}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-400"
                        >
                          {service?.description?.length > 20 ? `${service?.description.slice(0,20)}...`: service?.description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-400"
                        >
                          {service?.category}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-400"
                        >
                          {service?.price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-normal text-gray-400"
                        >
                          {service?.publishedOn}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-2">
                          <IconButton onClick={()=>handleDelete(service?._id)} variant="text" size="md" className="px-4 py-2 bg-green-200/10 rounded-full">
                            <RiDeleteBin6Fill className="h-4 w-4 text-red-400" />
                          </IconButton>
                          <IconButton onClick={()=>setServiceData(service)} variant="text" size="md" className="px-4 py-2 bg-green-200/10 rounded-full">
                            <FaPencil
                              className="h-4 w-4 text-green-700"
                            />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
            </Card> : <section className="flex h-[50vh] justify-center items-center flex-col">
              <section >
              <h1 className="font-heading md:text-5xl text-3xl font-semibold text-center">Nothing Contributed Yet</h1>
              <p className="text-defaultColor font-ubuntu text-center">Feel free to Share what any Service</p>
              </section>
              <section className="my-6">
                <Link to="/addServices" className="px-8 py-2 rounded-lg bg-defaultColor/45 text-gray-500 font-semibold tracking-wide">Add Service</Link>
              </section>

            </section>
        }
    {
        serviceData && <section className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/75 flex items-center justify-center">
        <section className="md:w-10/12 w-11/12">
        <UpdateServices onModalClose={handleUpdate} serviceData={serviceData}/>
        </section>
        </section>
    }
    </section>
  );
}

export default MyServices;
