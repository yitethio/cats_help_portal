import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Planning from './pages/planing';
import Blog from './pages/blog';
import Warehouse from './pages/warehouse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/planning' element={<Planning/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/warehouse' element={<Warehouse/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
