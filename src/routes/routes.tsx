import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },{
        path: '/about-me',
        element: <div>About Me</div>,
    },{
        path: '/projects',
        element: <div>Project Portfolio</div>,
    },{
        path: '/contact',
        element: <div>Contact me</div>,
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;