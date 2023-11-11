import React, { useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
const EmailForm = () => {
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
        <div>
            <form onSubmit={handleSubmit} className='emailForm'>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button type="submit" className='btn'>Send Email</button>
            </form>
        </div>
    );
};

export default EmailForm;