import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, phone, email } = this.props.contact;
        const { street, city, state, zip } = this.props.contact.address;

        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>
                    <span>{street}, {city}, {state} {zip}</span>
                    <span> - {phone}</span>
                    <span> - {email}</span>
                </p>
            </div>
        );
    }
}