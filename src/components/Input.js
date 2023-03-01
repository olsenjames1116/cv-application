import React from 'react';
import ContactInput from './ContactInput';
import SummaryInput from './SummaryInput';
import SkillsInput from './SkillsInput';
import WorkInput from './WorkInput';
import EducationInput from './EducationInput';
import MiscInput from './MiscInput';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contact, work, education, misc, onFormSubmit, handleChange } = this.props;

        return (
            <form onSubmit={onFormSubmit}>
                <ContactInput contact={contact} handleChange={handleChange}/>
                <SummaryInput handleChange={handleChange}/>
                <SkillsInput handleChange={handleChange}/>
                <WorkInput work={work} handleChange={handleChange}/>
                <EducationInput education={education} handleChange={handleChange}/>
                <MiscInput misc={misc} handleChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}