import CustomButton from '../CustomButton';
import './index.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <img
            className="" 
            src="/banner_img.jpg"
            alt="banner_img"/>
            <div className='banner-text'>
                <h1>I´m a <span>Web developer</span> <br/>set in Mexico</h1>
                {/*Boton*/}
                <CustomButton className='btn-default'>Let's Talk</CustomButton>
            </div>
        </div>
    )
}

export default Banner;