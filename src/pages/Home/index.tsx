import SideBar from "../../components/Sidebar";
import Banner from "../../components/Banner";

const Home = () => {
    return (
        <div className="page">
            <SideBar/>
            <div className="ml-[80px] min-h-screen p-3 flex-1">
                <p>
                    <span className="font-bold mr-2">
                        Juan Pablo Díaz López
                    </span> 
                    / Web Portfolio
                </p>
                {/* Banner Section */}
                <Banner />
                {/* Main Content */}

                {/* Footer */}
            </div>
        </div>
    )
}

export default Home;