import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../components/Post';

function Posts()
{
    const posts = useSelector( state => state.posts );

    return (
        <div className="wrapper">

            <h1 className="posts-title blue">Posts</h1>

            {
                posts.map( ( post, i ) => {
                    return <Post key={ i } post={{ ...post, id: i }} />
                })
            }

        </div>
    )
}

export default Posts;