import AllServiceCard from "../../Components/AllServiceCard"
import Loader from "../../Components/Loader/Loader"
import toastAlert from "../../Utilities/toastAlert"
import { useEffect, useState } from "react"
import dynamicTitle from "../../Utilities/dynamicTitle.js"
import axios from "axios"

function Services(){
  dynamicTitle("All Services")
  const [data, setData] = useState([]);
  const [cardCount, setCardCount] = useState(8)
  const [isLoading, setISLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("lowToHigh");
  const [searchData, setSearchData] = useState(null)

  useEffect(()=>{
    async function fetchServices(){
      try{
        const response = await axios.get(`/services${searchData? `?search=${searchData}`:""}`);
        const result = await response?.data;
        setData(result)
        setISLoading(false)
      }catch(error){
        toastAlert("error", error.message)
      }
    }
    fetchServices();
  },[searchData])
 
    useEffect(()=>{
      if(selectedValue === "lowToHigh"){
        const sortedData = [...data]?.toSorted((a,b)=> a.price - b.price);
        setData(sortedData)
      }else if(selectedValue === "highToLow"){
        const sortedData = [...data]?.toSorted((a,b)=>b.price - a.price);
        setData(sortedData)
      }
    },[selectedValue])





  if(isLoading){
    return <Loader/>
  }


  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };



  return (
      <section className="">
        <h1 className="text-center md:text-5xl text-3xl text-defaultColor font-semibold font-heading my-6">All Service . . .</h1>
        <section>
        <section className="flex md:flex-row flex-col-reverse justify-between items-center my-10">
        <section className="flex flex-col py-4">
        <p className="text-lg font-semibold font-heading text-defaultColor">Filter By Price</p>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="block w-56 px-4 py-2 bg-transparent text-inherit border-b-[2px] border-defaultColor shadow-sm focus:outline-none text-gray-700/45 font-semibold"
      >
        <option className="bg-defaultColor/45 font-semibold py-3" value="lowToHigh">Low to High</option>
        <option className="bg-defaultColor/45 font-semibold py-3" value="highToLow">High to Low</option>
      </select>
        </section>
        <section>
        <section className="p-5 overflow-hidden w-[50px] h-[48px] hover:w-[270px] bg-defaultColor shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
      <div className="flex items-center justify-center fill-white animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={17} height={17}>
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </div>
      <input onChange={(e)=>setSearchData(e.target.value)} placeholder="search by Title" type="text" className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4" />
        </section>
        </section>
        </section>
        </section>
        <section className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
              {
                data && data?.slice(0,cardCount).map((cardData, index)=><AllServiceCard idx={index} key={cardData._id} cardData={cardData}/>)
              }
        </section>
        <section className="flex justify-center items-center my-10">
          {cardCount > 8 ? <button onClick={()=>setCardCount(pre=>pre-4)} className="text-lg px-8 py-2 rounded-s-full bg-defaultColor text-gray-200 font-heading font-semibold tracking-wide">Prev</button>:""}
          <div className="flex-1"/>
          {cardCount <data?.length ? <button onClick={()=>setCardCount(pre=>pre + 4)} className="text-lg px-8 py-2 rounded-e-full bg-defaultColor text-gray-200 font-heading font-semibold tracking-wide">Next</button>:""}
        </section>
      </section>
  )
}

export default Services