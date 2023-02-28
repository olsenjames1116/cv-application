import React from "react";

export default class WorkInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { work, handleChange } = this.props;

        return (
            <fieldset>
                <legend>Work Experience</legend>
                <ul>
                    {
                        work.map((job) => {
                            return (                        
                                <li>
                                    <label htmlFor={`company_${job.id}`}>Company:</label>
                                    <input type='text' id={`company_${job.id}`} className='work' onChange={handleChange}></input>
                                    <label htmlFor={`position_${job.id}`}>Position:</label>
                                    <input type='text' id={`position_${job.id}`} className='work' onChange={handleChange}></input>
                                    <label htmlFor={`start_${job.id}`}>Start Date:</label>
                                    <input type='date' id={`start_${job.id}`} className='work' onChange={handleChange}></input>
                                    <label htmlFor={`end_${job.id}`}>End Date:</label>
                                    <input type='date' id={`end_${job.id}`} className='work' onChange={handleChange}></input>
                                    <label htmlFor={`description_${job.id}`}>Description:</label>
                                    <textarea id={`description_${job.id}`} className='work' onChange={handleChange}></textarea>
                                </li>
                            );
                    })}
                </ul>
            </fieldset>
        );
    }
}