import React from "react";
import Contact from './Contact';
import Summary from './Summary';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';
import Misc from './Misc';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contact, summary, skills, work, education, misc } = this.props.state;

        return (
            <div className='resume'>
                <Contact contact={contact}/>
                <Summary summary={summary}/>
                <Skills skills={skills}/>
                <Work work={work}/>
                <Education education={education}/>
                <Misc misc={misc}/>
            </div>
        );
    }
}