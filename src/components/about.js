import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutProfileImage from "../assets/about-profile.png"; // Update this path if necessary
import backgroundBlack from "../assets/background-black.png"; // Background image

function About() {
    useEffect( () => {
        AOS.init( {
            duration: 1000, // Animation duration
            once: true, // Trigger animations only once
        } );
    }, [] );

    return (
        <div
            id="about"
            className="flex flex-col items-center justify-center bg-cover bg-center min-h-screen px-4 sm:px-8 py-16"
            style={ {
                backgroundImage: `url(${ backgroundBlack })`,
            } }
        >
            <div
                className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full sm:gap-8 lg:gap-12"
                data-aos="fade-up"
            >
                {/* Left Column: Image */ }
                <div
                    className="w-full sm:w-[45%] mb-8 sm:mb-0 flex justify-center"
                    data-aos="fade-right"
                >
                    <img
                        src={ aboutProfileImage }
                        alt="Profile"
                        className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[425px] h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Right Column: Text */ }
                <div
                    className="w-full sm:w-[50%] text-center sm:text-left flex flex-col items-center sm:items-start"
                    data-aos="fade-left"
                >
                    <h3 className="text-off-white-dark-theme font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        PRODUCT DESIGNER
                    </h3>
                    <p className="text-off-white-black text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-6 sm:mt-8 max-w-lg lg:max-w-md xl:max-w-[45ch] mx-auto sm:mx-0">
                        I'm passionate about user experiences and the journey they take. I specialize in designing and building minimal, user-centered, and responsive web pages.
                    </p>
                    <div
                        className="mt-6 sm:mt-8 text-military-green font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left"
                        data-aos="fade-up"
                    >
                        (about me)
                    </div>
                    <p className="text-off-white-black text-base sm:text-base md:text-base lg:text-xl mt-6 sm:mt-8 max-w-lg lg:max-w-md xl:max-w-[45ch] mx-auto sm:mx-0">
                        I'm Aleson, a passionate product designer with roots in Italy and the Philippines. I thrive on creating digital solutions that truly meet client needs, always with creativity and a commitment to growth. Recently graduated, I’m eager to apply my skills and contribute to dynamic teams. When I'm not designing, you’ll find me staying active at the gym. I'm excited to connect and take the next step in my career!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
