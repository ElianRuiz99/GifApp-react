import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {categories, setCategories} ) => {
    //Hook
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //validacion
        if( inputValue.trim().length > 2 ){
            setCategories( [inputValue, ...categories] );
            setInputValue('');
        }  
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleInput }
            />
        </form>
    );
  
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
