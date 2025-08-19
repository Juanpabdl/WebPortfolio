import ProjectCard from '../ProjectCard';
import './index.css'
import { projectList } from '../../utils/data/projectsData';
import CustomButton from '../CustomButton';

const ProjectList = () => {
    return(
        <div id="project-container">
            <h2 className='underline'>My <span className='text-custom-yellow'>Projects</span></h2>
            <p className='px-6 my-10 text-center text-sm md:text-base animate-fadeindowndelay1'> 
                Here are some of my recent projects, each project was crafted with 
                attention to detail, performance and user experience in mind.
            </p>
                {projectList.length > 0 ? (
                    <div className='project-list animate-fadeindowndelay2'>
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
                    <div className='animate-fadeindowndelay2'>
                        <h3>Comming soon...</h3>
                    </div>
                )}
                <div className='mt-20 mx-auto'>
                    <CustomButton className='btn-default p-4 text-sm' onClick={() => window.open('https://github.com/Juanpabdl','_blank')}>Check My Github</CustomButton>
                </div>
        </div>
    )
}

export default ProjectList;