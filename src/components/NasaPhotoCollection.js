import React from 'react';
import { useEffect, useState } from 'react';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import NavBar from './NavBar/NavBar';
import '../scss/_nasaPOTDcollection.scss';

const apiKey = process.env.REACT_APP_NASA_API_KEY;


//multiple returned images in work//

const NasaPhotoCollection = (props) => {
    const [photoData, setPhotoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState()


    useEffect(() => {

        async function fetchPhotos() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
            );
            const data = await res.json();
            setPhotoData(data);
            setIsLoading(false);

        }
        fetchPhotos().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
   
    }, [setPhotoData, setIsLoading]);

    if (isLoading) {
        return <section className='loading'>
            <p>Loading Images...</p>
            <LoadSpinner />
        </section>
    }

    if (httpError) {
        return <section className='error'>
            <p>{httpError}</p>
        </section>
    }


    return (

        <>
            <NavBar />
            {Object.entries(photoData).map(([key, photoData], i) => {
                console.log(key, i, photoData)
                return (
                    <div >
                        <div className='potdCollection' key={[i]}>
                            <div className='potdCollection__imgContainer'>
                                {photoData.media_type === 'image' ? (
                                    <img
                                        src={photoData.url}
                                        alt={photoData.title}
                                        className='potdCollection__photo'></img>
                                ) : (
                                    <iframe
                                        className='potdCollection__photo'
                                        title='space video'
                                        src={photoData.url}

                                        allow='encrypted-media'
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <div className='potdCollection__details'>
                                <p className='potdCollection__details potdCollection__details--title'>{photoData.title}</p>
                                <p className='potdCollection__details potdCollection__details--date'>{photoData.date}</p>
                                <p className='potdCollection__details potdCollection__details--explanation'>{photoData.explanation}</p>
                            </div>
                        </div>
                    </div>



                )

            })}

        </>

    )
}

export default NasaPhotoCollection;