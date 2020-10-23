import React from 'react';
import withManagedValue from '../HOCs/withManagedValue';

function Textarea({ label, ...rest })
{
    return (
        <>
            { label &&
                <label htmlFor={ rest.id }>{ label }:</label>
            }

            <textarea { ...rest } />
        </>
    )
}

export default withManagedValue( Textarea );