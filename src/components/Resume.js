import React from "react";
import Contact from './Contact';
import Summary from './Summary';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <Contact />
                <Summary />
                <Skills />
                <Work />
                <Education />
            </div>
        );
    }
}