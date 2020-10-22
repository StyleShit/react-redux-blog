import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post })
{
    const { title, content, id } = post;

    return (
        <div className="panel">

            <h3 className="blue">{ title }</h3>
            <p>{ content}</p>

            <Link to={ `/posts/${id}/edit` } className="btn btn-info">
                Edit
            </Link>
        </div>
    )
}

export default Post;