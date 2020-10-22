import ACTIONS from './actionTypes';


// set default state values
const defaultState = [
    { 
        title: 'Post 1 title', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' 
    }
];


// define the reducer
const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        case ACTIONS.CREATE_POST:
            return [ ...state, payload.post ];

        case ACTIONS.UPDATE_POST:
            let updated = [ ...state ];
            updated[payload.id] = payload.post;

            return updated;

        default:
            return state;
    }

};

export default reducer;