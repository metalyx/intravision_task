export const users = (state = {
    isLoading: true,
    errmess: null,
    users: []
}, action) => {
    switch(action.type) {
        case "ADD_USERS":
            return {...state, isLoading: false, errmess: null, users: action.payload};
        case "USERS_FAILED":
            return {...state, isLoading: false, errmess: action.payload, users: []};
        case "USERS_LOADING":
            return {...state, isLoading: true, errmess: null, users: []};
        default:
            return state;
    }
}