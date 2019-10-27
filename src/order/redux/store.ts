import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import orderReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import requestData from './saga';

const sagaMiddleware = createSagaMiddleware();
const win: any = window;

const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
    orderReducer,
    enhancer
);
sagaMiddleware.run(requestData);
export default store;