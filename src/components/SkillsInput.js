import React from "react";
import '../styles/SkillsInput.css';

// Represents the skills section of the form
export default class SkillsInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skills, handleChange } = this.props;

        return (
            <div className='skills'>
                <label htmlFor='skills'>Skills:</label>
                <textarea id='skills' placeholder={skills} onChange={handleChange}></textarea>
            </div>
        );
    }
}