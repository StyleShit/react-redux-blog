import React from 'react';

export default ( WrappedComponent ) => { 

    return class extends React.Component
    {
        constructor( props )
        {
            super( props );
            
            this.state = { value: props.value || '' };
            this.handleChange = this.handleChange.bind( this );
        }


        // handle value change
        handleChange( e )
        {
            this.setState({ value: e.target.value }, () => {
                if( typeof this.props.onChange === 'function')
                    this.props.onChange( this.state.value ); 
            });
        }


        // render the HOC
        render()
        {
            const { value, onChange, ...rest } = this.props;
            
            return (
                <WrappedComponent { ...rest } value={ this.state.value } onChange={ this.handleChange } />
            )
        }
    }

}