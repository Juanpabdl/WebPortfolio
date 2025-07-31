import SideBar from "../../components/Sidebar";
import { Outlet, ScrollRestoration} from "react-router-dom"
//import ScrollToTop from "../../components/ScrollToTop";
const Layout = () => {
    return(
        <div className="page">
            <SideBar/>
            <Outlet/>
            <ScrollRestoration getKey={(location) => location.pathname}/>
            {/*<ScrollToTop/>*/}
        </div>
    )
}

export default Layout;