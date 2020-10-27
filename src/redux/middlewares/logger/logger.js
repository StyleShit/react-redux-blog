const loggerMiddleware = store => next => action => {

    log( 'Action', styles.action, action.type );
    log( 'Payload', styles.payload, action.payload );
    log( 'State', styles.state, store.getState() );

    console.log( '\n◄├─────────────────────────────────────────────────────┤►\n\n' );

    next( action );

}


// logging styles
const styles = {

    global: 'color: #FFF; padding: 1px 10px; font-size: 13px;',
    action: 'background-color: #4CAF50;',
    payload: 'background-color: #3F51B5;',
    state: 'background-color: #FF9800;'

};


// log a styled message
const log = ( label, style, data ) => {

    label = `%c${ label }`;
    style = styles.global + style;

    console.log( label, style, '\t', data );

}

export default loggerMiddleware;