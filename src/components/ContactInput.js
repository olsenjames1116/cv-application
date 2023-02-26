import React from "react";

export default class ContactInput extends React.Component {
    render() {
        return (
            <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' id='firstName'></input>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' id='lastName'></input>
            <fieldset>
                <legend>Address</legend>
                <label htmlFor='street'>Street Address:</label>
                <input type='text' id='street'></input>
                <label htmlFor='city'>City:</label>
                <input type='text' id='city'></input>
                <label htmlFor='state'>State:</label>
                <input type='text' id='state'></input>
                <label htmlFor='zip'>Zip Code:</label>
                <input type='number' id='zip'></input>
            </fieldset>
            <label htmlFor='phone'>Phone Number:</label>
            <input type='number' id='phone'></input>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email'></input>
        </fieldset>
        );
    }
}