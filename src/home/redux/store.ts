import { createStore, applyMiddleware, compose } from 'redux';
import homeReducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const win: any = window;

const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
    homeReducer,
    enhancer
);
sagaMiddleware.run(saga);
export default store;
