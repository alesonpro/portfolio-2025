import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Works from './components/works';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import backgroundWhite from './assets/background-white.png'; // Import your background image
import './App.css'; // Create a CSS file for additional styling if needed

function App() {
  const [ isLoaded, setIsLoaded ] = useState( false );

  useEffect( () => {
    // Set a delay for the page loading animation (slide-up)
    setTimeout( () => setIsLoaded( true ), 1500 );
  }, [] );

  return (
    <div
      className={ `scroll-smooth app-container transition-opacity duration-1000 ${ isLoaded ? 'opacity-100' : 'opacity-0' }` }
      style={ {
        background: `url(${ backgroundWhite }) no-repeat center center fixed`,
        backgroundSize: 'cover',
      } }
    >
      <Navbar />
      <Hero id="hero" />

      {/* Works Section with Slide-Up Animation */ }
      <div
        id="works"
        className={ `transform transition-all duration-1000 ${ isLoaded ? 'translate-y-0' : 'translate-y-10 opacity-0' }` }
      >
        <Works id="work" />
      </div>

      {/* Testimonials Section with Slide-Up Animation */ }
      <div
        id="testimonials"
        className={ `transform transition-all duration-1000 ${ isLoaded ? 'translate-y-0' : 'translate-y-10 opacity-0' }` }
      >
        <Testimonials id="testimonials" />
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
