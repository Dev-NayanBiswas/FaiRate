import axios from "axios";
import { CURDContext } from "../Context/AllContext"
import toastAlert from "../Utilities/toastAlert";

function CURDProvider({children}){


    //!Add A Service 
    async function addService(data){
        try{
            const response = await axios.post('/addService', data);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
                toastAlert("success", message)
            }
        }catch(error){
            toastAlert('error',error.message)
        }
    }


    //! Update MyService 
    async function updateService(data,id){
        try{
            const response = await axios.put(`/updateService/${id}`, data);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
                toastAlert("success", message)
            }
        }catch(error){
            toastAlert("error", error.message)
        }
    }

    //! Delete MyService 
    async function deleteMyService(id){
        try{
            const response = await axios.delete(`/myService/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
                toastAlert("success", message);
            }
        }catch(error){
            toastAlert("error", error.message)
        }
    }

    //! Add & Update ReviewCount 
    async function addReviewCount(id){
        try{
            const response = await axios.patch(`/services/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
                toastAlert("success",message)
            }else{
                throw new Error("Error in Data Updating")
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! Add Reviews 
    async function addReviews(data){
        try{
            const response = await axios.post("/allReviews", data);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                toastAlert("success",message)
            }else{
                throw new Error("Error in Adding Reviews")
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! Delete myReview 
    async function deleteReview(id){
        try{
            const response = await axios.delete(`/myReviews/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                toastAlert("success",message)
            }else{
                throw new Error("Error in delete Review")
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! Update MyREview 
    async function updateReview(cardData, id){
        try{
            const response = await axios.put(`/updateReview/${id}`, cardData);
            if(response.status >= 200 && response.status < 300){
                const message = response.data.message;
                toastAlert("success",message)
            }else{
                throw new Error("Error in Updating Review")
            }
        }catch(error){
            toastAlert('error',error.message)
        }
    }


    const CURDObject={
        addService,
        updateService,
        deleteMyService,
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