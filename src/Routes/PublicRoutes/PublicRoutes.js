import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/Page/AddService/AddService";
import Blogs from "../../Components/Page/Blogs/Blogs";
import Home from "../../Components/Page/Home/Home/Home";
import Login from "../../Components/Page/Login/Login";
import Register from "../../Components/Page/Register/Register";
import Services from "../../Components/Page/Services/Services";
import Main from "../../Layout/Main";

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
                path: '/addService',
                element: <AddService></AddService>
            },
        ]
    }
])