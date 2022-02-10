import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //useEffect permite ejecutar un codigo de forma condicional
    useEffect( () => {
        getGifs( category )
            .then( setImages )
    }, [ category ] );
   


    return (
        <>
            <h3 className='category-name'> { category } </h3>
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ) )
                }
            </div>
        </>
        
    )
};
