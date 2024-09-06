import React from 'react';
import '../styles/components/contact.css'

export default function ContactWidget() {
    return (
            <div className="contact-widget">
                <h3 className='contact-item'>Looking to contact Jacob with any business inquiries?</h3>
                <div className="contact-item phone-number">Call or Text at <a href="tel:9193845368">(919)-384-5368</a></div>
                <div className="contact-item contact-email">Email at <a href= "mailto: jakewhitt@gmail.com">jakewhitt@gmail.com </a></div>
                <div className="contact-item linked-or">Connect with Jacob on <a href="https://www.linkedin.com/in/jacob-whittaker-485473111">LinkedIn</a></div>
            </div>
    );
}