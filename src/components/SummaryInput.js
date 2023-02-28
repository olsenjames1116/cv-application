import React from "react";

export default class SummaryInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleChange } = this.props;

        return (
            <div>
                <label htmlFor='summary'>Summary:</label>
                <textarea id='summary' onChange={handleChange}></textarea>
            </div>
        );
    }
}