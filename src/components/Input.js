import React, { useState } from 'react';

function Input( props )
{
    // extract props
    const { 
        label,
        id,
        type = "text",
        value: defaultValue = "",
        onChange,
        ...rest 
    } = props;

    // initialize state
    const [value, setValue] = useState( defaultValue );

    return (
        <>
            { label &&
                <>
                    <label htmlFor={ id }>{ label }:</label>
                    <br />
                </>
            }

            <input id={ id } type={ type } value={ value } { ...rest } onChange={ e => { setValue( e.target.value ); onChange( e.target.value ) }} />
        </>
    )
}

export default Input
