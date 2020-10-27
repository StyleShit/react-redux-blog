import ACTIONS from './actionTypes';


// set default state values
const defaultState = [];


// define the reducer
const reducer = ( state = defaultState, { type, payload } ) => {

    switch( type )
    {
        // fetch all posts
        case ACTIONS.SET:
            return payload.posts;

        // save post
        case ACTIONS.SAVE:
            return savePost( state, payload.post );

        // delete post
        case ACTIONS.DELETE:
            return deletePost( state, payload.post );

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