import { combineReducers } from 'redux';
import answers from './answersReducer';
import currentQuestionKey  from './currentQuestionKeyReducer';
import questions from './questionsReducer';
import sentence from './sentenceReducer';

const rootReducer = combineReducers({
    answers,
    currentQuestionKey,
    questions,
    sentence
});

export default rootReducer
