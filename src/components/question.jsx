import React, { Component } from 'react';
import TextField, {Input} from '@material/react-text-field';
import Button from '@material/react-button';
import { Headline6 } from '@material/react-typography';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    handleAnswer (event) {
        this.setState({
            inputValue: event.currentTarget.value
        });
        this.props.onAnswer(this.props.question, event.currentTarget.value);
    }
    render() {
        return (
            <React.Fragment>
                <Headline6 className="headline">
                    Question: <i>{this.props.title}</i>
                </Headline6>
                <div className="question-inputs">
                    <TextField outlined label={this.props.title} className="question-text-field">
                        <Input value={this.state.inputValue} onChange={this.handleAnswer} />
                    </TextField>
                    <Button outlined>
                        Next
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}