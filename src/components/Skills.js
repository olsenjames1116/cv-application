import React from 'react';
import '../styles/Skills.css';

// Represents the skills section of the resume
const Skills = (props) => {
    const {skills} = props;

    return (
        <div className='resumeSkills'>
            <h3>Skills</h3>
            <p>{skills}</p>
        </div>
    );
}

export default Skills;