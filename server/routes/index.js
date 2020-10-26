const router = require( 'express' ).Router();

// posts routes
router.use( '/posts', require( './posts' ) );


module.exports = router;