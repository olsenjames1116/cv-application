import React from "react";

export default class WorkInput extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Work Experience</legend>
                <div>
                    <label htmlFor='company'>Company:</label>
                    <input type='text' id='company'></input>
                    <label htmlFor='workPosition'>Position:</label>
                    <input type='text' id='workPosition'></input>
                    <label htmlFor='workStart'>Start Date:</label>
                    <input type='date' id='workStart'></input>
                    <label htmlFor='workEnd'>End Date:</label>
                    <input type='date' id='workEnd'></input>
                    <label htmlFor='workDescription'>Description:</label>
                    <textarea id='workDescription'></textarea> 
                </div>
            </fieldset>
        );
    }
}