import { PRINT_SENTENCE, RESET } from '../actions/types';
import * as data from '../data.json';

const sentenceOrder = data.sentenceOrder;

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
