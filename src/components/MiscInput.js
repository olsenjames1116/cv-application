import React from "react";
import '../styles/MiscInput.css';

export default class MiscInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addExperience, removeExperience, misc, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Misc Experience</legend>
                <ul className='misc'>
                    {
                        misc.map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <div>
                                        <div className="organization">
                                            <label htmlFor={`organization_${experience.id}`}>Organization:</label>
                                            <input type='text' id={`organization_${experience.id}`} className='misc' placeholder={experience.organization} onChange={handleChange}></input>
                                        </div>
                                        <div className="miscPosition">
                                            <label htmlFor={`position_${experience.id}`}>Position:</label>
                                            <input type='text' id={`position_${experience.id}`} className='misc' placeholder={experience.position} onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='miscStart'>
                                            <label htmlFor={`start_${experience.id}`}>Start Date:</label>
                                            <input type='date' id={`start_${experience.id}`} className='misc' placeholder={experience.start} onChange={handleChange}></input>
                                        </div>
                                        <div className='miscEnd'>
                                            <label htmlFor={`end_${experience.id}`}>End Date:</label>
                                            <input type='date' id={`end_${experience.id}`} className='misc' placeholder={experience.end} onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <div className='miscDescription'>
                                        <label htmlFor={`description_${experience.id}`}>Description:</label>
                                        <textarea id={`description_${experience.id}`} className='misc' placeholder={experience.description} onChange={handleChange}></textarea>
                                    </div>
                                    <button type='button' id={experience.id} className='misc' onClick={removeExperience}>Delete</button>
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