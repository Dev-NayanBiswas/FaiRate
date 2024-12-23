import axios from "axios";
import { CURDContext } from "../Context/AllContext"

function CURDProvider({children}){

    //! Add & Update ReviewCount 
    async function addReviewCount(id){
        try{
            const response = await axios.patch(`/services/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message =response.data.message;
                alert(message)
            }else{
                throw new Error("Error in Data Updating")
            }
        }catch(error){
            console.log(error.message)
        }
    }

    const CURDObject={
        addReviewCount,
    }
  return (
    <CURDContext.Provider value={CURDObject}>
        {children}
    </CURDContext.Provider>
  )
}

export default CURDProvider