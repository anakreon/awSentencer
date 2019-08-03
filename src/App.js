import React, { Component } from 'react';
import { Questionnaire } from './components/questionnaire';
import { SentenceBuilder } from './components/sentenceBuilder';
//import './App.css';

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Questionnaire></Questionnaire>
                <SentenceBuilder></SentenceBuilder>
            </React.Fragment>
        );
    }
}

export default App;
