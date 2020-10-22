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

    return (
        <>
            <Overlay />

            <div className="post-editor-container">
                <div className="post-editor">
                    <form onSubmit={ e => { e.preventDefault() }}>

                        <Input value={ title } label="Post Title" onChange={ value => { title = value } } />
                        
                        <br /><br />

                        <Textarea value={ content } label="Post Content" onChange={ value => { content = value } } />

                        <br /><br />

                        <input type="submit" 
                            value={ id === 'new' ? 'Post' : 'Save' }
                            className="btn btn-info" 
                            onClick={ () => { 
                                dispatch( savePost( id, { title, content } ) );
                                history.goBack();
                            } 
                        } />

                    </form>
                </div>
            </div>
        </>
    )
}

export default PostEditor;