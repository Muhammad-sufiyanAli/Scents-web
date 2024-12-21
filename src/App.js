import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import

import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Home';
import Shop from './Pages/Shop';
import MenPerfume from './Pages/MenPerfume';
import WomenPerfume from './Pages/WomenPerfume';
import TesterBox from './Pages/TesterBox';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <Router> {/* Use Router here, as it's aliased from BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/MenPerfume" element={<MenPerfume />} />
          <Route path="/WomenPerfume" element={<WomenPerfume />} />
          <Route path="/TesterBox" element={<TesterBox />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
