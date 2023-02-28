import React from "react";

export default class ContactInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleChange } = this.props;

        return (
            <fieldset>
                <legend>Contact Information</legend>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' onChange={handleChange}></input>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' onChange={handleChange}></input>
                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor='street'>Street Address:</label>
                    <input type='text' id='street' onChange={handleChange}></input>
                    <label htmlFor='city'>City:</label>
                    <input type='text' id='city' onChange={handleChange}></input>
                    <label htmlFor='state'>State:</label>
                    <input type='text' id='state' onChange={handleChange}></input>
                    <label htmlFor='zip'>Zip Code:</label>
                    <input type='number' id='zip' onChange={handleChange}></input>
                </fieldset>
                <label htmlFor='phone'>Phone Number:</label>
                <input type='number' id='phone' onChange={handleChange}></input>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' onChange={handleChange}></input>
            </fieldset>
        );
    }
}