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
        // const { contact } = this.props.state;
        // console.log(contact);
        return (
            <div>
                <Contact contact={this.props.state.contact}/>
                <Summary summary={this.props.state.summary}/>
                <Skills skills={this.props.state.skills}/>
                <Work />
                <Education />
                <Misc />
            </div>
        );
    }
}