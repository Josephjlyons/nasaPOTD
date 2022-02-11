import React from 'react';
import { useEffect, useState } from 'react';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import NavBar from './NavBar';


const apiKey = process.env.REACT_APP_NASA_API_KEY;


//need to get date searches working 

const SearchPhotos = (props) => {


    const [photoData, setPhotoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    let startDate = props.enteredStartDate;
    let endDate = props.enteredEndDate



    useEffect(() => {
        setIsLoading()

        async function fetchPhotos() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`
            );
            const data = await res.json();
            setPhotoData(data);
            setIsLoading(false)
            console.log(data)

        }
        fetchPhotos().catch(error => {
            setHttpError(error.message);
        })
    }, [startDate, endDate]);

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
            {photoData.map((photoData) => {
                return (
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

        </>)

};

export default SearchPhotos;