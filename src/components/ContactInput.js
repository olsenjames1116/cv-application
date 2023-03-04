import React from "react";
import '../styles/ContactInput.css';

// Represents the contact section of the form
const ContactInput = (props) => {
    const {handleChange} = props;
    const {firstName, lastName, phone, email} = props.contact;
    const {street, city, state, zip} = props.contact.address;

    return (
        <fieldset className='contact'>
            <legend>Contact Information</legend>
            <div className="name">
                <div className="firstName">
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' id='firstName' placeholder={firstName} onChange={handleChange}></input>
                </div>
                <div className="lastName">
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' id='lastName' placeholder={lastName} onChange={handleChange}></input>
                </div>
            </div>
            <fieldset className='address'>
                <legend>Address</legend>
                <div className='street'>
                    <label htmlFor='street'>Street Address:</label>
                    <input type='text' id='street' placeholder={street} onChange={handleChange}></input>
                </div>
                <div>
                    <div className='city'>
                        <label htmlFor='city'>City:</label>
                        <input type='text' id='city' placeholder={city} onChange={handleChange}></input>
                    </div>
                    <div className='state'>
                        <label htmlFor='state'>State:</label>
                        <input type='text' id='state' placeholder={state} onChange={handleChange}></input>
                    </div>
                    <div className='zip'>
                        <label htmlFor='zip'>Zip Code:</label>
                        <input type='number' id='zip' placeholder={zip} onChange={handleChange}></input>
                    </div>
                </div>
            </fieldset>
            <div>
                <div className='phone'>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input type='number' id='phone' placeholder={phone} onChange={handleChange}></input>
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' placeholder={email} onChange={handleChange}></input>
                </div>
            </div>
        </fieldset>
    );
}

export default ContactInput;