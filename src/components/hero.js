import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/header-logo.svg'; // Import your SVG logo
import heroProfile from '../assets/hero-profile.png'; // Import the image
import backgroundWhite from '../assets/background-white.png'; // Import the background image
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DateTime } from 'luxon'; // Import luxon for handling timezones

function Hero() {
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('Italy'); // Set the location to the name of the country

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true, // Animation happens only once
        });

        // Update time every second based on the location
        const updateTime = () => {
            // Use Intl.DateTimeFormat to get the location's time
            const now = DateTime.now().setZone('Europe/Rome'); // Ensure using correct timezone internally
            const timeString = now.toFormat('hh:mm:ss a'); // Format the time string as you want
            setTime(timeString);
        };

        const timer = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, [location]); // Re-run effect if location changes

    return (
        <div
            className="flex flex-col items-center justify-start pt-8 h-screen font-poppins bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundWhite})` }}
        >
            {/* SVG Logo */}
            <div
                id="hero"
                href="#"
                className="w-[310px] sm:w-[600px] lg:w-[1100px] text-center mb-5"
                data-aos="fade-down"
            >
                <Logo className="mx-auto h-auto w-full" />
            </div>

            {/* 2-Column Section */}
            <div
                className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between w-[315px] sm:w-[600px] lg:w-[1100px]"
                data-aos="fade-up"
            >
                {/* Left Column - Text and Button */}
                <div
                    className="sm:w-1/2 mb-8 sm:mb-0 text-center sm:text-left relative"
                    data-aos="fade-right"
                >
                    <p className="text-base sm:text-2xl lg:text-3xl font-semibold text-military-green mb-4">
                        Design is my passion! I create user-friendly, seamless digital experiences that bring your vision to life. Let’s make something amazing—hire me!
                    </p>
                    <a href="mailto:rolfaleson.pro@gmail.com?subject=Inquiry about Design Services&body=Hi, I would like to inquire about your design services.">
                        <button className="mt-8 bg-grey-primary text-white-secondary font-bold py-4 px-12 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-military-green hover:to-military-green-secondary hover:shadow-2xl transition-all duration-300">
                            Hire me!
                        </button>
                    </a>
                    {/* Local Time Tracker */}
                    <div className="mt-44 hidden md:block"> {/* Hides on screens smaller than md */}
                        <p className="text-grey-secondary font-bold text-lg">
                            LOCAL TIME: <span className="font-bold">{time}</span> - {location}
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div
                    className="sm:w-1/2 flex justify-center"
                    data-aos="fade-left"
                >
                    <img
                        src={heroProfile}
                        alt="Hero Profile"
                        className="w-[327px] sm:w-[327px] lg:w-[425px] h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
