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

    //! Add Reviews 
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

    //! Delete myReview 
    async function deleteReview(id){
        try{
            const response = await axios.delete(`/myReviews/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                alertHandler(message)
            }else{
                throw new Error("Error in delete Review")
            }
        }catch(error){
            alertHandler(error.message)
        }
    }

    //! Update MyREview 
    async function updateReview(cardData, id){
        try{
            const response = await axios.put(`/updateReview/${id}`, cardData);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                alertHandler(message)
                console.log(response)
            }else{
                throw new Error("Error in Updating Review")
            }
        }catch(error){
            alertHandler(error.message)
        }
    }

    const CURDObject={
        addReviews,
        deleteReview,
        updateReview,
        addReviewCount,
    }
  return (
    <CURDContext.Provider value={CURDObject}>
        {children}
    </CURDContext.Provider>
  )
}

export default CURDProvider