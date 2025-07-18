import { Send } from 'lucide-react';
import './index.css'

const ContactSection = () => {
    return (
        <section id="contact">
            {/* Info section */}
            <div id="contact-info">
                <h2 className='underline text-right'>Lets Get In <span className='text-custom-yellow'>Touch</span></h2>
                <p className='text-center text-xl'>
                    <span className='text-custom-yellow'>Need help</span> making your next idea into a reality?
                </p>
                <p className='text-center text-xl'>
                    Send me a message
                </p>
                <div className='p-4 rounded-full bg-custom-yellow flex items-center justify-center' style={{width: '100px', height: '100px'}}>
                    <Send color='#000' size={50} strokeWidth={2}/>
                </div>
            </div>
            {/* Contact form */}
            <p id="contact-form">Form</p>
        </section>
    )
}

export default ContactSection;