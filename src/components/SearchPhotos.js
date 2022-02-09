import React from 'react';
import { useEffect, useState } from 'react';
import LoadSpinner from './LoadSpinner/LoadSpinner';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_API_KEY;


//multiple returned images in work//

const SearchPhotos = () => {
    const [photoData, setPhotoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        async function fetchPhotos() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-06-09&end_date=2021-06-12`
            );
            const data = await res.json();
            setPhotoData(data);
            setIsLoading(false)
            console.log(data)

        }
        fetchPhotos().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

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
        <form>
            <label>
                Enter A Start Date:
                <input type='date' name='photoSearch' id='firstDate' placeholder='yyyy-mm-dd' />
                Enter An End Date:
                <input type='date' name='photoSearch' id='endDate' placeholder='yyyy-mm-dd' />
            </label>
            <input type='submit' value='Submit' />
            
        </form>
    )
};

export default SearchPhotos;