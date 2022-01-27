import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_API_KEY;


const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState();


    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data)
        }
    }, []);

    if (!photoData) {
        return (
            <p>No photo found</p>
        )
    }
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