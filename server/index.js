const express = require( 'express' );

// configure the express server
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( require( './routes' ) );


// default route
app.get( '/', ( req, res ) => {

    res.json({ message: 'It Works!' });

});


// listen to incoming connections
app.listen( 3001, () => {

    console.log( 'Server listening on port 3001...' );

});
