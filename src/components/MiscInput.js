import React from "react";

export default class MiscInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addExperience, misc, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Misc Experience</legend>
                <ul>
                    {
                        misc.map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <label htmlFor={`organization_${experience.id}`}>Organization:</label>
                                    <input type='text' id={`organization_${experience.id}`} className='misc' placeholder={experience.organization} onChange={handleChange}></input>
                                    <label htmlFor={`position_${experience.id}`}>Position:</label>
                                    <input type='text' id={`position_${experience.id}`} className='misc' placeholder={experience.position} onChange={handleChange}></input>
                                    <label htmlFor={`start_${experience.id}`}>Start Date:</label>
                                    <input type='date' id={`start_${experience.id}`} className='misc' placeholder={experience.start} onChange={handleChange}></input>
                                    <label htmlFor={`end_${experience.id}`}>End Date:</label>
                                    <input type='date' id={`end_${experience.id}`} className='misc' placeholder={experience.end} onChange={handleChange}></input>
                                    <label htmlFor={`description_${experience.id}`}>Description:</label>
                                    <textarea id={`description_${experience.id}`} className='misc' placeholder={experience.description} onChange={handleChange}></textarea>
                                </li>
                            );
                        })
                    }
                </ul>
                <button type='button' onClick={addExperience}>Add</button>
            </fieldset>
        );
    }
}