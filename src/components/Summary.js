import React from 'react';
import '../styles/Summary.css';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { summary } = this.props;

        return (
            <div className='resumeSummary'>
                <h3>Summary</h3>
                <p>{summary}</p>
            </div>
        );
    }
}