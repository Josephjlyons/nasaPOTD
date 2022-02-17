import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import NasaPhotos from './components/NasaPhotos';
import SearchPhotos from './components/SearchPhotos';
import SearchForm from './components/SearchForm';
import SearchFormTwo from './components/SearchFormTwo'


function App(props) {

  const [enteredStartDate, setEnteredStartDate] = useState('');
  const [enteredEndDate, setEnteredEndDate] = useState('');
  // const [formIsShown, setFormIsShown] = useState(true);

  const startDateInputChangeHandler = event => {
    setEnteredStartDate(event.target.value)

  };
  const endDateInputChangeHandler = event => {
    setEnteredEndDate(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
  };

  return (

    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/nasaphoto' element={<NasaPhoto />} />
          <Route path='/nasaphotos' element={<NasaPhotos />} />
          <Route path='/searchphotos' element={<SearchPhotos startDate={enteredStartDate} endDate={enteredEndDate} />} />
          <Route path='/searchform' element={<SearchForm  />} />
          <Route path='/searchformtwo' element={<SearchFormTwo />} />
        </Routes>
      </div>
      <br />
      <div>
        <form onSubmit={formSubmissionHandler}>
          <div className='control-group'>
            <h1>Search a date range</h1>
            <div>
              <label htmlFor='startDate'> Enter A Start Date: </label>
              <input className='input' type='text' id='startDate' placeholder='yyyy-mm-dd' onChange={startDateInputChangeHandler} />
            </div>
            <div>
              <label htmlFor='endDate'>Enter An End Date: </label>
              <input className='input' type='endDate' id='endDate' placeholder='yyyy-mm-dd' onChange={endDateInputChangeHandler} />
            </div>
            <Link  to='/searchphotos' className='btn'>Submit</Link>
          </div>
        </form>
      </div>

    </BrowserRouter>
  );
}

export default App;
