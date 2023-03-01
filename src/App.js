import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            contact: {            
                firstName: 'Peter',
                lastName: 'Parker',
                address: {
                    street: '1234 Web Blvd',
                    city: 'Queens',
                    state: 'NY',
                    zip: 11366
                },
                phone: 123456789,
                email: 'spidey@avengers.com'
            },
            summary: 'Your friendly neighborhood spider! I am a master at stopping crime, research & development, comedic timing and web development.',
            skills: 'Engineering - Wall-Climbing - Superhuman Strength - Enhanced Senses',
            work: [
                {
                    id: uniqid(), 
                    company: 'Avengers',
                    position: 'Hero',
                    start: '2018-06-01',
                    end: '2023-02-28',
                    description: 'A member of earth\'s mightiest heros!' 
                }
            ],
            education: [
                {
                    id: uniqid(),
                    school: 'Empire State University',
                    curriculum: 'Biochemistry',
                    start: '2014-01-01',
                    end: '2018-05-31',
                    description: ''
                }
            ],
            misc: [
                {
                    id: uniqid(),
                    organization: 'Empire State University Labs',
                    position: 'Researcher',
                    start: '2016-01-01',
                    end: '2018-05-31',
                    description: ''
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
            this.setState({...this.state, work: [Object.assign({...work[index], [ key ]: value})]});
        }

        if(work.length > 1) {        
            this.setState({...this.state, work: [...work.slice(0, index), Object.assign({...work[index], [ key ]: value}), ...work.slice(index + 1)]});
        }        
    }

    educationChange(key, id, value) {
        const { education } = this.state;
        const index = education.findIndex((program) => program.id === id);

        if(education.length === 1) {
            this.setState({...this.state, education: [Object.assign({...education[index], [ key ]: value})]});
        }

        if(education.length > 1) {
            this.setState({...this.state, education: [...education.slice(0, index), Object.assign({...education[index], [ key ]: value}), ...education.slice(index + 1)]});
        }
    }

    miscChange(key, id, value) {
        const { misc } = this.state;
        const index = misc.findIndex((experience) => experience.id === id);

        if(misc.length === 1) {
            this.setState({...this.state, misc: [Object.assign({...misc[index], [ key ]: value})]});
        }

        if(misc.length > 1) {
            this.setState({...this.state, misc: [...misc.slice(0, index), Object.assign({...misc[index], [ key ]: value}), ...misc.slice(index + 1)]});
        }
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
            const educationId = id.split('_');
            this.educationChange(educationId[0], educationId[1], value);
        }

        if(className === 'misc') {
            const miscId = id.split('_');
            this.miscChange(miscId[0], miscId[1], value);
        }
    }

    submitForm(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <Input state={this.state} handleChange={this.handleChange} submitForm={this.submitForm}/>
                <Resume state={this.state}/>
            </div>
        );
    }
}
