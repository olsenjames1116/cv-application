import React from "react";

export default class MiscInput extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Misc Experience</legend>
                <div>
                    <label htmlFor='organization'>Organization:</label>
                    <input type='text' id='organization'></input>
                    <label htmlFor='miscPosition'>Position:</label>
                    <input type='text' id='miscPosition'></input>
                    <label htmlFor='miscStart'>Start Date:</label>
                    <input type='date' id='miscStart'></input>
                    <label htmlFor='miscEnd'>End Date:</label>
                    <input type='date' id='miscEnd'></input>
                    <label htmlFor='miscDescription'>Description:</label>
                    <textarea id='miscDescription'></textarea> 
                </div>
            </fieldset>
        );
    }
}