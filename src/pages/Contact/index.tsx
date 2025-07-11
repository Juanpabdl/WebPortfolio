import SideBar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Contact = () => {
    return (
        <div className="page">
            <SideBar/>
            <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-3 flex-1">
                <p>
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