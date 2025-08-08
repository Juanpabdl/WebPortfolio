import HeroSection from "../../components/HeroSection";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import { ArrowDown } from "lucide-react";

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

            <div className="absolute md:bottom-2 left-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-white/50 mb-2">Scroll</span>
                <ArrowDown className="w-5 h-5 text-custom-teal"/>
            </div>

            {/* Main Content */}
            <AboutMe/>
            
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home;