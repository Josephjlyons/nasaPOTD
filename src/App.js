// import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.scss';
import './scss/_base.scss';
import NasaPhotoCollection from './components/NasaPhotoCollection';

import SearchForm from './components/SearchForm';




const App = (props) => {






  return (

    <HashRouter>
    {/* <Home /> */}


      <div className='app'>
        <div className='container'>
          <Routes>
            <Route path='/nasaPOTD' element={<App />} />
            <Route index element={<Home />} /> 
            <Route path='/nasaphoto' element={<NasaPhoto />} />
            <Route path='/nasaphotos' element={<NasaPhotoCollection />} />
            <Route path='/searchform' element={<SearchForm />} />
         
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
