import React from 'react';
import '../styles/Summary.css';

// Represents the summary section of the resume
const Summary = (props) => {
    const {summary} = props;

    return (
        <div className='resumeSummary'>
            <h3>Summary</h3>
            <p>{summary}</p>
        </div>
    );
}

export default Summary;