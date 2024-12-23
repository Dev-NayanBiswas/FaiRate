import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AddServices from "./Pages/AddServices/AddServices";
import MyReviews from "./Pages/MyReviews/MyReviews";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "./Pages/Error/ErrorPage";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"services",
                element:<Services/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"addServices",
                element:<AddServices/>
            },
            {
                path:"myReviews",
                element:<MyReviews/>
            },
            {
                path:"details",
                element:<ServiceDetails/>
            }
        ]
    }
])



export default Routes;