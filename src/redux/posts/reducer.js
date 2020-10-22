import ACTIONS from './actionTypes';


// set default state values
const defaultState = [];


// define the reducer
const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.CREATE_POST:
            return { ...state, post: payload.post };

        default:
            return state;
    }

};

export default reducer;