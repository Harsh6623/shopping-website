"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    type handleSubmitprops = {
        preventDefault: () => void;
    }

    const handleSubmit = (e:handleSubmitprops) => {
        e.preventDefault();
        
        if (!fullname || !email || !message) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        setErrorMessage('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input onChange={e => setFullname(e.target.value)} value={fullname} type="text" id="fullname" placeholder="Harsh Borsadiya" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" placeholder="Harsh@gmail.com" />
                </div>

                <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea onChange={e => setMessage(e.target.value)} value={message} className="h-32" id="message" placeholder="Type Your message here..."></textarea>
                </div>

                <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>
            </form>

            {errorMessage && (
                <div className="bg-red-100 text-red-600 px-5 py-2">{errorMessage}</div>
            )}
        </>
    )
}

export default ContactForm;
