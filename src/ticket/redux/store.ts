import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ticketReducer from './reducer';
import requestData from './saga';

const sagaMiddleware = createSagaMiddleware();
const win: any = window;

const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
    ticketReducer,
    enhancer
);
sagaMiddleware.run(requestData);
export default store;
