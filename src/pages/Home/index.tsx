import SideBar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="page">
            <SideBar/>
            <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-3 pl-0 pb-0 flex-1">
                <p className="ml-5">
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
                <Footer/>
            </div>
        </div>
    )
}

export default Home;