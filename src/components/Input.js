import React from 'react';
import ContactInput from './ContactInput';
import SummaryInput from './SummaryInput';

export default class Input extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <ContactInput />
                <SummaryInput />
            </form>
        );
    }
}