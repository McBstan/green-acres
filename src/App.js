import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Aboutus from './components/pages/Aboutus';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NotFound from './components/pages/NF';

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
        <Route path='/aboutus' element ={<Aboutus/>} />
        <Route path='/sign-up' element ={<SignUp/>} />
        <Route path='*' element ={<NotFound/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
