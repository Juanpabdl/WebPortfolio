import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton';
import './index.css'

const HeroSection = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/projects');
    }
    
    return (
        <div className="banner-container animate-fadeindown">
            <img
            src="/banner_img.jpg"
            alt="banner_img"/>
            <div className='banner-text'>
                <h1 className='animate-fadeindowndelay1'>Hi I´m <span>Juan Pablo Díaz</span></h1>
                <p className="my-4 text-center text-sm md:text-base animate-fadeindowndelay1">
                    I create striking web applications using modern technologies.
                    Specialized in front-end development, I build interfaces with
                    both functionality and appeal.
                </p>
                {/*Boton*/}
                <CustomButton className='btn-default mt-3 mx-auto w-1/2 sm:w-1/3 animate-fadeindowndelay3' onClick={handleButtonClick}>
                    <p>See more</p>
                </CustomButton>
            </div>
        </div>
    )
}

export default HeroSection;