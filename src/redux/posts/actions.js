import { apiAction } from '../middlewares/api';
import ACTIONS from './actionTypes';


// fetch posts from API
export const fetchPosts = () => {

    return apiAction({
        url: '/posts',
        label: ACTIONS.FETCH,
        onSuccess: posts => ( setPosts( posts ) )
    });

}


// set posts
export const setPosts = posts => {

    return {
        type: ACTIONS.SET,
        payload: { posts }
    };

}


// make api call to save post by id
export const savePost = ({ id, title, content }) => {

    // determine if it's a new or updated post
    const method = ( id === 'new' ) ? 'POST' : 'PATCH';
    const url    = ( id === 'new' ) ? '/posts' : `/posts/${ id }`;

    // set api call options
    const options = {
        url,
        method,
        data: { title, content },
        label: ACTIONS.SAVE,
        onSuccess: post => ( postSaved( post ) )
    };

    return apiAction( options );

}


// api call for saving post finished successfully
export const postSaved = post => {

    return {

        type: ACTIONS.SAVE,
        payload: {
            post,
            redirectAfter: '/posts'
        }

    };

};


// make api call to delete post by id
export const deletePost = ({ id }) => {

    return apiAction({
        url: `/posts/${ id }`,
        method: 'DELETE',
        label: ACTIONS.DELETE,
        onSuccess: post => ( postDeleted( post ) )
    });

}


// api call for deleting post finished successfully
export const postDeleted = post => {

    return {

        type: ACTIONS.DELETE,
        payload: { 
            post,
            redirectAfter: '/posts'
        }

    };

};