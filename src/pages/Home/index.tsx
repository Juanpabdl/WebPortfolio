import SideBar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import AboutMe from "../../components/AboutMe";

const Home = () => {
    return (
        <div className="page">
            <SideBar/>
            <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-3 flex-1">
                <p>
                    <span className="font-bold mr-2">
                        Juan Pablo Díaz López
                    </span> 
                    / Web Portfolio
                </p>

                {/* Banner Section */}
                <Banner />

                {/* Main Content */}
                <AboutMe/>
                
                {/* Footer */}
            </div>
        </div>
    )
}

export default Home;