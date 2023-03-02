import React from 'react';
import '../styles/Misc.css';

export default class Misc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { misc } = this.props;

        return (
            <div className='resumeMisc'>
                <h3>Miscellaneous Experience</h3>
                <ul>
                    {
                        misc.map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <h4>{experience.organization}</h4>
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