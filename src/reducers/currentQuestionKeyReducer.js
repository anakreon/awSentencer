import { GO_TO_NEXT_QUESTION, RESET } from '../actions/types';

export default function (state = 'who', action) {
    switch(action.type) {
        case GO_TO_NEXT_QUESTION:
            return action.payload;
        case RESET:
            return 'who';
        default:
            return state;
    }
}