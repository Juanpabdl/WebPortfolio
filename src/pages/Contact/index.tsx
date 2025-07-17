import SideBar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Contact = () => {
    return (
        <div className="page">
            <SideBar/>
            <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-0 pt-3 md:pt-4 md:pl-3 flex-1">
                <p className="ml-5">
                    <span className="font-bold mr-2">
                        Juan Pablo Díaz López
                    </span> 
                    / Web Portfolio / Contact
                </p>

                {/*Projects Content */}
                
                {/* Footer */}
                <Footer/>
            </div>
        </div>
    )
}

export default Contact;