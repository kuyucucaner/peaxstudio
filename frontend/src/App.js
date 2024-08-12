import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar'
import './styles/scroll-bar.css';

function App() {
  return (
    <Router> 
       <Navbar />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
