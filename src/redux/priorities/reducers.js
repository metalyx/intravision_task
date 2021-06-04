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