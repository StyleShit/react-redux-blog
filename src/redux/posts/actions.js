import { apiAction } from '../middlewares/api';
import ACTIONS from './actionTypes';


// fetch posts from API
export const fetchPosts = () => {

    return {
        type: ACTIONS.FETCH,
        payload: {}
    };

}


// save post by id
export const savePost = ( dispatch, history, { id, title, content } ) => {

    // create new
    if( id === 'new')
    {
        dispatch( apiAction({
            url: '/posts',
            method: 'POST',
            data: { title, content },
            label: ACTIONS.SAVE,
            onSuccess: () => { history.push( '/posts' ); }
        }) );
    }

    // update existing
    else
    {
        dispatch( apiAction({
            url: `/posts/${ id }`,
            method: 'PATCH',
            data: { title, content },
            label: ACTIONS.SAVE,
            onSuccess: () => { history.push( '/posts' ); }
        }) );
    }

}


// delete post by id
export const deletePost = ( dispatch, { id } ) => {

    dispatch( apiAction({
        url: `/posts/${ id }`,
        method: 'DELETE',
        label: ACTIONS.DELETE
    }) );

}