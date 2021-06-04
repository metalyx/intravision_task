import { api_getExactRequest, api_putRequest, api_postNewRequest } from "../../shared/api/api";
import { fetchRequests } from "../requests/actions";

// получение конкретной заявки для редактирования
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
};

export const addExactRequest = (request) => ({
    type: 'ADD_EXACT_REQUEST',
    payload: request
});

export const exactRequestFailed = (errmess) => ({
    type: 'EXACT_REQUEST_FAILED',
    payload: errmess
});
export const exactRequestLoading = () => ({
    type: 'EXACT_REQUEST_LOADING'
});


export const openChangeRequest = () => ({
    type: 'OPEN_CHANGE_REQUEST',
});
export const closeChangeRequest = () => ({
    type: 'CLOSE_CHANGE_REQUEST',
});

// пуш новой заявки
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
        .then(
                () => dispatch(fetchRequests())
            )
        .catch(error => dispatch(exactRequestFailed(error.message)));
};

// изменение заявки после редактирования
export const putRequest = (data) => (dispatch) => {
    const data_put = JSON.stringify(data);
    return fetch(api_putRequest, {
        method: 'PUT',
        body: data_put,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            // return response;
            // window.location.reload();
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
    .then(
        () => dispatch(getExactRequest(data.id))
    )
    .then(
        () => dispatch(fetchRequests())
    )
};