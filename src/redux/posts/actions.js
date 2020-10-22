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