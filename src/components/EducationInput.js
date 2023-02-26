import React from "react";

export default class EducationInput extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                <div>
                    <label htmlFor='curriculum'>Curriculum:</label>
                    <input type='text' id='curriculum'></input>
                    <label htmlFor='school'>School:</label>
                    <input type='text' id='school'></input>
                    <label htmlFor='schoolStart'>Start Date:</label>
                    <input type='date' id='schoolStart'></input>
                    <label htmlFor='schoolEnd'>End Date:</label>
                    <input type='date' id='schoolEnd'></input>
                    <label htmlFor='schoolDescription'>Description:</label>
                    <textarea id='schoolDescription'></textarea>
                </div>
            </fieldset>
        );
    }
}