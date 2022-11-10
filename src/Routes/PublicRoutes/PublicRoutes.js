import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/Page/AddService/AddService";
import Blogs from "../../Components/Page/Blogs/Blogs";
import Home from "../../Components/Page/Home/Home/Home";
import Login from "../../Components/Page/Login/Login";
import MyReview from "../../Components/Page/MyReview/MyReview";
import Register from "../../Components/Page/Register/Register";
import ServiceDetails from "../../Components/Page/ServiceDetails/ServiceDetails";
import Services from "../../Components/Page/Services/Services";
import Main from "../../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/myReview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
        ]
    }
])