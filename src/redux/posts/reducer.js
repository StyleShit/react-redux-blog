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
        // save post
        case ACTIONS.SAVE:
            return savePost( state, payload.id, payload.post );


        // delete post
        case ACTIONS.DELETE:
            return deletePost( state, payload.id );

        default:
            return state;
    }

};

export default reducer;


/**
 * Reducer helper functions
 */

const savePost = ( state, id, post) => {
    let updated = [ ...state ];

    // create new post
    if( id === 'new' || typeof( updated[id] ) === 'undefined' )
        updated = [ ...updated, post ];

    // update existing post
    else
        updated[id] = post;

    return updated;
}


const deletePost = ( state, id ) => {

    let updated = [ ...state ];

    // if post id doesn't exists
    if( typeof( updated[id] ) === 'undefined' )
        return updated;

    
    updated.splice( id, 1);

    return updated;

}