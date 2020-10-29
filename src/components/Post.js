import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../redux';
import { useDispatch } from 'react-redux';
import { useToast } from '../contexts/ToastProvider';

function Post({ post })
{
    const { title, content, _id: id } = post;
    const dispatch = useDispatch();
    const toast = useToast();

    return (
        <div className="panel">

            <h3 className="blue">{ title }</h3>
            <p>{ content}</p>

            <Link to={ `/posts/${id}/edit` } className="btn btn-info">
                Edit
            </Link>

            <button onClick={ () => { 
                dispatch( deletePost({ id }) );
                toast({ message: 'Deleted!', type: 'success' }); 
                } } 
            className="btn btn-error">Delete</button>
        </div>
    )
}

export default Post;