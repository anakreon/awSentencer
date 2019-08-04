import { UPDATE_ANSWER, RESET } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_ANSWER:
            return { ...state, [action.id]: action.payload };
        case RESET: 
            return {};
        default:
            return state;
    }
}