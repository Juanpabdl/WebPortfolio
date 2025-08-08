import HeroSection from "../../components/HeroSection";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-0 pt-3 md:pt-4 flex-1">
            <p className="ml-5">
                <span className="font-bold mr-2">
                    Juan Pablo Díaz López
                </span> 
                / Web Portfolio
            </p>

            {/* Hero Section */}
            <HeroSection/>

            {/* Main Content */}
            <AboutMe/>
            
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home;