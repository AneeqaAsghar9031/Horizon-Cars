import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import AOS from 'aos';
import {Row , Col , Form , Input, Button} from 'antd'
import './contact.css'
import DefaultLayout from '../components/DefaultLayout';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <DefaultLayout>
        <div>
             <Row gutter={16} className='d-flex align-items-center'>
                <Col lg={7}></Col>
                <Col lg={10} className="text-align-center">
        <div className='d-flex align-items-center shadow-lg p-3 mb-5 mt-5 bg-black rounded' style={{backgroundColor: "grey"}}>
        <div id="contact-form">
        <div data-aos="zoom-out-up" data-aos-duration='1500'>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit} className="btn2">Send Message</button>
            <br/>

            <b><span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span></b>
            </div>
        </div>
        </div>
        </Col>
        </Row>
        
        </div>
        </DefaultLayout>
    );

};

export default Contact;