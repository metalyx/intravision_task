import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Requests, exactRequest, priorities, status, users } from '../redux/reducers';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            requests: Requests,
            exactRequest: exactRequest,
            priorities: priorities,
            status: status,
            users: users
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
