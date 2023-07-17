import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar/NavBar'
import LoadSpinner from './LoadSpinner/LoadSpinner';
import '../scss/_searchForm.scss';
import PhotosFromSearch from './PhotoSearchRender'

const apiKey = process.env.REACT_APP_NASA_API_KEY;


const SearchForm = () => {
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [enteredStartDate, setEnteredStartDate] = useState();
    const [enteredEndDate, setEnteredEndDate] = useState();
    const [photoData, setPhotoData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    let start_Date = enteredStartDate;
    let end_Date = enteredEndDate;



    useEffect(() => {

        let subscribed = true;
        const fetchPhotos = async () => {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${start_Date}&end_date=${end_Date}`
            
            );
            
            const data = await res.json();
       
            if (subscribed) {

                setPhotoData(data);
                setIsLoading(false);
            }

        }
        fetchPhotos().catch(error => {
            setHttpError(error.message);
        });
        return () => subscribed = false;

    }, [start_Date, end_Date]);



    if (isLoading) {
        return <section className='loading'>
            <p>Loading...</p>
            <LoadSpinner />
        </section>
    }




    if (httpError) {
        return <section className='error'>
            <p>{httpError}</p>
        </section>
    }

    const clearState = () => {
        setEnteredEndDate('');
        setEnteredStartDate('');
    }

    const startDateInputChangeHandler = event => {
        setEnteredStartDate(event.target.value)


    };
    const endDateInputChangeHandler = event => {  
        setEnteredEndDate(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

    };


    let today = new Date();
   

    // let isValidStartDate = Date.parse(start_Date)
    // let date2 = new Date('1995-06-16')
    // if (isValidStartDate < date2) {
    //     return (
    //         <div>
    //             <p>start date cant be before 1995-06-16</p>
    //         </div>

    //     )

    // } else {
    //     console.log('valid start date')
    // }

    // let isValidEndDate = Date.parse(end_Date)
    // if (isValidEndDate > today) {
    //     return (
    //         <>
    //             <NavBar />
    //             <p>end date cant be from the future</p>

    //         </>
    //     )
    // } else {
    //     console.log('valid end date')
    // }

   

    if (!photoData.length > 0 || isLoading) {
        return (
            <>
                <NavBar />
                <form className='formContainer' onSubmit={formSubmissionHandler}>
                 
                    <div className='control-group'>
                    <ul className='control-group__inputRules'>
                        <li>Start Date must be after 1995-06-16</li>
                        <li>End Date must be current date or before</li>
                        <li>Input Date must follow yyyy-mm-dd format</li>
                        <li>Once all fields are valid search will automatically commence and render</li>
                    </ul>
                        <div>
                            <label className='control-group__label' htmlFor='startDate'> Enter A Start Date: </label>
                            <input className='control-group__input' type='text' min='1995-06-16' id='startDate' placeholder='yyyy-mm-dd'
                                onChange={startDateInputChangeHandler}
                                ref={startDateRef}
                                required
                            />
                        </div>
                        <div>
                            <label className='control-group__label' htmlFor='endDate'>Enter An End Date: </label>
                            <input  className='control-group__input' type='text' max={today} id='endDate' placeholder='yyyy-mm-dd'
                                onChange={endDateInputChangeHandler}
                                ref={endDateRef}
                                required
                            />
                        </div>
                    </div>
               


                </form>

            </>

        )

    }
    else {
        return (
            <>
                <button className='clearStateButton' onClick={clearState}>Back To Search</button>
                <PhotosFromSearch photoProps={photoData} />


            </>
        )
    }
};

export default SearchForm;
