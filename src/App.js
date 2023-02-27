import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            contact: {
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
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            ...this.state,
            [ name ]: value
        })

        console.log(this.state);
    }

    // onSubmitForm(event) {
    //     event.preventDefault();
    //     this.setState({

    //     })
    // }

    render() {
        return(
            <div>
                <Input onInputChange={this.handleChange}/>
                <Resume />
            </div>
        );
    }
}
