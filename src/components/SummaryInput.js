import React from "react";

export default class SummaryInput extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor='summary'>Summary:</label>
                <textarea id='summary'></textarea>
            </div>
        );
    }
}