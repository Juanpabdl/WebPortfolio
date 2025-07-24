import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './index.css'
import CustomButton from '../CustomButton';

const ContactSection = () => {
    return (
        <div className='mt-14 p-2'>
            <div className='mx-auto max-w-3xl flex flex-col items-center'>
                <h2 className='text-center underline'>Lets Get In <span className='text-custom-yellow'>Touch</span></h2>
                    <p className='text-center text-sm md:text-base mt-6 px-5'>
                    <span className='text-custom-yellow'>Need help</span> making your next idea into a reality?
                    Want to <span className='text-custom-yellow'>Collaborate</span>?
                    I´m open to discussing new oportunities
                </p>
                <div 
                className='mt-6 p-4 rounded-full bg-custom-teal flex items-center justify-center' 
                style={{width: '80px', height: '80px'}}>
                    <Send color='#000' size={40} strokeWidth={2}/>
                </div>
            </div>
            <section id="contact">
                {/* Info section */}
                <div id="contact-info">
                    <h3 className='text-2xl font-semibold mb-6'><span className='text-custom-yellow'>Contact</span> Information</h3>
                    <div className='space-y-6 justify-center text-sm sm:text-base'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-custom-teal/20'>
                                <Mail className='contact-icon'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a
                                href='mailto:jpdiazl@outlook.com'
                                className='hover:text-custom-yellow'>jpdiazl@outlook.com</a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-custom-teal/20'>
                                <Phone className='contact-icon'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a
                                href='tel:+528444444501'
                                className='hover:text-custom-yellow'>+52 (844) 444 4501</a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-custom-teal/20'>
                                <MapPin className='contact-icon'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a
                                className='hover:text-custom-yellow'>Saltillo, Coahuila, MX.</a>
                            </div>
                        </div>
                        {/* 
                        <div className='pt-8'>
                            <h4>Connect with me</h4>
                            <div className='mt-2 flex gap-3'>
                                <a href='#' target='_blank'>
                                    <Linkedin/>
                                </a>
                                <a href='#' target='_blank'>
                                    <Github/>
                                </a>
                            </div>
                        </div> 
                        */}   
                    </div>
                </div>
                {/* Contact form */}
                <div id="contact-form">
                    <h3 className='text-2xl font-semibold mb-6'><span className='text-custom-yellow'>Send</span> a Message</h3>
                    <form className='space-y-4 w-full'>
                        <div className='field-container'>
                            <label htmlFor='name' className='field-label'>Your Name: </label>
                            <input 
                            id='name' 
                            name='name' 
                            type='text' 
                            required
                            className='field-item'
                            placeholder='Juan Pablo Díaz'/>
                        </div>
                        <div className='field-container'>
                            <label htmlFor='email' className='field-label'>Your Email: </label>
                            <input 
                            id='email' 
                            name='email' 
                            type='email' 
                            required
                            className='field-item'
                            placeholder='john@email.com'/>
                        </div>
                        <div className='field-container'>
                            <label htmlFor='message' className='field-label'>Your Message: </label>
                            <textarea
                            id='message' 
                            name='message' 
                            rows={5}
                            required
                            className='field-item'
                            placeholder='Hello, I´d like to talk about...'/>
                        </div>
                        <CustomButton 
                        className='btn-default w-full flex items-center justify-center gap-2 text-sm md:text-base' 
                        type='submit'>
                            Send Message
                            <Send size={16}/>
                        </CustomButton>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactSection;