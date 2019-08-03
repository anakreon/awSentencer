import React, { Component } from 'react';
import { SentenceCard } from './sentenceCard';

export class SentencePrinter extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick () {

    }
    render() {
        return (
            <div className="sentence-printer">
                <SentenceCard
                    headline="Your sentence is:"
                    buttonLabel="Go again!"
                    onButtonClick={this.handleButtonClick}>
                    {this.printSentence()}
                </SentenceCard>
            </div>   
        );
    }
    printSentence () {
        return this.props.sentence.map((question) => (
            <React.Fragment key={question}>{this.props.answers[question]}&nbsp;</React.Fragment>
        ));
    }
}
