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
        const { addExperience, removeExperience, handleChange } = this.props;

        return (
            <form>
                <ContactInput contact={contact} handleChange={handleChange}/>
                <SummaryInput summary={summary} handleChange={handleChange}/>
                <SkillsInput skills={skills} handleChange={handleChange}/>
                <WorkInput addExperience={addExperience} removeExperience={removeExperience} work={work} handleChange={handleChange}/>
                <EducationInput addExperience={addExperience} removeExperience={removeExperience} education={education} handleChange={handleChange}/>
                <MiscInput addExperience={addExperience} removeExperience={removeExperience} misc={misc} handleChange={handleChange}/>
            </form>
        );
    }
}