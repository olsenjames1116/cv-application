import React from "react";
import '../styles/SummaryInput.css';

export default class SummaryInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { summary, handleChange } = this.props;

        return (
            <div className='summary'>
                <label htmlFor='summary'>Summary:</label>
                <textarea id='summary' placeholder={summary} onChange={handleChange}></textarea>
            </div>
        );
    }
}