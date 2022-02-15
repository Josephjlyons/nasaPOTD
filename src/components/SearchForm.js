import React, { useState } from 'react';
import NavBar from './NavBar/NavBar'
import { Link } from 'react-router-dom'
import './SearchForm.css'





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
                <div className='control-group'>
                    <div>
                        <label htmlFor='startDate'> Enter A Start Date: </label>
                        <input className='input' type='text' id='startDate' placeholder='yyyy-mm-dd' onChange={startDateInputChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor='endDate'>Enter An End Date: </label>
                        <input className='input' type='endDate' id='endDate' placeholder='yyyy-mm-dd' onChange={endDateInputChangeHandler} />
                    </div>

                    <button>Submit</button>

                    <Link to='/searchphotos' className='btn'>Submit</Link>
                </div>
            </form>
        </>
    )
};

export default SearchForm;
