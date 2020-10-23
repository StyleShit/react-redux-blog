import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { savePost } from '../redux/posts/actions';
import Input from './Input';
import Overlay from './Overlay';
import Textarea from './Textarea';

function PostEditor()
{
    const history = useHistory();
    const dispatch = useDispatch();

    // get post by URL paramter
    const { id: postID } = useParams();
    const posts = useSelector( state => state.posts );

    // extract data from current edited post, 
    // or set as a new one if it doesn't exist
    let {
        title = '', 
        content = '', 
        id = 'new'
    } = ( typeof posts[postID] !== 'undefined') ? { ...posts[postID], id: postID } : {};

    
    const handleSubmit = e => {
     
        e.preventDefault();
        
        dispatch( savePost( id, { title, content } ) );
        history.push( '/posts' );

    }

    return (
        <>
            <Overlay />

            <div className="post-editor-container">
                <div className="post-editor">
                    <form onSubmit={ handleSubmit }>

                        <Input value={ title } label="Post Title" onChange={ e => { title = e.target.value } } />
                        <Textarea value={ content } label="Post Content" onChange={ e => { content = e.target.value } } />
                        
                        <input type="submit" className="btn btn-info" value={ id === 'new' ? 'Post' : 'Save' } />

                    </form>
                </div>
            </div>
        </>
    )
}

export default PostEditor;