import history from '../../../history';

const redirectMiddleware = store => next => action => {

    if( !action.payload )
        return next( action );


    // redirect before action
    if( action.payload.redirectBefore )
    {
        history.push( action.payload.redirectBefore );
    }


    next( action );


    // redirect after action
    if( action.payload.redirectAfter )
    {
        history.push( action.payload.redirectAfter );
    }

};

export default redirectMiddleware;