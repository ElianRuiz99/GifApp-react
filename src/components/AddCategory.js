import React, { useState } from 'react';

export const AddCategory = () => {
    //Hook
    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInput = (e) => {
        setInputValue( e.target.value );
    }

    //
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit Hecho');
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
