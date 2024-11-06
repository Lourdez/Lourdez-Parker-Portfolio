import React, { useState } from "react";
// import React, { useRef } from 'react';
import "../Components/style/Contact.css";
// import emailjs from '@emailjs/browser'

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let message = `I regret the Inconvience Caused , Please Click Hire me button to contact Me 
 Or Contact Me Through
Mail : lourdezparker@gmail.com
`


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        

        e.preventDefault();
        console.log("Form submitted:", form);
        alert(message);

        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        
        <div id="Contact" className="contact-container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out by filling out the form below:</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
