import React, { Component } from 'react';
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { TopAppBarContents } from './components/topAppBarContents';
import { Questionnaire } from './components/questionnaire';
import { SentencePrinter } from './components/sentencePrinter';
import { Cell, Grid, Row } from '@material/react-layout-grid';

class App extends Component {
    state = {
        questions: {
            who: 'Who?',
            what: 'What?',
            when: 'When?',
            where: 'Where?'
        },
        answers: {
            who: '',
            what: '',
            when: '',
            where: ''
        },
        questionnaire: ['who', 'what', 'when', 'where'],
        sentence: ['who', 'what', 'where', 'when']
    };
    constructor () {
        super();
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    handleAnswer (question, answer) {
        this.setState({
            answers: {
                ...this.state.answers,
                [question]: answer
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <TopAppBar>
                    <TopAppBarContents></TopAppBarContents>
                </TopAppBar>
                <TopAppBarFixedAdjust>
                    <Grid>
                        <Row>
                            <Cell>
                                <Questionnaire questions={this.state.questions} questionnaire={this.state.questionnaire} onAnswer={this.handleAnswer}></Questionnaire>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <SentencePrinter sentence={this.state.sentence} answers={this.state.answers}></SentencePrinter>
                            </Cell>
                        </Row>
                    </Grid>
                </TopAppBarFixedAdjust>
            </React.Fragment>
        );
    }
}

export default App;
