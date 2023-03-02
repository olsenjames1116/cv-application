import React from 'react';
import '../styles/Skills.css';

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skills } = this.props;

        return (
            <div className='resumeSkills'>
                <h3>Skills</h3>
                <p>{skills}</p>
            </div>
        );
    }
}