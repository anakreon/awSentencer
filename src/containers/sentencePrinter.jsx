import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SentenceCard from '../components/sentenceCard';
import { reset } from '../actions';

const SentencePrinter = ({ sentence, reset }) => {
    if (!sentence) {
        return null;
    }
    return (
        <div className="sentence-printer">
            <SentenceCard
                headline="Your sentence is:"
                buttonLabel="Go again!"
                onButtonClick={reset}>
                <span>{sentence}</span>
            </SentenceCard>
        </div>
    )
};

SentencePrinter.propTypes = {
    sentence: PropTypes.string.isRequired
};

export default connect(
    (state) => ({
        sentence: state.sentence
    }),
    (dispatch) => ({
        reset: () => dispatch(reset())
    })
)(SentencePrinter);