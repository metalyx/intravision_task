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