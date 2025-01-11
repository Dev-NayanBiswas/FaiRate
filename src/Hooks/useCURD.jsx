import axios from "axios";
import toastAlert from "../Utilities/toastAlert";

function useCURD(){

    //!Add A Service 
    async function addService(data){
        try{
            const response = await axios.post('/services', data);
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
            const response = await axios.put(`/services/${id}`, data);
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
            const response = await axios.delete(`/services/${id}`);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
                toastAlert("success", message);
            }
        }catch(error){
            toastAlert("error", error.message)
        }
    }

    //! Add & Update ReviewCount 
    async function addReviewCount(id, count){
        try{
            const response = await axios.patch(`/services/${id}?count=${count}`);
            if(response.status >= 200 && response.status < 300){
                const message = await response.data.message;
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
            const response = await axios.post("/reviews", data);
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
            const response = await axios.delete(`/reviews/${id}`);
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
            const response = await axios.put(`/reviews/${id}`, cardData);
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


    return {
        addService,
        updateService,
        deleteMyService,
        addReviews,
        deleteReview,
        updateReview,
        addReviewCount,
    }
  
}

export default useCURD;