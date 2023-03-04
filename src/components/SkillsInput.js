import React from "react";
import '../styles/SkillsInput.css';

// Represents the skills section of the form
const SkillsInput = (props) => {
    const {skills, handleChange} = props;

    return (
        <div className='skills'>
            <label htmlFor='skills'>Skills:</label>
            <textarea id='skills' placeholder={skills} onChange={handleChange}></textarea>
        </div>
    );
}

export default SkillsInput;