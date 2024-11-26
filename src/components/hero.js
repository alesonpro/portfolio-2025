import React from 'react';
import { ReactComponent as Logo } from '../assets/header-logo.svg'; // Import your SVG logo
import heroProfile from '../assets/hero-profile.png'; // Import the image
import backgroundWhite from '../assets/background-white.png'; // Import the background image

function Hero() {
    return (
        <div id="hero" className="flex flex-col items-center justify-start pt-8 h-screen font-poppins bg-cover bg-center" style={ { backgroundImage: `url(${ backgroundWhite })` } }>
            {/* SVG Logo */ }
            <div href="#" className="w-[310px] sm:w-[600px] lg:w-[1100px] text-center mb-5">
                <Logo className="mx-auto h-auto w-full" />
            </div>

            {/* 2-Column Section */ }
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between w-[315px] sm:w-[600px] lg:w-[1100px]">
                {/* Left Column - Text and Button */ }
                <div className="sm:w-1/2 mb-8 sm:mb-0 text-center sm:text-left relative">
                    <p className="text-base sm:text-2xl lg:text-3xl font-semibold text-military-green mb-4">
                        Design is my passion! I create user-friendly, seamless digital experiences that bring your vision to life. Let’s make something amazing—hire me!
                    </p>
                    <button className="bg-grey-primary text-white-secondary font-bold py-4 px-12 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-military-green hover:to-military-green-secondary hover:shadow-2xl transition-all duration-300">
                        Hire me!
                    </button>
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
