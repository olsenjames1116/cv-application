import React from 'react';

export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { work } = this.props;

        return (
            <div>
                <h2>Work Experience</h2>
                <ul>
                    {
                        work.map((job) => {
                            return (
                                <li>
                                    <h3>{job.company}</h3>
                                    <span> - {job.position}<br /></span>
                                    <span>{job.start} - {job.end}</span>
                                    <p>{job.description}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}