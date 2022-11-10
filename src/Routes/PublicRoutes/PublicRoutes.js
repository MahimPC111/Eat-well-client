import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/Page/AddService/AddService";
import Blogs from "../../Components/Page/Blogs/Blogs";
import Home from "../../Components/Page/Home/Home/Home";
import Login from "../../Components/Page/Login/Login";
import MyReviews from "../../Components/Page/MyReviews/MyReviews";
import Register from "../../Components/Page/Register/Register";
import ServiceDetails from "../../Components/Page/ServiceDetails/ServiceDetails";
import Services from "../../Components/Page/Services/Services";
import UpdateMyReview from "../../Components/Page/UpdateMyReview/UpdateMyReview";
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
                loader: ({ params }) => fetch(`https://eat-well-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/updateMyReview/:id',
                loader: ({ params }) => fetch(`https://eat-well-server.vercel.app/reviews/${params.id}`),
                element: <PrivateRoutes><UpdateMyReview></UpdateMyReview></PrivateRoutes>
            }
        ]
    }
])