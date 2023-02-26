import React from 'react';
import ContactInput from './ContactInput';
import SummaryInput from './SummaryInput';
import SkillsInput from './SkillsInput';
import WorkInput from './WorkInput';

export default class Input extends React.Component {
    render() {
        return (
            <form>
                <ContactInput />
                <SummaryInput />
                <SkillsInput />
                <WorkInput />
            </form>
        );
    }
}