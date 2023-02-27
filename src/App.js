import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip: 0
            },
            phone: 0,
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        const {id, value} = event.target;

        console.log(event.target.id);

        this.setState({
            [ id ]: value
        })

        console.log(this.state);
    }

    submitForm(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <Input onInputChange={this.handleChange} onFormSubmit={this.submitForm}/>
                <Resume state={this.state}/>
            </div>
        );
    }
}
