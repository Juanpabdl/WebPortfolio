import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './index.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div id="dev-info">
                <h3 className='footer-head'>Juan Pablo Díaz</h3>
                <p className='text-sm lg:text-base'>
                    A web designer and developer from Mexico.
                    I strive for making websites with high visual
                    appeal, as well as good performance.
                </p>
            </div>
            <div id="site-links">
                <Link to="/">Home</Link>
                <HashLink smooth to="/#aboutme">About Me</HashLink>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div id="platforms">
                <a href='#'>LinkedIn</a>
                <a href='#'>Github</a>
            </div>
        </footer>
    )
}

export default Footer;