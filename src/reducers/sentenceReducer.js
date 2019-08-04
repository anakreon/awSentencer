import { PRINT_SENTENCE, RESET } from '../actions/types';

const sentenceOrder = ['who', 'what', 'where', 'when'];

const buildSentence = (answers) => {
    return sentenceOrder
        .map((questionKey) => answers[questionKey])
        .join(' ');
};

export default function (state = '', action) {
    switch (action.type) {
        case PRINT_SENTENCE:
            const answers = action.payload;
            return buildSentence(answers);
        case RESET:
            return '';
        default:
            return state;
    }
}
