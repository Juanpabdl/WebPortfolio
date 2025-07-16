import CustomButton from '../CustomButton'
import './index.css'

type ProjectProps = {
    title: string,
    description: string,
    image: string,
    tags: string[],
    demoUrl: string,
    codeUrl: string,
}

const ProjectCard = (props: ProjectProps) => {
    const handleClickDemo = () => {
        window.open(props.demoUrl, '_blank')
    }

    const handleClickCode = () => {
        window.open(props.codeUrl, '_blank')
    }

    return (
        <div className='group project-card'>
            <div className='h-48 bg-cover overflow-hidden'>
                <img 
                src={props.image} 
                alt={props.title}
                className='project-img'/>
            </div>
            <h3 className='m-2 text-lg font-semibold md:text-2xl underline'>{props.title}</h3>
            <div className='flex justify-center gap-3'>
                {props.tags.map((tag,index) => {
                    return(
                        <div key={index} className='tag'>{tag}</div>
                    )
                })}
            </div>
            <p className='text-sm text-left p-3 m-2'>{props.description}</p>
            <div className='m-4 mt-0 flex justify-end gap-6'>
                {props.demoUrl.length > 0 ? 
                    (
                        <CustomButton className='btn-default text-sm' onClick={handleClickDemo}>
                            See Demo
                        </CustomButton>
                    ):(
                        <CustomButton className='btn-blocked text-sm'>
                            See Demo
                        </CustomButton>
                    )
                }
                <CustomButton className="btn-default text-sm" onClick={handleClickCode}>
                    See Code
                </CustomButton>
            </div>
        </div>
    )
}

export default ProjectCard;