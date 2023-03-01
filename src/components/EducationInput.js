import React from "react";

export default class EducationInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addExperience, education, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Education</legend>
                <ul>
                    {
                        education.map((program) => {
                            return (
                                <li key={program.id}>
                                    <label htmlFor={`school_${program.id}`}>School:</label>
                                    <input type='text' id={`school_${program.id}`} className='education' placeholder={program.school} onChange={handleChange}></input>
                                    <label htmlFor={`curriculum_${program.id}`}>Curriculum:</label>
                                    <input type='text' id={`curriculum_${program.id}`} className='education' placeholder={program.curriculum} onChange={handleChange}></input>
                                    <label htmlFor={`start_${program.id}`}>Start Date:</label>
                                    <input type='date' id={`start_${program.id}`} className='education' placeholder={program.start} onChange={handleChange}></input>
                                    <label htmlFor={`end_${program.id}`}>End Date:</label>
                                    <input type='date' id={`end_${program.id}`} className='education' placeholder={program.end} onChange={handleChange}></input>
                                    <label htmlFor={`description_${program.id}`}>Description:</label>
                                    <textarea id={`description_${program.id}`} className='education' placeholder={program.description} onChange={handleChange}></textarea>
                                </li>
                            );
                        })
                    }
                </ul>
                <button type='button' className='education' onClick={addExperience}>Add</button>
            </fieldset>
        );
    }
}