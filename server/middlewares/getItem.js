const getItemMiddleware = ( model, name = 'item' ) => {

    return async ( req, res, next ) => {

        try
        {
            // get item by id
            const item = await model.findById( req.params.id );

            if( item === null )
                return res.status( 404 ).json({ error: `${ name } not found` });

            // add the item to the response
            res[name] = item;

            next();
        }

        catch( error )
        {
            // user input error
            if( error.kind === 'ObjectId' )
                return res.status( 400 ).json({ error: `Wrong ${ name } id` });


            // server error
            return res.status( 500 ).json({ error });
        }

    };

};


module.exports = getItemMiddleware;