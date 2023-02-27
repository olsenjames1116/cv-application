import React from "react";

export default class MiscInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
                <legend>Misc Experience</legend>
                <div>
                    <label htmlFor='organization'>Organization:</label>
                    <input type='text' id='organization' onChange={this.props.onInputChange}></input>
                    <label htmlFor='miscPosition'>Position:</label>
                    <input type='text' id='miscPosition' onChange={this.props.onInputChange}></input>
                    <label htmlFor='miscStart'>Start Date:</label>
                    <input type='date' id='miscStart' onChange={this.props.onInputChange}></input>
                    <label htmlFor='miscEnd'>End Date:</label>
                    <input type='date' id='miscEnd' onChange={this.props.onInputChange}></input>
                    <label htmlFor='miscDescription'>Description:</label>
                    <textarea id='miscDescription' onChange={this.props.onInputChange}></textarea> 
                </div>
            </fieldset>
        );
    }
}