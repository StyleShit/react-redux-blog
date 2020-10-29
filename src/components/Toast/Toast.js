import React, { useEffect, useState } from 'react';

export default function Toast({ message, type = 'info', timeout = 3000 })
{
    const [ shouldRender, setShouldRender ] = useState( true );
    const [ toastClass, setToastClass ] = useState( `toast toast-${ type }` );


    // on mount
    useEffect( () => {

        // add toast-hidden class to the toast
        const classTimeout = setTimeout( () => {

            setToastClass( prev => prev + ' toast-hidden' );
            setTimeout( () => { setShouldRender( false ); }, 500 )

        }, timeout );


        // clear timeout on unmount
        return () => {

            clearTimeout( classTimeout );

        }

    // eslint-disable-next-line
    }, []);


    if( shouldRender )
    {
        return (
            <div className={ toastClass }>
                { message }
            </div>
        )
    }

    return null;
}
