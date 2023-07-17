import React from 'react';
import NavBar from './NavBar/NavBar';
// import from './SearchForm';

const Form = (props) => {
    return (
    <div>
    <NavBar />
       <p>end date cannot be from the future</p>
       <form className='formContainer' onClick={props.formSubmissionHandler}>
       <div className='control-group'>
           <div>
               <label className='control-group__label' htmlFor='startDate'> Enter A Start Date: </label>
               <input className='control-group__input' type='text' min='1995-06-16' id='startDate' placeholder='yyyy-mm-dd'
                   onChange={props.startDateInputChangeHandler}
                   ref={props.startDateRef}
               />
           </div>
           <div>
               <label className='control-group__label' htmlFor='endDate'>Enter An End Date: </label>
               <input className='control-group__input' type='text' max={props.today} id='endDate' placeholder='yyyy-mm-dd'
                   onChange={props.endDateInputChangeHandler}
                   ref={props.endDateRef}
               />
           </div>
       </div>
   </form>
   </div>
)}

export default Form;