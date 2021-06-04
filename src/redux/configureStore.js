import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { requests } from './requests/reducers';
import { exactRequest } from './exactRequest/reducers';
import { priorities } from './priorities/reducers';
import { status } from './status/reducers';
import { users } from './users/reducers';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            requests: requests,
            exactRequest: exactRequest,
            priorities: priorities,
            status: status,
            users: users
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
