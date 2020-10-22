import ACTIONS from './actionTypes';


// add post to store
export const createPost = post => {

    return {
        type: ACTIONS.CREATE_POST,
        payload: {
            post: post
        }
    };

}


// update post by id
export const updatePost = ( id, post ) => {

    return {
        type: ACTIONS.UPDATE_POST,
        payload: {
            id: id,
            post: post
        }
    };

}