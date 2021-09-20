import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import authReducer from './reducers/auth';
import countReducer from './reducers/count';

const reducers = combineReducers({
    count: countReducer,
    auth: authReducer,
})
const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;