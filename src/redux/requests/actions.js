import { api_getRequests } from "../../shared/api/api";


// Получение всех заявок
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
};

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
