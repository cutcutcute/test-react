import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import "./app/styles.scss";

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
