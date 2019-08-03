import React, { Component } from 'react';
import { Question } from './question';

export class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: ['Who', 'What', 'When', ' Where']
        };
    }
    render() {
        return (
            <div>
                {this.state.questions.map((question) => {
                    <Question
                        key="{question}"
                        question="{question}"></Question>;
                })}
            </div>
        );
    }
}
