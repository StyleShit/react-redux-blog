const express = require( 'express' );
const mongoose = require( 'mongoose' );

// configure the express server
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( require( './routes' ) );


// default route
app.get( '/', ( req, res ) => {

    res.json({ message: 'It Works!' });

});


// connect to db
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect( 'mongodb://localhost/rest', connectionOptions , () => {

    console.log( 'Connected to DB!' );

    // listen to incoming connections
    const port = 3001;
    app.listen( port, () => {

        console.log( `Server listening on port ${ port }...` );

    });

});
