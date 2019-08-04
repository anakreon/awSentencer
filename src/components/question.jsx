import React, { Component } from 'react';
import TextField, {Input} from '@material/react-text-field';
import Button from '@material/react-button';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';

class Question extends Component {
    constructor(props) {
        super(props);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    handleAnswer (event) {
        this.props.updateAnswer(event.currentTarget.value);
    }
    onKeyPress (event) {
        if (event.key === 'Enter') {
            this.props.confirm();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Headline6 className="headline">
                    Question: <i>{this.props.title}</i>
                </Headline6>
                <div className="question-inputs">
                    <TextField outlined label={this.props.title} className="question-text-field">
                        <Input value={this.props.answer} onChange={this.handleAnswer} onKeyPress={this.onKeyPress} />
                    </TextField>
                    <Button outlined onClick={this.props.confirm}>
                        { this.props.buttonLabel }
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

Question.propTypes = {
    title: PropTypes.string.isRequired,
    answer: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    updateAnswer: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired
};

export default Question; 