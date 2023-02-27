import React from 'react';
import ContactInput from './ContactInput';
import SummaryInput from './SummaryInput';
import SkillsInput from './SkillsInput';
import WorkInput from './WorkInput';
import EducationInput from './EducationInput';
import MiscInput from './MiscInput';

export default class Input extends React.Component {
    submitForm(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <ContactInput />
                <SummaryInput />
                <SkillsInput />
                <WorkInput />
                <EducationInput />
                <MiscInput />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}