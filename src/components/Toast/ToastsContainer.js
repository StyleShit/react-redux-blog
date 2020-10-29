import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from '.';

function ToastsContainer({ toasts })
{
    // render the container in the body element
    return ReactDOM.createPortal(
        <div className="toasts-container">
            {
                toasts.map(( toastOptions, i ) => {
                    return <Toast {...toastOptions} key={ toastOptions.id } />
                })
            }
        </div>, document.body
    )
}

export default ToastsContainer;