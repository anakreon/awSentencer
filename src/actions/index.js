import { UPDATE_ANSWER, GO_TO_NEXT_QUESTION, PRINT_SENTENCE, RESET } from './types';

export const updateAnswer = (id, newAnswer) => ({
    type: UPDATE_ANSWER,
    id: id,
    payload: newAnswer
});

export const goToNextQuestion = (nextQuestion) => ({
    type: GO_TO_NEXT_QUESTION,
    payload: nextQuestion
});

export const printResultSentence = (answers) => ({
    type: PRINT_SENTENCE,
    payload: answers
});

export const reset = () => ({
    type: RESET
});