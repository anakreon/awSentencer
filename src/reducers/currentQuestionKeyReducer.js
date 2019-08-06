import { GO_TO_NEXT_QUESTION, RESET } from '../actions/types';
import * as data from '../data.json';

const initialQuestion = Object.keys(data.questions).shift();

export default function (state = initialQuestion, action) {
    switch(action.type) {
        case GO_TO_NEXT_QUESTION:
            return action.payload;
        case RESET:
            return initialQuestion;
        default:
            return state;
    }
}