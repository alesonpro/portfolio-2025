import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import backgroundWhite from './assets/background-white.png'; // Import your background image
import './App.css'; // Create a CSS file for additional styling if needed

function App() {
  return (
    <div
      className="app-container"
      style={ {
        background: `url(${ backgroundWhite }) no-repeat center center fixed, linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))`,
        backgroundSize: 'cover',
      } }
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
