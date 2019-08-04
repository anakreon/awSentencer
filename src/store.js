import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = [ thunk ];

let store;

export const getInstance = () => {
    if (!store) {
        store = createStore(
            reducer,
            applyMiddleware(...middleware)
        );
    }
    return store;
};