
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=15&api_key=t72iykm5f4sVEg6N4KTrELCwv2h3wgK0`;

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
    return gifs
}