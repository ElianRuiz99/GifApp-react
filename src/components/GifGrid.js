import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //useEffect permite ejecutar un codigo de forma condicional
    useEffect( () => {
        getGifs();
    }, [] );

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Simpsons&limit=15&api_key=t72iykm5f4sVEg6N4KTrELCwv2h3wgK0';

        const resp = await fetch( url );
        //Extraer informacion 
        const { data } = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        } );
        console.log(gifs);
        setImages(gifs);
    }   

    return (
        <div>
            <h3> { category } </h3>
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ) )
            }
        </div>
    )
};
