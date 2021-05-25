import Request from '../components/RequestComponent';
import { api_getRequests, api_getExactRequest, api_getPriorities, api_getStatus, api_postNewRequest, api_getUsers, api_putRequest } from '../shared/api/api';

export const requestsLoading = () => ({
    type: 'REQUESTS_LOADING'
});

export const requestsFailed = (errmess) => ({
    type: 'REQUESTS_FAILED',
    payload: errmess
});

export const addRequests = (requests) => ({
    type: 'ADD_REQUESTS',
    payload: requests
});

export const fetchRequests = () => (dispatch) => {
    
    return fetch(api_getRequests)
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(result => dispatch(addRequests(result)))
        .catch(error => dispatch(requestsFailed(error.message)));
}

export const fetchPriorities = () => (dispatch) => {
    return fetch(api_getPriorities)
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(result => dispatch(addPriorities(result)))
        .catch(error => dispatch(prioritiesFailed(error.message)));
}

export const fetchStatus = () => (dispatch) => {
    return fetch(api_getStatus)
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(result => dispatch(addStatus(result)))
        .catch(error => dispatch(statusFailed(error.message)));
}

export const addStatus = (response) => ({
    type: 'ADD_STATUS',
    payload: response
});

export const statusFailed = (errmess) => ({
    type: 'STATUS_FAILED',
    payload: errmess
});

export const statusLoading = () => ({
    type: 'STATUS_LOADING'
});

export const addPriorities = (response) => ({
    type: 'ADD_PRIORITIES',
    payload: response
});
export const prioritiesLoading = () => ({
    type: 'LOADING_PRIORITIES'
});
export const prioritiesFailed = (errmess) => ({
    type: 'FAILED_PRIORITIES',
    payload: errmess
});



export const getExactRequest = (id) => (dispatch) => {
    if(id === -1) {
        dispatch(addExactRequest([]))
    }
    else {
        return fetch(api_getExactRequest + parseInt(id))
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
            .then(response => response.json())
            //test response x2
            
            .then(result => dispatch(addExactRequest(result)))
            // .then(requests => dispatch(addRequests(requests)))
            .catch(error => dispatch(exactRequestFailed(error.message)));
    }
}

export const addExactRequest = (request) => ({
    type: 'ADD_EXACT_REQUEST',
    payload: request
});

export const exactRequestFailed = (errmess) => ({
    type: 'EXACT_REQUEST_FAILED',
    payload: errmess
});


export const openChangeRequest = () => ({
    type: 'OPEN_CHANGE_REQUEST',
});
export const closeChangeRequest = () => ({
    type: 'CLOSE_CHANGE_REQUEST',
})
export const watchChangeRequest = () => ({
    type: 'WATCH_CHANGE_REQUEST',
})

export const postNewRequest = (data) => (dispatch) => {
    return fetch(api_postNewRequest, {
        method: 'POST',
        body: data,
        headers: {
            
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        
        
        .then(result => dispatch(getExactRequest(result)))
        .then(result => dispatch(addExactRequest(result.payload)))
        
        .catch(error => dispatch(exactRequestFailed(error.message)));
}

export const fetchUsers = () => (dispatch) => {
    return fetch(api_getUsers)
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(result => dispatch(addUsers(result)))
        .catch(error => dispatch(usersFailed(error.message)));
}

export const addUsers = (response) => ({
    type: 'ADD_USERS',
    payload: response
});

export const usersFailed = (errmess) => ({
    type: 'USERS_FAILED',
    payload: errmess
});

export const usersLoading = () => ({
    type: 'USERS_LOADING'
});

export const putRequest = (data) => (dispatch) => {
    return fetch(api_putRequest, {
        method: 'PUT',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('SERVER ERROR ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    
        // .then(response => response.json())
        
        // .then(response => console.log(response));
        // .then()
        // .then(result => dispatch(getExactRequest(result)))
        // .then(result => dispatch(addExactRequest(result.payload)))
        
        // .catch(error => dispatch(exactRequestFailed(error.message)));
}