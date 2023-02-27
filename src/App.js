import React from 'react';
import Input from './components/Input.js';
import Resume from './components/Resume.js';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Input />
                <Resume />
            </div>
        );
    }
}
