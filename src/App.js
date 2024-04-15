import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Planning from './pages/planing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/planning' element={<Planning/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
