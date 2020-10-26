import ACTIONS from './actionTypes';


// save post by id
export const savePost = ( id, post ) => {

    return {
        type: ACTIONS.SAVE,
        payload: {
            id: id,
            post: post
        }
    };

}


// delete post by id
export const deletePost = id => {

    return {
        type: ACTIONS.DELETE,
        payload: {
            id: id
        }
    };

}