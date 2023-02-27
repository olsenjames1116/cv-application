import React from "react";

export default class WorkInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
                <legend>Work Experience</legend>
                <div>
                    <label htmlFor='company'>Company:</label>
                    <input type='text' id='company' onChange={this.props.onInputChange}></input>
                    <label htmlFor='workPosition'>Position:</label>
                    <input type='text' id='workPosition' onChange={this.props.onInputChange}></input>
                    <label htmlFor='workStart'>Start Date:</label>
                    <input type='date' id='workStart' onChange={this.props.onInputChange}></input>
                    <label htmlFor='workEnd'>End Date:</label>
                    <input type='date' id='workEnd' onChange={this.props.onInputChange}></input>
                    <label htmlFor='workDescription'>Description:</label>
                    <textarea id='workDescription' onChange={this.props.onInputChange}></textarea> 
                </div>
            </fieldset>
        );
    }
}