import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_API_KEY;


//multiple returned images in work//

const NasaPhotos = () => {
    const [photoData, setPhotoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        fetchPhotos();
        async function fetchPhotos() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-06-09&end_date=2021-06-11`
            );
            const data = await res.json();
            setPhotoData(data);
            setIsLoading(false)
          
        }
        fetchPhotos().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if(isLoading){
        return <section className='loading'>
            <p>Loading Image...</p>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    }

    if(httpError) {
        return <section className='error'>
            <p>{httpError}</p>
        </section>
    }

 

    return (
        <>
            <NavBar />
        {photoData.map((photoData) => {
            return(
              <div className='nasa-photo'>
                {photoData.media_type === 'image' ? (
                    <img
                    src={photoData.url}
                    alt={photoData.title}
                    className='photo'></img>
                ) : (
                <iframe
                    className='photo'
                    title='space video'
                    src={photoData.url}
                    frameBorder='0'
                    allow='encrypted-media'
                    allowFullScreen
                />
            )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p className='date'>{photoData.date}</p>
                    <p className='explanation'>{photoData.explanation}</p>
                </div>
            </div>  
            )
        })}
            
        </>

    )
}

export default NasaPhotos;