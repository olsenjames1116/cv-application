import React from "react";

export default class WorkInput extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Work Experience:</legend>
                <div>
                    <label htmlFor='company'>Company:</label>
                    <input type='text' id='company'></input>
                    <label htmlFor='position'>Position:</label>
                    <input type='text' id='position'></input>
                    <label htmlFor='startDate'>Start Date:</label>
                    <input type='datetime-local' id='startDate'></input>
                    <label htmlFor='endDate'>End Date:</label>
                    <input type='datetime-local' id='endDate'></input>
                    <label htmlFor='description'>Description:</label>
                    <textarea id='description'></textarea> 
                </div>
            </fieldset>
        );
    }
}