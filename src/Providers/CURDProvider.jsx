import axios from "axios";
import { CURDContext } from "../Context/AllContext"
import alertHandler from "../Utilities/alertHandler";

function CURDProvider({children}){

    //! Add & Update ReviewCount 
    async function addReviewCount(id){
        try{
            const response = await axios.patch(`/services/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message =response.data.message;
                alertHandler(message)
            }else{
                throw new Error("Error in Data Updating")
            }
        }catch(error){
            alertHandler(error.message)
        }
    }

    async function addReviews(data){
        try{
            const response = await axios.post("/allReviews", data);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                alertHandler(message)
            }else{
                throw new Error("Error in Adding Reviews")
            }
        }catch(error){
            alertHandler(error.message)
        }
    }

    const CURDObject={
        addReviews,
        addReviewCount,
    }
  return (
    <CURDContext.Provider value={CURDObject}>
        {children}
    </CURDContext.Provider>
  )
}

export default CURDProvider