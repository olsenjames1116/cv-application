import React from "react";

export default class SkillsInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skills, handleChange } = this.props;

        return (
            <div>
                <label htmlFor='skills'>Skills:</label>
                <textarea id='skills' placeholder={skills} onChange={handleChange}></textarea>
            </div>
        );
    }
}