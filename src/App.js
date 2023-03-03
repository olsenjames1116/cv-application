import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';
import "./styles/App.css";

export default class App extends React.Component {
    constructor() {
        super();

        // Given some base values to be used as examples to the user
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
                    description: 'Graduated with honors'
                }
            ],
            misc: [
                {
                    id: uniqid(),
                    organization: 'Empire State University Labs',
                    position: 'Researcher',
                    start: '2016-01-01',
                    end: '2018-05-31',
                    description: 'Worked under the great Dr. Octavius'
                }
            ]
        }

        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Adds a new blank work experience input field
    addWork() {
        this.setState({...this.state, work: this.state.work.concat({ id: uniqid(), company: 'Avengers', position: 'Hero', start: '2018-06-01', end: '2023-02-28', description: 'A member of earth\'s mightiest heros!' })})
    }

    // Adds a new blank education input field
    addEducation() {
        this.setState({...this.state, education: this.state.education.concat({ id: uniqid(), school: 'Empire State University', curriculum: 'Biochemistry', start: '2014-01-01', end: '2018-05-31', description: '' })})
    }

    // Adds a new blank misc experience input field
    addMisc() {
        this.setState({...this.state, misc: this.state.misc.concat({ id: uniqid(), organization: 'Empire State University Labs', position: 'Researcher', start: '2016-01-01', end: '2018-05-31', description: '' })})
    }

    // Reached when any of the add buttons have been pressed. Controls traffic to the correct function
    addExperience(event) {
        const { className } = event.target;

        switch(className) {
            case 'work':
                this.addWork();
                break;
            case 'education':
                this.addEducation();
                break;
            default :
                this.addMisc();
        }
    }

    // Removes work experience from the form and resume
    removeWork(id) {
        const { work } = this.state;
        const index = work.findIndex((job) => job.id === id);

        this.setState({...this.state, work: [...work.slice(0, index), ...work.slice(index + 1)]});
    }

    // Removes education from the form and resume
    removeEducation(id) {
        const { education } = this.state;
        const index = education.findIndex((program) => program.id === id);

        this.setState({...this.state, education: [...education.slice(0, index), ...education.slice(index + 1)]});
    }

    // Removes misc experience from the form and resume
    removeMisc(id) {
        const { misc } = this.state;
        const index = misc.findIndex((experience) => experience.id === id);

        this.setState({...this.state, misc: [...misc.slice(0, index), ...misc.slice(index + 1)]});
    }

    // Reached when any of the delete buttons have been pressed. Controls traffic to the correct function
    removeExperience(event) {
        const { className, id } = event.target;

        switch(className) {
            case 'work':
                this.removeWork(id);
                break;
            case 'education':
                this.removeEducation(id);
                break;
            default :
                this.removeMisc(id);
                break;
        }
    }

    // Changes state in the contact section
    contactChange(id, value) {
        this.setState({...this.state, contact: { ...this.state.contact, [ id ]: value }});
    }

    // Changes state in the contact section
    addressChange(id, value) {
        this.setState({...this.state, contact: {...this.state.contact, address: { ...this.state.contact.address, [ id ]: value }}});
    }

    // Changes state in the contact section
    summaryChange(value) {
        this.setState({...this.state, summary: value});
    }

    // Changes state in the contact section
    skillsChange(value) {
        this.setState({...this.state, skills: value});
    }

    // Changes state in the contact section
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

    // Changes state in the contact section
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

    // Changes state in the contact section
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
    

    // Reached whenever a change has been made in an input field. Controls traffic to the correct function
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

    render() {
        return(
            <div className='container'>
                <Input state={this.state} addExperience={this.addExperience} removeExperience={this.removeExperience} handleChange={this.handleChange} />
                <Resume state={this.state}/>
            </div>
        );
    }
}
