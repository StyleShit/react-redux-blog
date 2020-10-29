import React, { createContext, useContext, useState } from 'react';
import { ToastsContainer } from '../components/Toast';


// create the toast context
export const ToastContext = createContext();

// custom toast hook
export const useToast = () => ( useContext( ToastContext ) );

// handle unique IDs for toasts
let currentID = 0;


function ToastProvider({ children })
{
    const [ toastsList, setToastsList ] = useState( [] );

    // add toast to toasts list
    const createToast = ( options ) => {
        
        options.id = currentID++;

        setToastsList( prev => {
            return [ ...prev, options ];
        });

    };


    // render the ToastProvider
    return (
        <>
            <ToastContext.Provider value={ createToast }>
                { children }
            </ToastContext.Provider>
            
            <ToastsContainer toasts={ toastsList } />
        </>
    )
}

export default ToastProvider;