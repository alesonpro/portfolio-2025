import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Works from './components/works';
import About from './components/about';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import backgroundWhite from './assets/background-white.png'; // Import your background image
import './App.css'; // Ensure your custom CSS is imported

function App() {
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ cursorPosition, setCursorPosition ] = useState( { x: 0, y: 0 } );
  const [ isDesktop, setIsDesktop ] = useState( window.innerWidth > 1024 ); // Adjust breakpoint as needed

  useEffect( () => {
    // Set a delay for the page loading animation (scale & fade-in)
    setTimeout( () => setIsLoaded( true ), 1500 ); // 1.5 seconds delay

    // Update cursor position based on mouse movement for desktop only
    const handleMouseMove = ( e ) => {
      if ( isDesktop ) {
        setCursorPosition( { x: e.clientX, y: e.clientY } );
      }
    };

    // Update screen size and detect if it's desktop
    const handleResize = () => {
      setIsDesktop( window.innerWidth > 1024 );
    };

    window.addEventListener( 'mousemove', handleMouseMove );
    window.addEventListener( 'resize', handleResize );

    return () => {
      window.removeEventListener( 'mousemove', handleMouseMove );
      window.removeEventListener( 'resize', handleResize );
    };
  }, [ isDesktop ] );

  return (
    <div
      className={ `scroll-smooth app-container ${ isLoaded ? 'opacity-100' : 'opacity-0' } transition-all duration-1000` }
      style={ {
        background: `url(${ backgroundWhite }) no-repeat center center fixed`,
        backgroundSize: 'cover',
        overflowX: 'hidden', // Prevent horizontal scrolling
      } }
    >
      {/* Custom cursor - Only visible on desktop */ }
      { isDesktop && (
        <div
          className="cursor"
          style={ {
            left: `${ cursorPosition.x }px`,
            top: `${ cursorPosition.y }px`,
          } }
        ></div>
      ) }

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

      {/* About Section with Scale-In & Bottom-to-Top Transition */ }
      <div
        id="about"
        className={ `transform transition-all duration-1000 ease-in-out ${ isLoaded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-90 opacity-0'
          }` }
      >
        <About id="about" />
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
