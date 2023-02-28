import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';

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
            },
            summary: '',
            skills: '',
            work: [
                {
                    id: uniqid(), 
                    company: '',
                    position: '',
                    start: '',
                    end: '',
                    description: '' 
                }
            ],
            education: [
                {
                    id: uniqid()

                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    contactChange(id, value) {
        this.setState({...this.state, contact: { ...this.state.contact, [ id ]: value }});
    }

    addressChange(id, value) {
        this.setState({...this.state, contact: {...this.state.contact, address: { ...this.state.contact.address, [ id ]: value }}});
    }

    summaryChange(value) {
        this.setState({...this.state, summary: value});
    }

    skillsChange(value) {
        this.setState({...this.state, skills: value});
    }

    workChange(key, id, value) {
        const { work } = this.state;
        const index = work.findIndex((job) => job.id === id);

        if(work.length === 1) {
            this.setState({...this.state, work: [Object.assign({...this.state.work[index], [ key ]: value})]});
        }

        if(work.length > 1) {        
            this.setState({...this.state, work: [...this.state.work.slice(0, index), Object.assign({...this.state.work[index], [ key ]: value}), this.state.work.slice(index + 1)]});
        }        
    }

    educationChange() {

    }

    handleChange(event) {
        const { className, id, value } = event.target;

        if(id === 'firstName' || id === 'lastName' || id === 'phone' || id === 'email') {
            this.contactChange(id, value);
        }

        if(id === 'street' || id === 'city' || id === 'state' || id === 'zip') {
            this.addressChange(id, value);
        }

        if(id === 'summary') {
            this.summaryChange(value);
        }

        if(id === 'skills') {
            this.skillsChange(value);
        }

        if(className === 'work') {
            const workId = id.split('_');
            this.workChange(workId[0], workId[1], value);
        }

        if(className === 'education') {

        }
    }

    submitForm(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { work } = this.state;

        return(
            <div>
                <Input work={work} handleChange={this.handleChange} onFormSubmit={this.submitForm}/>
                <Resume state={this.state}/>
            </div>
        );
    }
}
