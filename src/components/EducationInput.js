import React from "react";

export default class EducationInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                <div>
                    <label htmlFor='curriculum'>Curriculum:</label>
                    <input type='text' id='curriculum' onChange={this.props.onInputChange}></input>
                    <label htmlFor='school'>School:</label>
                    <input type='text' id='school' onChange={this.props.onInputChange}></input>
                    <label htmlFor='schoolStart'>Start Date:</label>
                    <input type='date' id='schoolStart' onChange={this.props.onInputChange}></input>
                    <label htmlFor='schoolEnd'>End Date:</label>
                    <input type='date' id='schoolEnd' onChange={this.props.onInputChange}></input>
                    <label htmlFor='schoolDescription'>Description:</label>
                    <textarea id='schoolDescription' onChange={this.props.onInputChange}></textarea>
                </div>
            </fieldset>
        );
    }
}