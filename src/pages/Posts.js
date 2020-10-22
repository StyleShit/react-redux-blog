import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

function Posts()
{
    const posts = useSelector( state => state.posts );

    return (
        <div className="wrapper">

            <h1 className="posts-title blue">Posts</h1>

            <Link to={ `/posts/new` } className="btn btn-info">
                New Post
            </Link>

            {
                posts.map( ( post, i ) => {
                    return <Post key={ i } post={{ ...post, id: i }} />
                })
            }

        </div>
    )
}

export default Posts;