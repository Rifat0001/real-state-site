import './HomeComponents.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
const GetinTouch = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_drzl863';
        const templateId = 'template_yf3bvyf';
        const publicKey = 'vlkI9HZbYAEP6vBDU';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            to_name: 'Kaeskanest',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                // sweet alert 
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Delivered",
                    showConfirmButton: false,
                    timer: 1500
                });
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }
    return (
        <div className='get-touch  bg-fixed'>
            <div className='py-10 overlay items-center gap-4 flex md:flex-row flex-col max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4'>
                <div className='md:space-y-8 space-y-4 md:mt-0 mt-8 md:w-7/12 w-full'>
                    <h1 className='md:text-5xl text-3xl text-white font-bold md:font-semibold'>We help you buy or sell your property quickly</h1>
                    <p className='text-gray'>Engage with our professional real estate agents to sell, buy or rent your home.  Get emails directly to your inbox and manage the lead as you wish.</p>
                </div>
                <div className='bg-white w-full md:mt-0 mt-6 md:w-5/12 rounded-md p-8 space-y-4'>
                    <h1 className='text-2xl text-black font-semibold'>Get in touch</h1>
                    <p className='text-slate-500 font-semibold'>Fill out this form and one of our agents will be in touch with you soon.</p>
                    <div>
                        <form onSubmit={handleSubmit} className='emailForm space-y-4 forma'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input border  w-full text-black"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input border  w-full text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Your Phone"
                                className="input border   w-full text-black"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <textarea className='border  p-2 rounded-md text-black w-full ' placeholder='Type your message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} name="" id="" cols="10" rows="5"></textarea>
                            <button className='btn btn-gradient w-full border-none'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetinTouch;