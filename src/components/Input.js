import React from 'react';
import withManagedValue from '../HOCs/withManagedValue';

function Input({ label, ...rest })
{
    return (
        <>
            { label &&
                <label htmlFor={ rest.id }>{ label }:</label>
            }

            <input { ...rest } />
        </>
    )
}

export default withManagedValue( Input );