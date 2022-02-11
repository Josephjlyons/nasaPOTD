import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import LoadSpinner from './LoadSpinner/LoadSpinner';

const apiKey = process.env.REACT_APP_NASA_API_KEY;


const NasaPhoto = (props) => {
    const [photoData, setPhotoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            setIsLoading(false)
        }
        fetchPhoto().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return <section className='loading'>
            <p>Loading Image...</p>
            <LoadSpinner />
        </section>
    }

    if (httpError) {
        return <section className='error'>
            <p>{httpError}</p>
        </section>
    }

    // if (!photoData) {
    //     return <p>No photo found </p>
    // }

    return (
        <>
            <NavBar />
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
        </>

    )
}

export default NasaPhoto