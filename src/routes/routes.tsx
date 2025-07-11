import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },{
        path: '/projects',
        element: <Projects/>,
    },{
        path: '/contact',
        element: <Contact/>,
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;