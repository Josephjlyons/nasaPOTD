import React, { useState } from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'





const SearchForm = (props) => {
    const [enteredStartDate, setEnteredStartDate] = useState('');
    const [enteredEndDate, setEnteredEndDate] = useState('');

    const startDateInputChangeHandler = event => {
        setEnteredStartDate(event.target.value)

    };
    const endDateInputChangeHandler = event => {
        setEnteredEndDate(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(enteredStartDate, enteredEndDate);


    };


    return (
        <>
            <NavBar />
            <form onSubmit={formSubmissionHandler}>
                <div>
                    <label htmlFor='startDate'> Enter A Start Date: </label>
                    <input type='text' id='startDate' placeholder='yyyy-mm-dd' onChange={startDateInputChangeHandler} />
                    <label htmlFor='endDate'>Enter An End Date: </label>
                    <input type='endDate' id='endDate' placeholder='yyyy-mm-dd' onChange={endDateInputChangeHandler} />
                    <button >Submit</button>

                    <Link to='/searchphotos' className='btn btn-primary'>BUTTON</Link>
                </div>
            </form>
        </>
    )
};

export default SearchForm;
