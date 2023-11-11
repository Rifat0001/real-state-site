import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";
import { useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
const Contact = () => {
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
        <div className=" text-black bg-[#F8F8F8]">
            <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 gap-2 items-start justify-between ">
                <h1 className="md:text-5xl text-3xl text-center text-gradient font-semibold mb-10">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaMapMarked className="text-6xl text-[#0E8E94]"></FaMapMarked>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">New York, City</h1>
                            <p>Jatrabari, Dhaka</p>
                        </div>
                    </div>
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaEnvelope className="text-6xl text-[#0E8E94]"></FaEnvelope>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">Email</h1>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                    {/* card one  */}
                    <div className="card border-2  py-8 bg-base-100 flex flex-col items-center shadow-xl">
                        <div className="border-2   circle p-4 rounded-full">
                            <FaPhone className="text-6xl text-[#0E8E94]"></FaPhone>
                        </div>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-semibold ">Phone</h1>
                            <p>800 2541365</p>
                        </div>
                    </div>
                </div>
                {/* map and contact  */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                    <div className=" ">
                        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                    </div>
                    {/* contact section started here  */}
                    <div className=" space-y-4 form-control">
                        <h2 className="text-2xl font-bold text-black">Contact Us</h2>
                        <form onSubmit={handleSubmit} className='emailForm'>
                            <div className="flex items-center justify-normal gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input border  border-black w-full max-w-xs"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input border  border-black w-full max-w-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Your Phone"
                                    className="input border  border-black w-full max-w-xs"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="5"
                                className="textarea textarea-bordered border border-black w-full my-2"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                            <button type="submit" className='btn btn-gradient w-full'>Send Email</button>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;