import React, { Component } from 'react';
import { Question } from './question';
import { ProgressBar } from './progressBar';

export class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    handleAnswer (question, answer) {
        this.props.onAnswer(question, answer);
    }
    render() {
        return (
            <div className="questionnaire">
                <ProgressBar></ProgressBar>
                <Question
                    question="what"
                    title={this.props.questions['what']}
                    onAnswer={this.handleAnswer}></Question>
            </div>
        );
    }
}
