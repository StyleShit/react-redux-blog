import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../redux';
import { useDispatch } from 'react-redux';

function Post({ post })
{
    const { title, content, _id: id } = post;
    const dispatch = useDispatch();

    return (
        <div className="panel">

            <h3 className="blue">{ title }</h3>
            <p>{ content}</p>

            <Link to={ `/posts/${id}/edit` } className="btn btn-info">
                Edit
            </Link>

            <button onClick={ () => { dispatch( deletePost({ id }) ) } } className="btn btn-error">Delete</button>
        </div>
    )
}

export default Post;