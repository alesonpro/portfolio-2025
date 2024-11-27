import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Works from './components/works';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import backgroundWhite from './assets/background-white.png'; // Import your background image
import './App.css'; // Ensure your custom CSS is imported

function App() {
  const [ isLoaded, setIsLoaded ] = useState( false );

  useEffect( () => {
    // Set a delay for the page loading animation (scale & fade-in)
    setTimeout( () => setIsLoaded( true ), 1500 ); // 1.5 seconds delay
  }, [] );

  return (
    <div
      className={ `scroll-smooth app-container ${ isLoaded ? 'opacity-100' : 'opacity-0' } transition-all duration-1000` }
      style={ {
        background: `url(${ backgroundWhite }) no-repeat center center fixed`,
        backgroundSize: 'cover',
      } }
    >
      <Navbar />
      <Hero id="hero" />

      {/* Works Section with Scale-In & Bottom-to-Top Transition */ }
      <div
        id="works"
        className={ `transform transition-all duration-1000 ease-in-out ${ isLoaded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-90 opacity-0'
          }` }
      >
        <Works id="work" />
      </div>

      {/* Testimonials Section with Scale-In & Bottom-to-Top Transition */ }
      <div
        id="testimonials"
        className={ `transform transition-all duration-1000 ease-in-out ${ isLoaded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-90 opacity-0'
          }` }
      >
        <Testimonials id="testimonials" />
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
