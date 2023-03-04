import React, {useState} from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';
import uniqid from 'uniqid';
import "./styles/App.css";

const App = () => {
    // Given some base values to be used as examples to the user
    const [state, setState] = useState({
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
    });

    // Adds a new blank work experience input field
    const addWork = () => {
        setState({...state, work: state.work.concat({ id: uniqid(), company: 'Avengers', position: 'Hero', start: '2018-06-01', end: '2023-02-28', description: 'A member of earth\'s mightiest heros!' })})
    }

    // Adds a new blank education input field
    const addEducation = () => {
        setState({...state, education: state.education.concat({ id: uniqid(), school: 'Empire State University', curriculum: 'Biochemistry', start: '2014-01-01', end: '2018-05-31', description: '' })})
    }

    // Adds a new blank misc experience input field
    const addMisc = () => {
        setState({...state, misc: state.misc.concat({ id: uniqid(), organization: 'Empire State University Labs', position: 'Researcher', start: '2016-01-01', end: '2018-05-31', description: '' })})
    }

    // Reached when any of the add buttons have been pressed. Controls traffic to the correct function
    const addExperience = (event) => {
        const { className } = event.target;

        switch(className) {
            case 'work':
                addWork();
                break;
            case 'education':
                addEducation();
                break;
            default :
                addMisc();
        }
    }

    // Removes work experience from the form and resume
    const removeWork = (id) => {
        const { work } = state;
        const index = work.findIndex((job) => job.id === id);

        setState({...state, work: [...work.slice(0, index), ...work.slice(index + 1)]});
    }

    // Removes education from the form and resume
    const removeEducation = (id) => {
        const { education } = state;
        const index = education.findIndex((program) => program.id === id);

        setState({...state, education: [...education.slice(0, index), ...education.slice(index + 1)]});
    }

    // Removes misc experience from the form and resume
    const removeMisc = (id) => {
        const { misc } = state;
        const index = misc.findIndex((experience) => experience.id === id);

        setState({...state, misc: [...misc.slice(0, index), ...misc.slice(index + 1)]});
    }

    // Reached when any of the delete buttons have been pressed. Controls traffic to the correct function
    const removeExperience = (event) => {
        const { className, id } = event.target;

        switch(className) {
            case 'work':
                removeWork(id);
                break;
            case 'education':
                removeEducation(id);
                break;
            default :
                removeMisc(id);
                break;
        }
    }

    // Changes state in the contact section
    const contactChange = (id, value) => {
        setState({...state, contact: { ...state.contact, [ id ]: value }});
    }

    // Changes state in the contact section
    const addressChange = (id, value) => {
        setState({...state, contact: {...state.contact, address: { ...state.contact.address, [ id ]: value }}});
    }

    // Changes state in the contact section
    const summaryChange = (value) => {
        setState({...state, summary: value});
    }

    // Changes state in the contact section
    const skillsChange = (value) => {
        setState({...state, skills: value});
    }

    // Changes state in the contact section
    const workChange = (key, id, value) => {
        const { work } = state;
        const index = work.findIndex((job) => job.id === id);

        if(work.length === 1) {
            setState({...state, work: [Object.assign({...work[index], [ key ]: value})]});
        }

        if(work.length > 1) {        
            setState({...state, work: [...work.slice(0, index), Object.assign({...work[index], [ key ]: value}), ...work.slice(index + 1)]});
        }        
    }

    // Changes state in the contact section
    const educationChange = (key, id, value) => {
        const { education } = state;
        const index = education.findIndex((program) => program.id === id);

        if(education.length === 1) {
            setState({...state, education: [Object.assign({...education[index], [ key ]: value})]});
        }

        if(education.length > 1) {
            setState({...state, education: [...education.slice(0, index), Object.assign({...education[index], [ key ]: value}), ...education.slice(index + 1)]});
        }
    }

    // Changes state in the contact section
    const miscChange = (key, id, value) => {
        const { misc } = state;
        const index = misc.findIndex((experience) => experience.id === id);

        if(misc.length === 1) {
            setState({...state, misc: [Object.assign({...misc[index], [ key ]: value})]});
        }

        if(misc.length > 1) {
            setState({...state, misc: [...misc.slice(0, index), Object.assign({...misc[index], [ key ]: value}), ...misc.slice(index + 1)]});
        }
    }
    

    // Reached whenever a change has been made in an input field. Controls traffic to the correct function
    const handleChange = (event) => {
        const { className, id, value } = event.target;

        if(id === 'firstName' || id === 'lastName' || id === 'phone' || id === 'email') {
            contactChange(id, value);
        }

        if(id === 'street' || id === 'city' || id === 'state' || id === 'zip') {
            addressChange(id, value);
        }

        if(id === 'summary') {
            summaryChange(value);
        }

        if(id === 'skills') {
            skillsChange(value);
        }

        if(className === 'work') {
            const workId = id.split('_');
            workChange(workId[0], workId[1], value);
        }

        if(className === 'education') {
            const educationId = id.split('_');
            educationChange(educationId[0], educationId[1], value);
        }

        if(className === 'misc') {
            const miscId = id.split('_');
            miscChange(miscId[0], miscId[1], value);
        }
    }

    return(
        <div className='container'>
            <Input state={state} addExperience={addExperience} removeExperience={removeExperience} handleChange={handleChange} />
            <Resume state={state}/>
        </div>
    );
}

export default App;
