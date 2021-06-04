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