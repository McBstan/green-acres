import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/services' element ={<Services/>} />
        <Route path='/products' element ={<Products/>} />
        <Route path='/sign-up' element ={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
