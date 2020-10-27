import { apiError, apiStart, apiSuccess } from './actions';
import ACTIONS from './actionTypes';

const apiMiddleware = ({ dispatch }) => next => action => {

    // throw non-api requests
    if( action.type !== ACTIONS.API )
        return next( action );


    // destruct label from payload & dispatch api start action.
    // `label` is useful to determine which api call returned the message
    const { label = '' } = action.payload;
    dispatch( apiStart( label ) );


    // destruct request options from payload
    let {

        url = '',
        method = 'GET',
        data = {},
        headers = {},
        onSuccess = () => {},
        onError = () => {}
        
    } = action.payload;

    headers['Content-Type'] = 'application/json';
    let options = { method, mode: 'cors', redirect: 'follow', headers };


    // if it's GET, add `data` as query string
    if( method === 'GET' )
    {
        // build query string
        const queryString = Object.keys( data ).map( key => {

            return key + '=' + data[key];

        }).join( '&' );

        // append the query string to the url
        url += '?' + queryString;
    }

    // other methods
    else
    {
        options.body = JSON.stringify( data );
    }

    // make the request
    fetch( url, options ).then( res  => res.json() )
        
        // successful request
        .then( data => { 
            
            dispatch( apiSuccess( label, data ) );
            onSuccess( data );

        })

        // request error
        .catch( error => {

            dispatch( apiError( label, error ) );
            onError( error );

        });

}

export default apiMiddleware;