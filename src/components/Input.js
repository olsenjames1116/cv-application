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
        return (
            <form onSubmit={this.props.onFormSubmit}>
                <ContactInput onInputChange={this.props.onInputChange}/>
                <SummaryInput onInputChange={this.props.onInputChange}/>
                <SkillsInput onInputChange={this.props.onInputChange}/>
                <WorkInput onInputChange={this.props.onInputChange}/>
                <EducationInput onInputChange={this.props.onInputChange}/>
                <MiscInput onInputChange={this.props.onInputChange}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}