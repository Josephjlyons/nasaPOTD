// import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.scss';
import './scss/_base.scss';
import NasaPhotoCollection from './components/NasaPhotoCollection';

import SearchForm from './components/SearchForm';




const App = (props) => {






  return (

    <BrowserRouter>
    {/* <Home /> */}


      <div className='app'>
        <div className='container'>
          <Routes>
            <Route path='/nasaPOTD' element={<App />} />
            <Route index element={<Home />} /> 
            <Route path='nasaPOTD/nasaphoto' element={<NasaPhoto />} />
            <Route path='nasaPOTD/nasaphotos' element={<NasaPhotoCollection />} />
            <Route path='nasaPOTD/searchform' element={<SearchForm />} />
         
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
