import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Planning from './pages/planing';
import Blog from './pages/blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/planning' element={<Planning/>}/>
     <Route path='/blog' element={<Blog/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
