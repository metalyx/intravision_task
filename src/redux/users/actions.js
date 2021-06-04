import { api_getUsers } from "../../shared/api/api";


// получение всех пользователей
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
};

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