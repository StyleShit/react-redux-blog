import React from 'react';
import ToastProvider from '../contexts/ToastProvider';

export default ( WrappedComponent ) => { 

    return class extends React.Component
    {
        render()
        {
            return (
                <>
                    <ToastProvider>
                        <WrappedComponent { ...this.props } />
                    </ToastProvider>
                </>
            )
        }
    }

}