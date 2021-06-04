import { api_getStatus } from "../../shared/api/api";

// получение всех статусов
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
};

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