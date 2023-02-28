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
        const { work } = this.props;
        console.log(work);

        return (
            <form onSubmit={this.props.onFormSubmit}>
                <ContactInput handleChange={this.props.handleChange}/>
                <SummaryInput handleChange={this.props.handleChange}/>
                <SkillsInput handleChange={this.props.handleChange}/>
                <WorkInput work={work} handleChange={this.props.handleChange}/>
                <EducationInput onInputChange={this.props.onInputChange}/>
                <MiscInput onInputChange={this.props.onInputChange}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}