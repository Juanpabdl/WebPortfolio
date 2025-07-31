import SideBar from "../../components/Sidebar";
import { Outlet } from "react-router-dom"
import ScrollToTop from "../../components/ScrollToTop";
const Layout = () => {
    return(
        <div className="page">
            <SideBar/>
            <Outlet/>
            <ScrollToTop/>
        </div>
    )
}

export default Layout;