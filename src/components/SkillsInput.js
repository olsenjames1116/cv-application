import React from "react";

export default class SkillsInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor='skills'>Skills:</label>
                <textarea id='skills' onChange={this.props.onInputChange}></textarea>
            </div>
        );
    }
}