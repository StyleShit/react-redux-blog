import ACTIONS from './actionTypes';
import { API_ACTIONS } from '../middlewares/api';


// set default state values
const defaultState = [];


// define the reducer
const reducer = ( state = defaultState, { type, payload } ) => {

    // throw non-api calls
    if( type !== API_ACTIONS.SUCCESS )
        return state;
        

    // check which action initiated the api call
    switch( payload.label )
    {
        // fetch all posts
        case ACTIONS.FETCH:
            return payload.data;

        // save post
        case ACTIONS.SAVE:
            return savePost( state, payload.data );

        // delete post
        case ACTIONS.DELETE:
            return deletePost( state, payload.data );

        default:
            return state;
    }

};

export default reducer;


/**
 * Reducer helper functions
 */

const savePost = ( state, post ) => {
    let updated = [ ...state ];

    const selectedPostId = updated.findIndex( p => ( p._id === post._id ));

    // create new post
    if( selectedPostId === -1 )
        updated = [ ...updated, post ];

    // update existing post
    else
        updated[selectedPostId] = post;

    return updated;
}


const deletePost = ( state, post ) => {

    let updated = state.filter( p => ( p._id !== post._id ));

    return updated;

}