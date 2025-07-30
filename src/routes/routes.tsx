import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/ScrollToTop";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ScrollToTop/>
                <Home/>
            </>
        ),
        errorElement: <Error404/>
    },{
        path: '/projects',
        element: (
            <>
                <ScrollToTop/>
                <Projects/>
            </>
        ),
    },{
        path: '/contact',
        element: (
            <>
                <ScrollToTop/>
                <Contact/>
            </>
        ),
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;