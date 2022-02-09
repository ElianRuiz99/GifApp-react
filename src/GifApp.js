import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//FC
const GifApp = () => {

    // const categories = ['Simpsons', 'Futurama', 'Dragon Ball'];
    const [ categories, setCategories ] = useState( ['Simpsons'] );

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
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifApp;