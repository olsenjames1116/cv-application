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
        const { contact, summary, skills, work, education, misc } = this.props.state;
        const { addWork, onFormSubmit, handleChange } = this.props;

        return (
            <form onSubmit={onFormSubmit}>
                <ContactInput contact={contact} handleChange={handleChange}/>
                <SummaryInput summary={summary} handleChange={handleChange}/>
                <SkillsInput skills={skills} handleChange={handleChange}/>
                <WorkInput addWork={addWork} work={work} handleChange={handleChange}/>
                <EducationInput education={education} handleChange={handleChange}/>
                <MiscInput misc={misc} handleChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}