import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useToast } from '../contexts/ToastProvider';
import { savePost } from '../redux';
import Input from './Input';
import Overlay from './Overlay';
import Textarea from './Textarea';

function PostEditor()
{
    const toast = useToast();
    const dispatch = useDispatch();

    // get post by URL paramter
    const { id: postID } = useParams();
    const posts = useSelector( state => state.posts );
    const selectedPost = posts.find( post => ( post._id === postID )) || {};


    // extract data from current edited post, or set as a new one if it doesn't exist
    const [ state, setState ] = useState({
        title: selectedPost.title || '', 
        content: selectedPost.content || '', 
        id: selectedPost._id || 'new'
    });

    

    // handle form submission
    const handleSubmit = e => {
     
        e.preventDefault();

        state.title = state.title.trim();
        state.content = state.content.trim();


        // validate fields
        if( !state.title || !state.content )
        {
            toast({ message: 'All fields are required', type: 'error' });
            return;
        }


        // dispatch post saving action
        dispatch( savePost({ 
            id: state.id, 
            title: state.title, 
            content: state.content 
        }));

        toast({ message: 'Saved!', type: 'success' });
    }


    return (
        <>
            <Overlay />

            <div className="post-editor-container">
                <div className="post-editor">
                    <form onSubmit={ handleSubmit }>

                        <Input value={ state.title } label="Post Title" 
                            onChange={ value => { setState( prev => ({ ...prev, title: value }) ) }}
                        />

                        <Textarea value={ state.content } label="Post Content" 
                            onChange={ value => { setState( prev => ({ ...prev, content: value }) ) }}
                        />
                        
                        <input type="submit" className="btn btn-info" value={ state.id === 'new' ? 'Post' : 'Save' } />

                    </form>
                </div>
            </div>
        </>
    )
}

export default PostEditor;