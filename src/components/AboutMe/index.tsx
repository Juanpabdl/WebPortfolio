import { Briefcase, Code, UserCircle } from 'lucide-react';
import skillList from '../../utils/data/skillsData';
import './index.css';
import { useState } from 'react';
import CustomButton from '../CustomButton';

const AboutMe = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const categories = ["all","frontend","backend","tools","softskills"]

    const filteredSkills = skillList.filter((skill) => 
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <div id="aboutme" className="py-24 px-2 relative min-w-[250px] mb-28 md:mb-44">
            <section id="info-sec" className="cont-section mx-auto my-14 space-y-10">
                <h2 className="underline text-xl text-center md:text-3xl">About <span className="text-custom-yellow decoration-custom-yellow">Me</span></h2>
                <div className="info-container">
                    <div className='text-center grid grid-cols-1 gap-4'>
                        <h3 className="font-bold">Passionate Web Developer & Tech Creator</h3>
                        <p>
                            Computer Engineeering Graduate with 4 years of
                            experience in web development, I specialize in
                            creating responsive, accessible and performant web applications
                            with modern technologies.
                        </p>
                        <p>
                            I´m passionate about creating quality solutions to complex
                            problems, and constantly learning new technologies and techniques that
                            keep me at the forefront of the ever-evolving tech landscape.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                       <div className='card-info'>
                            <div className='flex items-start gap-4'>
                                <div className='card-icon'>
                                    <Code size={20}/>
                                </div>
                                <div className='text-left'>
                                    <h4>Web Development</h4>
                                    <p>Creating responsive websites and webapps from modern frameworks.</p>
                                </div>
                            </div>
                       </div>
                       <div className='card-info'>
                            <div className='flex items-start gap-4'>
                                <div className='card-icon'>
                                    <UserCircle size={20}/>
                                </div>
                                <div className='text-left'>
                                    <h4>UI/UX Design</h4>
                                    <p>Designing intuitive user interfaces with seamless navigation in mind.</p>
                                </div>
                            </div>
                       </div>
                       <div className='card-info'>
                            <div className='flex items-start gap-4'>
                                <div className='card-icon'>
                                    <Briefcase size={20}/>
                                </div>
                                <div className='text-left'>
                                    <h4>Project Management</h4>
                                    <p>Leading team projects into completion following Agile Frameworks</p>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </section>
            {/* List of skills and tools*/}
            <section id="skills-sec" className='cont-section mx-auto mt-32'>
                <h2 className='underline text-xl text-center md:text-3xl'>My <span className="text-custom-yellow decoration-custom-yellow">Skills</span></h2>
                <div className='skill-select'>
                    {categories.map((category,key) => {
                        return(
                            <CustomButton 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={'btn-default rounded-full px-2 w-auto text-sm capitalize'}>
                                {category}
                            </CustomButton>
                        )
                    })}
                </div>
                <div className='skill-container'>
                        {filteredSkills.map((skill,index) => {
                            return(
                                <div key={index} className='card-info'>
                                    <div className='w-auto flex gap-4'>
                                        <div className='text-left min-w-full'>
                                            <h4 className='font-semibold text-lg'>{skill.name}</h4>
                                            <div className='h-2 bg-custom-dk-gray overflow-hidden'>
                                                <div 
                                                className='skill-line'
                                                style={{width: skill.level + "%"}}/>
                                            </div>
                                            <div className='text-center mt-1'>
                                                <span className='text-sm'>{skill.level}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </section>
        </div>   
    )
}

export default AboutMe;