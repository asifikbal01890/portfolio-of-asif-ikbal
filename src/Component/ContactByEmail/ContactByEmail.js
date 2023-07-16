import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ContactByEmail = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3x0d3kn', 'template_tb6v0a8', form.current, 'tOHIz8wXIzHxQkrPY')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success('Send Successfully');  
                    e.target.reset()
                }


            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='flex justify-center'>
            <div className='mt-16 md:mt-32 text-white'>
                <div className='text-center mb-10'>
                    <h1 className='font-[Outfit] text-3xl md:text-5xl'><span className='gradient-text pr-3'>Contact</span>Me</h1>
                </div>
                <div className='md:grid grid-cols-12 gradient-border md:mx-0 mx-4 p-4 md:p-12'>
                    <div className='col-span-2 text-center'>
                        <div>
                            <p className='flex justify-center text-2xl text-[#a410e8]'><MdLocationOn></MdLocationOn></p>
                            <h2 className='text-xl font-[Outfit] contact-text'>Address</h2>
                            <div className='text-sm text-slate-300'>
                                <p>Baraigram, Natore</p>
                                <p>Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                        <div className='my-6'>
                            <p className='flex justify-center text-xl text-[#a410e8]'><FaPhoneAlt></FaPhoneAlt></p>
                            <h2 className='text-xl font-[Outfit] contact-text'>Phone</h2>
                            <div className='text-sm text-slate-300'>
                                <p>+8801749151102</p>
                                <p>+8801890400980</p>
                            </div>
                        </div>
                        <div>
                            <p className='flex justify-center text-2xl text-[#a410e8]'><MdEmail></MdEmail></p>
                            <h2 className='text-xl font-[Outfit] contact-text'>Address</h2>
                            <div className='text-sm text-slate-300'>
                                <p>Baraigram, Natore</p>
                                <p>Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 my-6 flex justify-center'>
                        <p className='border-l-2 h-full'></p>
                    </div>
                    <div className='max-w-[700px] col-span-9'>
                        <h1 className='font-[Outfit] text-3xl contact-text'>Send me A message</h1>
                        <p className='text-slate-300'>If you have any work from me or any types of queries related to my projects, you can send me messages from here. It's my pleasure to help you.</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" className='block my-3 w-full rounded-[5px] text-lg p-2 bg input-contact' placeholder='Enter your name' />
                            <input type="email" name="user_email" className='block w-full rounded-[5px] text-lg p-2 input-contact' placeholder='Enter your email' />
                            <textarea name="message" className='block my-3 w-full rounded-[5px] text-lg p-2 input-contact' placeholder='Enter your message' />
                            <button type="submit" className='gradient-btn py-2 px-5 font-semibold'>Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactByEmail;