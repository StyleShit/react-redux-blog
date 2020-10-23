import React from 'react';
import { Link } from 'react-router-dom';

function Home()
{
    return (
        <>
            <div className="wrapper">
                <h1>
                    It Works!
                </h1>

                <p>
                    This page doesn't make sense, but it's still here for some reason...  ¯\_(ツ)_/¯
                    <br /><br />
                    <Link to="/posts" className="btn btn-info"> View Posts</Link>
                </p>
            </div>
        </>
    )
}

export default Home
