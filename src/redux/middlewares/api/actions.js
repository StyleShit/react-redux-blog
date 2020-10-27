import ACTIONS from './actionTypes'


// api starts request
export const apiStart = label => {

    return { 
        type: ACTIONS.START, 
        payload: { label } 
    };

};

// api request was successful
export const apiSuccess = ( label, data ) => {

    return { 
        type: ACTIONS.SUCCESS, 
        payload: { label, data } 
    };

};

// api request failed
export const apiError = ( label, error ) => {

    return { 
        type: ACTIONS.ERROR, 
        payload: { label, error } 
    };

};


// make an api call
export const apiAction = ( payload ) => {

    return {
        type: ACTIONS.API,
        payload
    };

}