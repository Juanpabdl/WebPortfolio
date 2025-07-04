import CustomButton from '../CustomButton';
import './index.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <img
            src="/banner_img.jpg"
            alt="banner_img"/>
            <div className='banner-text'>
                <h1>Hi I´m <span>Juan Pablo Díaz</span></h1>
                <p className="my-4 text-center text-sm md:text-base">
                    I create striking web applications using modern technologies.
                    Specialized in front-end development, I build interfaces with
                    both functionality and appeal.
                </p>
                {/*Boton*/}
                <CustomButton className='btn-default'>Let's Talk</CustomButton>
            </div>
        </div>
    )
}

export default Banner;