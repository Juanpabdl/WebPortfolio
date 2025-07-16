import ProjectCard from '../ProjectCard';
import './index.css'
import { projectList } from '../../utils/data/projectsData';

const ProjectList = () => {
    return(
        <div id="project-container">
            <h2 className='underline'>My <span className='text-custom-yellow'>Projects</span></h2>
            <p className='px-6 my-8 text-center text-sm md:text-base'> 
                Here are some of my recent projects, each project was crafted with 
                attention to detail, performance and user experience in mind.
            </p>
                {projectList.length > 0 ? (
                    <div className='project-list'>
                        {projectList.map((item, index) => {
                            return(
                                <ProjectCard key={index} 
                                title={item.title}
                                description={item.description}
                                demoUrl={item.demoUrl}
                                codeUrl={item.codeUrl}
                                tags={item.tags}
                                image={item.image}/>
                            )
                        })}
                    </div>
                ):(
                    <div>
                        <h3>Comming soon...</h3>
                    </div>
                )}
        </div>
    )
}

export default ProjectList;