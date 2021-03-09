import * as ActionTypes from "./ActionTypes";


export const UserData = (state = {
    isLoading: true,
    errMess: null,
    userdata: []
}, action) => {
    switch(action.type) {

        case ActionTypes.SHOW_USERDATA:
            return { ...state, isLoading: false, errMess: null, userdata: action.payload };

        case ActionTypes.LOADING_USERDATA:
            return { ...state, isLoading: true, errMess: null, userdata: [] };

        case ActionTypes.FAILED_USERDATA:
            return { ...state, isLoading: false, errMess: action.payload };


        default:
            return state;
    
}

};