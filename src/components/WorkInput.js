import React from "react";
import '../styles/WorkInput.css';

// Represents the work experience section of the form
const WorkInput = (props) => {
    const {addExperience, removeExperience, work, handleChange} = props;

    return (
        <fieldset className='work'>
            <legend>Work Experience</legend>
            <ul className='work'>
                {/* Display all the work experience to allow the user to edit them */}
                {
                    work.map((job) => {
                        return (                        
                            <li key={job.id}>
                                <div>
                                    <div className='company'>
                                        <label htmlFor={`company_${job.id}`}>Company:</label>
                                        <input type='text' id={`company_${job.id}`} className='work' placeholder={job.company} onChange={handleChange}></input>
                                    </div>
                                    <div className='position'>
                                        <label htmlFor={`position_${job.id}`}>Position:</label>
                                        <input type='text' id={`position_${job.id}`} className='work' placeholder={job.position} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div>
                                    <div className='workStart'>
                                        <label htmlFor={`start_${job.id}`}>Start Date:</label>
                                        <input type='date' id={`start_${job.id}`} className='work' placeholder={job.start} onChange={handleChange}></input>
                                    </div>
                                    <div className='workEnd'>
                                        <label htmlFor={`end_${job.id}`}>End Date:</label>
                                        <input type='date' id={`end_${job.id}`} className='work' placeholder={job.end} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className='workDescription'>
                                    <label htmlFor={`description_${job.id}`}>Description:</label>
                                    <textarea id={`description_${job.id}`} className='work' placeholder={job.description} onChange={handleChange}></textarea>
                                </div>
                                <button type='button' id={job.id} className='work' onClick={removeExperience}>Delete</button>
                            </li>
                        );
                })}
            </ul>
            <button type='button' className='work' onClick={addExperience}>Add</button>
        </fieldset>
    );
}

export default WorkInput;