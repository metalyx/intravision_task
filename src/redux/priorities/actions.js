import { api_getPriorities } from "../../shared/api/api";


// получение всех приоритетов
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
};

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