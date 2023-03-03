import React from 'react';
import '../styles/Work.css';

// Represents the work experience section of the resume
export default class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { work } = this.props;

        return (
            <div className='resumeWork'>
                <h3>Work Experience</h3>
                <ul>
                    {/* Display all the work experience on the resume */}
                    {
                        work.map((job) => {
                            return (
                                <li key={job.id}>
                                    <h4>{job.company}</h4>
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