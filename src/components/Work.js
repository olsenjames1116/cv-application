import React from 'react';
import '../styles/Work.css';

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