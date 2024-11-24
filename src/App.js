import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Works from './components/works';
import Testimonials from './components/testimonials';
import backgroundWhite from './assets/background-white.png'; // Import your background image
import './App.css'; // Create a CSS file for additional styling if needed

function App() {
  return (
    <div
      className="app-container"
      style={ {
        background: `url(${ backgroundWhite }) no-repeat center center fixed`,
        backgroundSize: 'cover',
      } }
    >
      <Navbar/>
      <Hero/>
      <Works/>
      <Testimonials/>
    </div>
  );
}

export default App;
