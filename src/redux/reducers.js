export const Requests = (state = {
    isLoading: true,
    errMess: null,
    requests: []
}, action) => {
    switch(action.type) {
        case "ADD_REQUESTS":
            return {...state, isLoading: false, errMess: null, requests: action.payload};
        case "REQUESTS_FAILED":
            return {...state, isLoading: false, errMess: action.payload, requests: []};
        case "REQUESTS_LOADING":
            return {...state, isLoading: true, errMess: null, requests: []};
        default: 
            return state;
    }
}

// export const componentRequest = (state = {
//     isOpen: false,
//     id: null
// }, action) => {
//     switch(action.type) {
//         case "OPEN_CHANGE_REQUEST":
//             return {...state, isOpen: true, id: action.payload};
//         case "CLOSE_CHANGE_REQUEST":
//             return {...state, isOpen: false};
//         case "IS_OPEN_CHANGE_REQUEST":
//             return state;
//         default:
//             return state;
//     }
// }

export const exactRequest = (state = {
    isLoading: true,
    errMess: null,
    request: [],
    isOpen: false
}, action) => {
    switch(action.type) {
        case "ADD_EXACT_REQUEST":
            return {...state, isLoading: false, errMess: null, request: action.payload};
        case "EXACT_REQUEST_FAILED":
            return {...state, isLoading: false, errMess: action.payload, request: []};
        case "EXACT_REQUEST_LOADING":
            return {...state, isLoading: true, errMess: null, request: []};
        case "OPEN_CHANGE_REQUEST":
            return {...state, isLoading: false, errMess: null, isOpen: true};
        case "CLOSE_CHANGE_REQUEST":
            return {...state, isLoading: false, errMess: null, isOpen: false};
        default:
            return state;
    }
}

export const priorities = (state = {
    isLoading: true,
    errmess: null,
    priorities: []
}, action) => {
    switch(action.type) {
        case "ADD_PRIORITIES":
            return {...state, isLoading: false, errmess: null, priorities: action.payload};
        case "LOADING_PRIORITIES":
            return {...state, isLoading: true, errmess: null, priorities: []};
        case "FAILED_PRIORITIES":
            return {...state, isLoading: false, errmess: action.payload, priorities: []};
        default:
            return state;
    }
}

export const status = (state ={
    isLoading: true,
    errmess: null,
    status: []
}, action) => {
    switch(action.type) {
        case "ADD_STATUS":
            return {...state, isLoading: false, errmess: null, status: action.payload};
        case "STATUS_FAILED":
            return {...state, isLoading: false, errmess: action.payload, status: []};
        case "STATUS_LOADING":
            return {...state, isLoading: true, errmess: null, status: []};
        default:
            return state;
    }
}

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
