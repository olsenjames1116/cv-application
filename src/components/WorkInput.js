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
                    {work.map((job) => {
                        return (                        
                            <li>
                                <label htmlFor={`company${job.id}`}>Company:</label>
                                <input type='text' id={`company${job.id}`} className='work company' onChange={handleChange}></input>
                                <label htmlFor={`position${job.id}`}>Position:</label>
                                <input type='text' id={`position${job.id}`} className='work position' onChange={handleChange}></input>
                                <label htmlFor={`start${job.id}`}>Start Date:</label>
                                <input type='date' id={`start${job.id}`} className='work start' onChange={handleChange}></input>
                                <label htmlFor={`end${job.id}`}>End Date:</label>
                                <input type='date' id={`end${job.id}`} className='work end' onChange={handleChange}></input>
                                <label htmlFor={`description${job.id}`}>Description:</label>
                                <textarea id={`description${job.id}`} className='work description' onChange={handleChange}></textarea>
                            </li>
                        );
                    })}
                </ul>
            </fieldset>
        );
    }
}