import React from 'react';
import ContactInput from './ContactInput';
import SummaryInput from './SummaryInput';
import SkillsInput from './SkillsInput';
import WorkInput from './WorkInput';
import EducationInput from './EducationInput';
import MiscInput from './MiscInput';

export default class Input extends React.Component {
    render() {
        return (
            <form>
                <ContactInput />
                <SummaryInput />
                <SkillsInput />
                <WorkInput />
                <EducationInput />
                <MiscInput />
            </form>
        );
    }
}