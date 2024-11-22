import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/header-logo.svg'; // Import your SVG logo
import heroProfile from '../assets/hero-profile.png'; // Import the image

function Hero() {
    // State to store the current time
    const [ currentTime, setCurrentTime ] = useState( "" );

    // Update the time every second
    useEffect( () => {
        const interval = setInterval( () => {
            const now = new Date();
            const hours = String( now.getHours() ).padStart( 2, "0" );
            const minutes = String( now.getMinutes() ).padStart( 2, "0" );
            const seconds = String( now.getSeconds() ).padStart( 2, "0" );
            const location = "PH"; // You can change this to dynamically fetch location if needed
            setCurrentTime( `${ hours }:${ minutes }:${ seconds } ${ location }` );
        }, 1000 );

        // Clean up the interval on component unmount
        return () => clearInterval( interval );
    }, [] );

    return (
        <div className="flex flex-col items-center justify-start p-8 h-screen font-poppins">
            {/* SVG Logo */ }
            <div className="w-[390px] sm:w-[600px] lg:w-[1100px] text-center mb-8">
                <Logo className="mx-auto h-auto w-full" />
            </div>

            {/* 2-Column Section */ }
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between w-[390px] sm:w-[600px] lg:w-[1100px]">
                {/* Left Column - Text, Button, and Local Time */ }
                <div className="sm:w-1/2 mb-8 sm:mb-0 text-center sm:text-left relative">
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-military-green mb-4">
                        Design is my passion! I create user-friendly, seamless digital experiences that bring your vision to life. Let’s make something amazing—hire me!
                    </p>
                    <button className="bg-grey-primary text-white-secondary font-bold py-4 px-12 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-military-green hover:to-military-green-secondary hover:shadow-2xl transition-all duration-300">
                        Hire me!
                    </button>

                    {/* Local Time */ }
                    <p className="mt-16 text-gray-600 text-sm sm:text-base">
                        LOCAL TIME: <span className="font-semibold">{ currentTime }</span>
                    </p>
                </div>

                {/* Right Column - Image */ }
                <div className="sm:w-1/2 flex justify-center">
                    <img
                        src={ heroProfile }
                        alt="Hero Profile"
                        className="w-[327px] sm:w-[327px] lg:w-[425px] h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
