import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

// import Home from './Home';
import About from './About';
import Home from './Home';


function App() {
 
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
      
</div>
     
  )
}

export default App
