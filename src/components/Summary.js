import React from 'react';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { summary } = this.props;

        return (
            <div>
                <h2>Summary</h2>
                <p>{summary}</p>
            </div>
        );
    }
}