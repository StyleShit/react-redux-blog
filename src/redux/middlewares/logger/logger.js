const loggerMiddleware = store => next => action => {

    console.log( 'Action:', action.type );
    // console.log( 'Payload:', action.payload );
    // console.log( 'State:', store.getState() );

    next( action );

}

export default loggerMiddleware;