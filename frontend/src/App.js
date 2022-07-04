import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Lists from './pages/Lists';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/lists" element={ <Lists /> } />
    </Routes>
  );
}

export default App;
