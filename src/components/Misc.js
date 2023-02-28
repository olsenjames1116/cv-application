import React from 'react';

export default class Misc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { misc } = this.props;

        return (
            <div>
                <h2>Miscellaneous Experience</h2>
                <ul>
                    {
                        misc.map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <h3>{experience.organization}</h3>
                                    <span> - {experience.position}<br /></span>
                                    <span>{experience.start} - {experience.end}</span>
                                    <p>{experience.description}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}