import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

const middleware = [logger]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store;