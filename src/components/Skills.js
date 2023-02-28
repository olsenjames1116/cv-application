import React from 'react';

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skills } = this.props;

        return (
            <div>
                <h2>Skills</h2>
                <p>{skills}</p>
            </div>
        );
    }
}