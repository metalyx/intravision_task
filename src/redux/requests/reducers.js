export const requests = (state = {
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