import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './components/Home';
import Pokelist from './components/Pokelist';
import About from './components/About';
import PokeSingle from './components/PokeSingle'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='pokelist' element={<Pokelist />} />
          <Route path='pokelist/:pokesingle' element={<PokeSingle />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
