import React from "react";

export default class SkillsInput extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor='skills'>Skills:</label>
                <textarea id='skills'></textarea>
            </div>
        );
    }
}