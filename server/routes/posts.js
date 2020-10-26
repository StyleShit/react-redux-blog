const router = require( 'express' ).Router();

const posts = [
    { id: 1, title: 'This is a title', content: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'This is a title 2', content: 'Lorem ipsum dolor sit amet 2' },
    { id: 3, title: 'This is a title 3', content: 'Lorem ipsum dolor sit amet 3' }
];


// get all posts
router.get( '/', ( req, res ) => {

    res.json({ posts });

});


// create post
router.post( '/', ( req, res ) => {

    res.json({});

});


// get post by id
router.get( '/:id', ( req, res) => {

    res.json({});

});


// delete post by id
router.delete( '/:id', ( req, res) => {

    res.json({});

});


// update post by id
router.put( '/:id', ( req, res) => {

    res.json({});

});


module.exports = router;