import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    //useEffect permite ejecutar un codigo de forma condicional
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ] );

    const { data:images, loading} = useFetchGifs( category );  //Se implementa el useEffect en el Custom Hook

    return (
        <>
            <h3 className='category-name animate__animated animate__bounce animate__flipInX'> { category } </h3>

            { loading && <p>Loading...</p> }

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
