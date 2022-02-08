import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

//FC
const GifApp = () => {

    // const categories = ['Simpsons', 'Futurama', 'Dragon Ball'];
    const [ categories, setCategories ] = useState( ['Simpsons', 'Futurama', 'Dragon Ball'] );

    // const handleAdd = () =>{
    //     setCategories( [...categories, 'Ben10'] );
    // }

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory categories={ categories } setCategories={ setCategories } />
            <hr />
            
            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category }>{ category }</li> ;
                    })
                }
            </ol>
        </>
    );
}

export default GifApp;