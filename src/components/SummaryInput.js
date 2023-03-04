import React from "react";
import '../styles/SummaryInput.css';

// Represents the summary section of the form
const SummaryInput = (props) => {
    const {summary, handleChange} = props;

    return (
        <div className='summary'>
            <label htmlFor='summary'>Summary:</label>
            <textarea id='summary' placeholder={summary} onChange={handleChange}></textarea>
        </div>
    );
}

export default SummaryInput;