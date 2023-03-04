import React from 'react';
import '../styles/Misc.css';

// Represents the misc experience section of the resume
const Misc = (props) => {
    const {misc} = props;

    return (
        <div className='resumeMisc'>
            <h3>Miscellaneous Experience</h3>
            <ul>
                {/* Display all misc experience on the resume */}
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

export default Misc;