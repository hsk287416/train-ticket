import { createStore, combineReducers, applyMiddleware } from 'redux';
import ticketReducer from './reducer';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(ticketReducer),
    applyMiddleware(thunk)
);
