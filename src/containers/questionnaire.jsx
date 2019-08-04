import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from '../components/question';
import ProgressBar from '../components/progressBar';
import { goToNextQuestion, printResultSentence, updateAnswer } from '../actions';

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.confirm = this.confirm.bind(this);
    }
    updateAnswer (newAnswer) {
        this.props.updateAnswer(this.props.currentQuestionKey, newAnswer);
    }
    render() {
        return (
            <div className="questionnaire">
                <ProgressBar progress={this.props.progress}></ProgressBar>
                <Question
                    title={this.props.questionTitle}
                    answer={this.props.questionAnswer}
                    buttonLabel={this.getButtonLabel()}
                    updateAnswer={this.updateAnswer}
                    confirm={this.confirm}>
                </Question>
            </div>
        );
    }
    getButtonLabel () {
        if (this.props.isLastQuestion) {
            return 'Finish';
        } else {
            return 'Next';
        }
    }
    confirm () {
        if (this.props.isLastQuestion) {
            this.props.printResult(this.props.answers);
        } else {
            this.props.goToNextQuestion(this.props.nextQuestionKey);
        }
    }
}

Questionnaire.propTypes = {
    questionTitle: PropTypes.string.isRequired,
    questionAnswer: PropTypes.string,
    isLastQuestion: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    currentQuestionKey: PropTypes.string.isRequired,
    nextQuestionKey: PropTypes.string,
    answers: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const questionKeys = Object.keys(state.questions);
    const currentQuestionIndex = questionKeys.indexOf(state.currentQuestionKey);
    return {
        questionTitle: state.questions[state.currentQuestionKey],
        questionAnswer: state.answers[state.currentQuestionKey],
        isLastQuestion: currentQuestionIndex >= questionKeys.length - 1,
        progress: currentQuestionIndex / (questionKeys.length - 1),
        currentQuestionKey: state.currentQuestionKey,
        nextQuestionKey: questionKeys[currentQuestionIndex + 1],
        answers: state.answers
    };
};

export default connect(
    mapStateToProps,
    (dispatch) => ({
        updateAnswer: (currentQuestionKey, newAnswer) => dispatch(updateAnswer(currentQuestionKey, newAnswer)),
        goToNextQuestion: (nextQuestion) => dispatch(goToNextQuestion(nextQuestion)),
        printResult: (answers) => dispatch(printResultSentence(answers))
    })
)(Questionnaire);