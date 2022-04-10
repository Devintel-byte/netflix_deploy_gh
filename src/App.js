import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';


export default function App () {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/browse' element={<Browse />} />
      <Route exact path='/signin' element={<Signin />} />
      <Route exact path='/signup' element={<Signup />} />
    </Routes>
  </Router>
  );
}
