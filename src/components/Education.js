import React from 'react';
import '../styles/Education.css';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
            <div className='resumeEducation'>
                <h3>Education</h3>
                <ul>
                    {
                        education.map((program) => {
                            return (
                                <li key={program.id}>
                                    <h4>{program.school}</h4>
                                    <span> - {program.curriculum}<br /></span>
                                    <span>{program.start} - {program.end}</span>
                                    <p>{program.description}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}