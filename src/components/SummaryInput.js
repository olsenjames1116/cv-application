import React from "react";

export default class SummaryInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor='summary'>Summary:</label>
                <textarea id='summary' onChange={this.props.onInputChange}></textarea>
            </div>
        );
    }
}