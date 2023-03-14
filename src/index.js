import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <Routes>
      <Route element={<Navbar title="React WorkShop" />}>
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Route>


    </Routes>




  </BrowserRouter>


);



