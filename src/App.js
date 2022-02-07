import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import NasaPhotos from './components/NasaPhotos';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/nasaphoto' element={<NasaPhoto />} />
        <Route path='/nasaphotos' element={<NasaPhotos />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
