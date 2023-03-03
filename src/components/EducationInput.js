import React from "react";
import '../styles/EducationInput.css';

// Represents the education section of the form
export default class EducationInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addExperience, removeExperience, education, handleChange } = this.props;

        return (
            <fieldset className='education'>
                <legend>Education</legend>
                <ul className='education'>
                    {/* Display all the input sections for education to allow user to edit them */}
                    {
                        education.map((program) => {
                            return (
                                <li key={program.id}>
                                    <div>
                                        <div className='school'>
                                            <label htmlFor={`school_${program.id}`}>School:</label>
                                            <input type='text' id={`school_${program.id}`} className='education' placeholder={program.school} onChange={handleChange}></input>
                                        </div>
                                        <div className='curriculum'>
                                            <label htmlFor={`curriculum_${program.id}`}>Curriculum:</label>
                                            <input type='text' id={`curriculum_${program.id}`} className='education' placeholder={program.curriculum} onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='educationStart'>
                                            <label htmlFor={`start_${program.id}`}>Start Date:</label>
                                            <input type='date' id={`start_${program.id}`} className='education' placeholder={program.start} onChange={handleChange}></input>
                                        </div>
                                        <div className='educationEnd'>
                                            <label htmlFor={`end_${program.id}`}>End Date:</label>
                                            <input type='date' id={`end_${program.id}`} className='education' placeholder={program.end} onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <div className='educationDescription'>
                                        <label htmlFor={`description_${program.id}`}>Description:</label>
                                        <textarea id={`description_${program.id}`} className='education' placeholder={program.description} onChange={handleChange}></textarea>
                                    </div>
                                    <button type='button' id={program.id} className='education' onClick={removeExperience}>Delete</button>
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