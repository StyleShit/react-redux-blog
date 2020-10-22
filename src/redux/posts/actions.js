import ACTIONS from './actionTypes';


// save post by id
export const savePost = ( id, post ) => {

    return {
        type: ACTIONS.SAVE_POST,
        payload: {
            id: id,
            post: post
        }
    };

}