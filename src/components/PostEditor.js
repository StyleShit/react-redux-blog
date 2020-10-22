import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updatePost } from '../redux/posts/actions';
import Input from './Input';
import Overlay from './Overlay';
import Textarea from './Textarea';

function PostEditor()
{
    // get router history
    const history = useHistory();

    // get dispatch function
    const dispatch = useDispatch();

    // get id param from URL
    const { id } = useParams();

    // get post by id
    const posts = useSelector( state => state.posts );

    if( typeof posts[id] === 'undefined')
        return '';

    let { title, content } = posts[id];

    return (
        <>
            <Overlay />

            <div className="post-editor-container">
                <div className="post-editor">
                    <form onSubmit={ e => { e.preventDefault() }}>

                        <Input value={ title } label="Post Title" onChange={ value => { title = value } } />
                        
                        <br /><br />

                        <Textarea value={ content } label="Post Content:" onChange={ value => { content = value } } />

                        <br /><br />

                        <input type="submit" 
                            value="Save" 
                            className="btn btn-info" 
                            onClick={ () => { 
                                dispatch( updatePost( id, { title, content } ) );
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