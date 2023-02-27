import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, address, phone, email } = this.props.contact;
        console.log(firstName);

        return (
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>
                    <span>Address</span>
                    <span>Phone</span>
                    <span>Email</span>
                </p>
            </div>
        );
    }
}