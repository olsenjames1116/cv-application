import React from "react";

export default class SkillsInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleChange } = this.props;

        return (
            <div>
                <label htmlFor='skills'>Skills:</label>
                <textarea id='skills' onChange={handleChange}></textarea>
            </div>
        );
    }
}