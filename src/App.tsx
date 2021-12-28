import React from 'react';

import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
  <div>
    <Header />
    <Intro text="Esto es una prueba"/>
    <Intro text="Esto es una prueba 2"/>
  </div>
  );
}

export default App;
