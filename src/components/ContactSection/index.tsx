import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import { useState, useRef } from 'react';
import * as yup from "yup";
import CustomButton from '../CustomButton';
import './index.css'
import { yupResolver } from '@hookform/resolvers/yup';

const FormSchema = yup.object({
    name: yup.string().required('This field is required'),
    email: yup.string().email('Invalid Email Format').required('This field is required'),
    subject: yup.string().required('This field is required'),
    contactMessage: yup.string().required('This field is required'),
})

const ContactSection = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm<yup.InferType<typeof FormSchema>>({
        resolver: yupResolver(FormSchema),
        defaultValues:{
            name: "",
            email: "",
            subject: "",
            contactMessage: ""
        }
    });
    const formRef = useRef<HTMLFormElement|null>(null)
    const [isSubmiting, setIsSubmitting] = useState(false)

    const onSubmit = async(data: yup.InferType<typeof FormSchema>) => { 
        try{
            if (formRef.current) {
                setIsSubmitting(true)

                await emailjs.sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    formRef.current,
                    import.meta.env.VITE_PUBLIC_KEY
                );

                console.info('Email sent successfully!');
                toast.success(
                    <div>
                        <h4>Email sent.</h4>
                        <p className='text-sm text-white/50'>Thanks {data.name}! I´ll keep in touch.</p>
                    </div>
                );
                reset()
                setIsSubmitting(false);
            }
        } catch (error) {
            if(error instanceof EmailJSResponseStatus){
                console.error('EmailJS failed to send: ', error)
            } else {
                console.error('An unexpected error occured', error);
            }
            toast.error(
                <div>
                    <h4>Failed to submit.</h4>
                    <p className='text-sm text-white/50'>Check your message and try again.</p>
                </div>
            );
        }
    } 

    return (
        <div className='mt-14 mb-20 p-2'>
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
            <section id="contact" className='cont-section mx-auto'>
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
                        <div className='pt-8'>
                            <h4 className='text-center font-semibold mb-4'>Connect with me</h4>
                            <div className='mt-2 flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/juanpablodiazlopez' target='_blank'>
                                    <Linkedin/>
                                </a>
                                <a href='https://github.com/Juanpabdl' target='_blank'>
                                    <Github/>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* Contact form */}
                <div id="contact-form">
                    <h3 className='text-2xl font-semibold mb-6'><span className='text-custom-yellow'>Send</span> a Message</h3>
                    <form ref={formRef} className='space-y-3 w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div className='field-container'>
                            <label htmlFor='name' className='field-label'>Your Name: </label>
                            <input 
                            id='name' 
                            type='text' 
                            className='field-item'
                            placeholder='Juan Pablo Díaz'
                            {...register("name")}/>
                        </div>
                        {errors.name && <span className='error-message'>{errors.name.message}</span>}
                        <div className='field-container'>
                            <label htmlFor='email' className='field-label'>Email: </label>
                            <input 
                            id='email' 
                            type='email' 
                            className='field-item'
                            placeholder='john@email.com'
                            {...register("email")}/>
                        </div>
                        {errors.email && <span className='error-message'>{errors.email.message}</span>}
                        <div className='field-container'>
                            <label htmlFor='subject' className='field-label'>Subject: </label>
                            <input 
                            id='subject' 
                            type='text' 
                            className='field-item'
                            placeholder='New Subject'
                            {...register("subject")}/>
                        </div>
                        {errors.subject && <span className='error-message'>{errors.subject.message}</span>}
                        <div className='field-container'>
                            <label htmlFor='contactMessage' className='field-label'>Your Message: </label>
                            <textarea
                            id='contactMessage' 
                            rows={5}
                            className='field-item'
                            placeholder='Hello, I´d like to talk about...'
                            {...register("contactMessage")}/>
                        </div>
                        {errors.contactMessage && <span className='error-message'>{errors.contactMessage.message}</span>}
                        <CustomButton 
                        className='btn-default w-full flex items-center justify-center gap-2 text-sm md:text-base' 
                        type='submit'
                        disabled={isSubmiting}>
                            {isSubmiting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </CustomButton>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactSection;