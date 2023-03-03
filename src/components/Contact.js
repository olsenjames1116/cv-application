import React from 'react';
import '../styles/Contact.css';

// Represents the contact section of the resume
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, phone, email } = this.props.contact;
        const { street, city, state, zip } = this.props.contact.address;

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
}