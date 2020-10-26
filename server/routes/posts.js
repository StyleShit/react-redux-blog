const router = require( 'express' ).Router();
const getItemMiddleware = require( '../middlewares/getItem' );
const Post = require( '../models/post' );

// apply middlewares
router.use( '/:id', getItemMiddleware( Post, 'post' ) );


// get all posts
router.get( '/', async ( req, res ) => {

    try
    {
        const posts = await Post.find();
        res.json( posts );
    }

    catch( error )
    {
        res.status( 500 ).json( error );
    }

});


// create post
router.post( '/', async ( req, res ) => {

    const post = Post({

        title: req.body.title,
        content: req.body.content,
        createdAt: req.body.createdAt

    });

    try
    {
        await post.save();
        res.status( 201 ).json( post );
    }

    catch( error )
    {
        res.status( 400 ).json( error );
    }

});


// get post by id
router.get( '/:id', ( req, res ) => {

    res.json( res.post );

});


// delete post by id
router.delete( '/:id', async ( req, res ) => {

    try
    {
        const deletedPost = await res.post.delete();
        res.json( deletedPost );
    }

    catch( error )
    {
        res.status( 500 ).json( error );
    }

});


// update post by id
router.patch( '/:id', async ( req, res ) => {

    const { title, content } = req.body;

    if( title )
        res.post.title = title;

    if( content )
        res.post.content = content;

    try
    {
        await res.post.save();
        res.json( res.post );
    }

    catch( error )
    {
        res.status( 500 ).json( error );
    }
});


module.exports = router;