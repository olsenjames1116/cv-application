import React from 'react';
import '../styles/Contact.css';

// Represents the contact section of the resume
const Contact = (props) => {
    const {firstName, lastName, phone, email} = props.contact;
    const {street, city, state, zip} = props.contact.address;

    return (
        <div className='contact'>
            <h1>{firstName} {lastName}</h1>
            <p className='contact'>
                <span>{street}, {city}, {state} {zip}</span>
                <span> - {phone}</span>
                <span> - {email}</span>
            </p>
        </div>
    );
}

export default Contact;