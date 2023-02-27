import React from "react";

export default class ContactInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' id='firstName' onChange={this.props.onInputChange}></input>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' id='lastName' onChange={this.props.onInputChange}></input>
            <fieldset>
                <legend>Address</legend>
                <label htmlFor='street'>Street Address:</label>
                <input type='text' id='street' onChange={this.props.onInputChange}></input>
                <label htmlFor='city'>City:</label>
                <input type='text' id='city' onChange={this.props.onInputChange}></input>
                <label htmlFor='state'>State:</label>
                <input type='text' id='state' onChange={this.props.onInputChange}></input>
                <label htmlFor='zip'>Zip Code:</label>
                <input type='number' id='zip' onChange={this.props.onInputChange}></input>
            </fieldset>
            <label htmlFor='phone'>Phone Number:</label>
            <input type='number' id='phone' onChange={this.props.onInputChange}></input>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' onChange={this.props.onInputChange}></input>
        </fieldset>
        );
    }
}