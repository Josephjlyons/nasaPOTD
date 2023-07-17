// import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.scss';
import './scss/_base.scss';
import NasaPhotoCollection from './components/NasaPhotoCollection';
import PhotoSearchRender from './components/PhotoSearchRender';
import SearchForm from './components/SearchForm';




const App = () => {


  return (

    <BrowserRouter>


      <div className='app'>
        <div className='container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/nasaphoto' element={<NasaPhoto />} />
            <Route path='/nasaphotos' element={<NasaPhotoCollection />} />
            <Route path='/searchform' element={<SearchForm />} />
            <Route path='/photosearchrender' element={<PhotoSearchRender  />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
