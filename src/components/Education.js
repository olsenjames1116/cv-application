import React from 'react';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
            <div>
                <h2>Education</h2>
                <ul>
                    {
                        education.map((program) => {
                            return (
                                <li key={program.id}>
                                    <h3>{program.school}</h3>
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