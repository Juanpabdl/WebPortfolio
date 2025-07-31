
import Footer from "../../components/Footer";
import ProjectList from "../../components/ProjectList";

const Projects = () => {
    return (
        <div className="mt-[50px] md:mt-0 md:ml-[80px] min-h-screen p-0 pt-3 md:pt-4 flex-1">
            <p className="ml-5">
                <span className="font-bold mr-2">
                    Juan Pablo Díaz López
                </span> 
                / Web Portfolio / Projects
            </p>

            {/*Projects Content */}
            <ProjectList/>
            
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Projects;